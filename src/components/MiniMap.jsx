import React, { useEffect, useState, useRef, useCallback } from 'react';

import "../css/minimap.css"

const MiniMap = (props) => {
    const sliderRef = useRef(null);
    const sliderSizeRef = useRef(null);
    const controllerRef = useRef(null);
    const sliderContentRef = useRef(null);
    let scale = 0.1;
    const [realScale, setRealScale] = useState(NaN);

    console.log("real scale", realScale)

    
    const getDimensions = useCallback(() => {
      let bodyWidth = document.body.clientWidth;
      let bodyRatio = document.body.clientHeight / bodyWidth;
      let winRatio = window.innerHeight / window.innerWidth;

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
