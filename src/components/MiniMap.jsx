import React, { useEffect, useRef, useState } from 'react';

import "../css/minimap.css"

const MiniMap = () => {
    const sliderRef = useRef(null);
    const sliderSizeRef = useRef(null);
    const controllerRef = useRef(null);
    const sliderContentRef = useRef(null);
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    let scale = 0.1;
    let realScale;
  
    const pointerDown = (e) => {
      e.preventDefault();
      setMouseDown(true);
      setMouseX(e.clientX);
      setMouseY(e.clientY);
  
      const offsetX = ((e.clientX - sliderRef.current.offsetLeft) - (controllerRef.current.clientWidth / 2)) / realScale;
      const offsetY = ((e.clientY - sliderRef.current.offsetTop) - (controllerRef.current.clientHeight / 2)) / realScale;
  
      window.scrollTo(offsetX, offsetY);
    };
  
    const pointerMove = (e) => {
      if (mouseDown) {
        e.preventDefault();
        window.scrollBy((e.clientX - mouseX) / realScale, ((e.clientY - mouseY) / realScale));
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      }
    };
  
    const pointerReset = () => {
      setMouseDown(false);
    };
  
    useEffect(() => {
      const slider = sliderRef.current;
      const sliderSize = sliderSizeRef.current;
      const controller = controllerRef.current;
      const sliderContent = sliderContentRef.current;
  
      let html = document.documentElement.outerHTML.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
      let iframeDoc = sliderContent.contentWindow.document;
  
      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();
  
      function getDimensions() {
        let bodyWidth = document.body.clientWidth;
        let bodyRatio = document.body.clientHeight / bodyWidth;
        let winRatio = window.innerHeight / window.innerWidth;
  
        slider.style.width = (scale * 100) + '%';
  
        realScale = slider.clientWidth / bodyWidth;
  
        sliderSize.style.paddingTop = `${bodyRatio * 100}%`
        controller.style.paddingTop = `${winRatio * 100}%`;
  
        sliderContent.style.transform = `scale(${realScale})`;
        sliderContent.style.width = `${(100 / realScale)}%`
        sliderContent.style.height = `${(100 / realScale)}%`
      }
  
      function trackScroll() {
        controller.style.transform = `translate(${window.pageXOffset * realScale}px, ${window.pageYOffset * realScale}px)`
      }
  
      getDimensions();
      window.addEventListener('scroll', trackScroll);
      window.addEventListener('resize', getDimensions);
      window.addEventListener('mouseup', pointerReset); // Moved to window
  
      return () => {
        window.removeEventListener('scroll', trackScroll);
        window.removeEventListener('resize', getDimensions);
        window.removeEventListener('mouseup', pointerReset); // Moved to window
      };
    }, [mouseDown, mouseX, mouseY]);
  
    return (
      <div ref={sliderRef} className="slider" onMouseDown={pointerDown} onMouseMove={pointerMove}>
        <div ref={sliderSizeRef} className="slider__size"></div>
        <div ref={controllerRef} className="slider__controller"></div>
        <iframe ref={sliderContentRef} className="slider__content"></iframe>
      </div>
    );
};
  

export default MiniMap;
