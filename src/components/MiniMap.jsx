import React, { useEffect, useState, useRef, useCallback } from 'react';

import "../css/minimap.css"

const clamp = (min, val, max) => {
  return Math.min(Math.max(min, val), max);
};

function getContentHeightAndWidth(element) {
  let widthWithPadding = element.clientWidth;
  let heightWithPadding = element.clientHeight;
  const elementComputedStyle = window.getComputedStyle(element, null);
  const rect = element.getBoundingClientRect()
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  const {
    paddingTop, paddingBottom,
    paddingLeft, paddingRight
  } = elementComputedStyle
  const heightWithoutPadding = (heightWithPadding -
    parseFloat(paddingTop) -
    parseFloat(paddingBottom));

  const widthWithoutPadding = (widthWithPadding -
    parseFloat(paddingLeft) -
    parseFloat(paddingRight));

  console.log(rect, "t b l r", paddingTop, paddingBottom, paddingLeft, paddingRight, windowHeight, windowWidth)

  return (
    {
      height: heightWithoutPadding,
      width: widthWithoutPadding,
      visHeight: clamp(0, rect.bottom - parseFloat(paddingBottom), windowHeight) - clamp(0, rect.top + parseFloat(paddingTop), windowHeight),
      visWidth: clamp(0, rect.right - parseFloat(paddingRight), windowWidth) - clamp(0, rect.left + parseFloat(paddingLeft), windowWidth),
    }
  );
}


const MiniMap = (props) => {
    const sliderRef = useRef(null);
    const sliderSizeRef = useRef(null);
    const controllerRef = useRef(null);
    const sliderContentRef = useRef(null);
    let scale = 1;
    const [realScale, setRealScale] = useState(NaN);

    console.log("real scale", realScale)
    let {content} = props
    
    const getDimensions = useCallback(() => {
      let bodyWidth = document.body.clientWidth;
      let bodyHeight = document.body.clientHeight;
      let bodyRatio = bodyHeight / bodyWidth;
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      let winRatio = windowHeight / windowWidth;
      
      console.log("w/h", "body", bodyWidth, "/", bodyHeight, "window", windowWidth, "/", windowHeight)

      sliderRef.current.style.width = (scale * 100) + '%';

      const calculatedScale = sliderRef.current.clientWidth / bodyWidth

      sliderSizeRef.current.style.paddingTop = `${bodyRatio * 100}%`
      controllerRef.current.style.paddingTop = `${winRatio * 100}%`;

      sliderContentRef.current.style.transform = `scale(${calculatedScale})`;
      sliderContentRef.current.style.width = `${(100 / calculatedScale)}%`
      sliderContentRef.current.style.height = `${(100 / calculatedScale)}%`

      if(isNaN(realScale) || Math.abs(calculatedScale - realScale) > 1e-9){
        setRealScale(() => calculatedScale)
      }
    }, [sliderRef, sliderSizeRef, controllerRef, sliderContentRef, realScale])

    const trackScroll = useCallback( () => {
      console.log("track scroll",window.scrollX, window.scrollY, realScale)
      controllerRef.current.style.transform = `translate(${Math.round(window.scrollX * realScale)}px, ${Math.round(window.scrollY * realScale)}px)`
    }, [controllerRef, realScale])

    const pointerDown = useCallback((e) => {
      e.preventDefault();
    
      const offsetX = ((e.clientX - sliderRef.current.offsetLeft) - (controllerRef.current.clientWidth / 2)) / realScale;
      const offsetY = ((e.clientY - sliderRef.current.offsetTop) - (controllerRef.current.clientHeight / 2)) / realScale;
    
      console.log(`OffsetX: ${offsetX}, OffsetY: ${offsetY}`); 
    
      window.scrollTo(offsetX, offsetY);
      trackScroll()
    }, [sliderRef, controllerRef, realScale]);
    

    useEffect(() => {
      const sliderContent = sliderContentRef.current;
      // let html = props.content.current.outerHTML;
      let html = document.documentElement.outerHTML.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
      let iframeDoc = sliderContent.contentWindow.document;
  
      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();
  
      getDimensions();
      window.addEventListener('scroll', trackScroll);
      window.addEventListener('resize', getDimensions);
  
      return () => {
        window.removeEventListener('scroll', trackScroll);
        window.removeEventListener('resize', getDimensions);
      };
    }, [realScale]);
  
    return (
      <div ref={sliderRef} className="slider" onMouseDown={pointerDown}>
        <div ref={sliderSizeRef} className="slider__size"></div>
        <div ref={controllerRef} className="slider__controller"></div>
        <iframe ref={sliderContentRef} className="slider__content"></iframe>
      </div>
    );
};
  

export default MiniMap;
