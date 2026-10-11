import React, { useEffect, useState, useRef, useCallback } from 'react';

import { ColorSwatch, Box, Tooltip } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';

const clamp = (min, val, max) => {
  return Math.min(Math.max(min, val), max);
};

function getContentHeightAndWidth(element) {
  let widthWithPadding = element.clientWidth;
  let heightWithPadding = element.clientHeight;
  const rect = element.getBoundingClientRect()
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  return (
    {
      height: heightWithPadding,
      width: widthWithPadding,
      visHeight: clamp(0, rect.bottom , windowHeight) - clamp(0, rect.top , windowHeight),
      visWidth: clamp(0, rect.right , windowWidth) - clamp(0, rect.left, windowWidth),
    }
  );
}

function computedStyle(element) {
  return window.getComputedStyle(element, null);
}


const MiniMap = (props) => {
    const sliderRef = useRef(null);
    const sliderSizeRef = useRef(null);
    const controllerRef = useRef(null);
    const sliderContentRef = useRef(null);
    const [realScale, setRealScale] = useState(NaN);
    const [disableTooltip, setDisableTooltip] = useState(false);

    const isDraggingRef = useRef(false);
    const dragStartPosRef = useRef({ mouseY: 0, scrollY: 0 });

    let {content} = props;

    // Toggle html.has-minimap so the browser scrollbar is replaced iff MiniMap is mounted
    useEffect(() => {
      document.documentElement.classList.add('has-minimap');
      return () => {
        document.documentElement.classList.remove('has-minimap');
      };
    }, []);

    const temporarilyDisableTooltip = () => {
      setDisableTooltip(() => true)
      setTimeout(() => setDisableTooltip(() => false), 1000)
    }
    
    const getDimensions = useCallback(() => {
      if (!content.current || !sliderRef.current || !sliderSizeRef.current || !controllerRef.current || !sliderContentRef.current) {
        return;
      }
      const {width, height, visWidth, visHeight} = getContentHeightAndWidth(content.current)

      let bodyWidth = document.body.clientWidth;
      let bodyHeight = document.body.clientHeight;
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      let eleRatio = height / width;
      let winRatio = visHeight / visWidth;

      const baseTop = 25;
      const desiredMiniMapHeight = windowHeight - baseTop * 2;
      let scaleFactorModification = 1
      sliderRef.current.style.width = '100%';
      if(desiredMiniMapHeight <= 0){
        return
      }
      while(sliderRef.current.clientHeight > desiredMiniMapHeight){
        scaleFactorModification*=0.99
        sliderRef.current.style.width = (scaleFactorModification * 100) + '%';
      }
      
      const calculatedScaleWidth = sliderRef.current.clientWidth / width;
      const calculatedScaleHeight = sliderRef.current.clientHeight / height;
      const calculatedScale = Math.min(calculatedScaleWidth, calculatedScaleHeight);

      const heightDifferential = Math.max((desiredMiniMapHeight - sliderRef.current.clientHeight), 0);
      sliderRef.current.style.top = `${baseTop + heightDifferential / 2}px` 

      sliderSizeRef.current.style.paddingTop = `${eleRatio * 100}%`
      controllerRef.current.style.paddingTop = `${winRatio * 100}%`;

      sliderContentRef.current.style.transform = `scale(${calculatedScale})`;
      sliderContentRef.current.style.width = `${(100 / calculatedScale )}%`
      sliderContentRef.current.style.height = `${(100  / calculatedScale)}%`

      if(isNaN(realScale) || Math.abs(calculatedScale - realScale) > 1e-9){
        setRealScale(() => calculatedScale)
      }
    }, [sliderRef, sliderSizeRef, controllerRef, sliderContentRef, realScale, content])

    const trackScroll = useCallback(() => {
      if (!controllerRef.current || isNaN(realScale)) return;
      const scrollX = window.scrollX || window.pageXOffset || 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      controllerRef.current.style.transform = `translate(${Math.round(scrollX * realScale)}px, ${Math.round(scrollY * realScale)}px)`;
    }, [controllerRef, realScale]);

    const handlePointerMove = useCallback((e) => {
      if (!isDraggingRef.current || isNaN(realScale) || realScale === 0) return;
      e.preventDefault();

      const deltaY = (e.clientY - dragStartPosRef.current.mouseY) / realScale;
      const maxScroll = Math.max(0, (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight);
      const targetY = Math.max(0, Math.min(dragStartPosRef.current.scrollY + deltaY, maxScroll));

      window.scrollTo({ left: 0, top: targetY, behavior: 'instant' });
      if (controllerRef.current) {
        const scrollX = window.scrollX || window.pageXOffset || 0;
        controllerRef.current.style.transform = `translate(${Math.round(scrollX * realScale)}px, ${Math.round(targetY * realScale)}px)`;
      }
    }, [realScale, controllerRef]);

    const handlePointerUp = useCallback(() => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      trackScroll();
      temporarilyDisableTooltip();
    }, [handlePointerMove, trackScroll]);

    const startDragging = useCallback((mouseY, initialScrollY) => {
      isDraggingRef.current = true;
      dragStartPosRef.current = { mouseY, scrollY: initialScrollY };
      setDisableTooltip(true);

      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointercancel', handlePointerUp);
    }, [handlePointerMove, handlePointerUp]);

    const handleControllerPointerDown = useCallback((e) => {
      if (isNaN(realScale) || realScale === 0) return;
      e.preventDefault();
      e.stopPropagation();
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      startDragging(e.clientY, currentScrollY);
    }, [realScale, startDragging]);

    const handleTrackPointerDown = useCallback((e) => {
      if (isNaN(realScale) || realScale === 0 || !sliderRef.current) return;
      e.preventDefault();

      const boxHeight = (controllerRef.current?.clientHeight || 0) / 2;
      const offsetY = ((e.clientY - sliderRef.current.offsetTop) - boxHeight) / realScale;
      const maxScroll = Math.max(0, (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight);
      const targetY = Math.max(0, Math.min(offsetY, maxScroll));

      window.scrollTo({ left: 0, top: targetY, behavior: 'instant' });
      if (controllerRef.current) {
        const scrollX = window.scrollX || window.pageXOffset || 0;
        controllerRef.current.style.transform = `translate(${Math.round(scrollX * realScale)}px, ${Math.round(targetY * realScale)}px)`;
      }

      startDragging(e.clientY, targetY);
    }, [realScale, sliderRef, controllerRef, startDragging]);

    const handleSectionJump = useCallback((height) => {
      window.scrollTo({ left: 0, top: height, behavior: 'smooth' });
      setTimeout(trackScroll, 100);
      temporarilyDisableTooltip();
    }, [trackScroll]);

    useEffect(() => {
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
        window.removeEventListener('pointercancel', handlePointerUp);
      };
    }, [handlePointerMove, handlePointerUp]);

    useEffect(() => {
      const sliderContent = sliderContentRef.current;

      if(!content.current || !sliderContent){
        return;
      }

      let main = content.current.outerHTML;
      let styleSheets = document.documentElement.getElementsByTagName("style");
      let html = `<html>
        <head>
          ${Array.from(styleSheets).map(sheet => {
            return sheet.outerHTML
          }).join("\n")}
        </head>
        <body>
          ${main}
        </body>
      </html>`

      let iframeDoc = sliderContent.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(html);
        iframeDoc.close();
      }
    }, [realScale, content?.current]);

    useEffect(getDimensions, [sliderContentRef?.current?.outerHTML])
    useEffect(trackScroll, [realScale])

    useWindowEvent("scroll", trackScroll)
    useWindowEvent("resize", getDimensions)
    useWindowEvent("mouseout", getDimensions)

    return (
      <div ref={sliderRef} className="slider" >
        <div ref={sliderSizeRef} className="slider__size" onPointerDown={handleTrackPointerDown}></div>
        <div ref={controllerRef} className="slider__controller" onPointerDown={handleControllerPointerDown}></div>
        <iframe ref={sliderContentRef} className="slider__content" tabIndex={-1} aria-hidden="true"></iframe>
        {props.sections?.map(section => {
          const sectionColor = `--mantine-color-${section.key}`;
          const style = getComputedStyle(document.body);
          const colorValue = style.getPropertyValue(sectionColor);
          
          if (!colorValue) {
            return null;
          }
          else{
            return <Box
              onClick={(e) => {
                e.stopPropagation();
                handleSectionJump(section.height);
              }}
              key={`dot-marker-${section.key}`}
              className="slider__section_marker" 
              style={{
                left: `-16px`,
                top: `${100 * section.height / (content?.current?.clientHeight || 1)}%`,
                cursor: 'pointer'
              }}
            >
              <Tooltip 
                label={section.title}
                position="left"
                disabled={disableTooltip}
              >
                <ColorSwatch 
                  size={10} 
                  color={`var(${sectionColor})`} 
                />
              </Tooltip>
            </Box>
          }
        })}
      </div>
    );
};
  

export default MiniMap;
