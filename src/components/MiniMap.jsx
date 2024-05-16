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
  const heightWithoutPadding = (heightWithPadding);

  const widthWithoutPadding = (widthWithPadding);

  //console.log(rect, "t b l r", paddingTop, paddingBottom, paddingLeft, paddingRight, windowHeight, windowWidth)

  return (
    {
      height: heightWithoutPadding,
      width: widthWithoutPadding,
      visHeight: clamp(0, rect.bottom , windowHeight) - clamp(0, rect.top , windowHeight),
      visWidth: clamp(0, rect.right , windowWidth) - clamp(0, rect.left, windowWidth),
    }
  );
}


const MiniMap = (props) => {
    const sliderRef = useRef(null);
    const sliderSizeRef = useRef(null);
    const controllerRef = useRef(null);
    const sliderContentRef = useRef(null);
    const [realScale, setRealScale] = useState(NaN);
    
    let scale = 1;

    console.log("real scale", realScale)
    let {content} = props
    
    const getDimensions = useCallback(() => {
      const {width, height, visWidth, visHeight} = getContentHeightAndWidth(content.current)

      let bodyWidth = document.body.clientWidth;
      let bodyHeight = document.body.clientHeight;
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      console.log(
        "w/h", 
        "\nbody", bodyWidth, "/", bodyHeight, 
        "\nwindow", windowWidth, "/", windowHeight, 
        "\ncontent", width, "/", height,
        "\nvis content", visWidth, "/", visHeight
      )

      let eleRatio = height / width;
      let winRatio = visHeight / visWidth;

      sliderRef.current.style.width = (scale * 100) + '%';

      
      const calculatedScaleWidth = sliderRef.current.clientWidth / width;
      const calculatedScaleHeight = sliderRef.current.clientHeight / height;
      console.log("calculated scale", calculatedScaleWidth, "or", calculatedScaleHeight)
      const calculatedScale = Math.min(calculatedScaleWidth, calculatedScaleHeight);

      sliderSizeRef.current.style.paddingTop = `${eleRatio * 100}%`
      controllerRef.current.style.paddingTop = `${winRatio * 100}%`;

      sliderContentRef.current.style.transform = `scale(${calculatedScale})`;
      sliderContentRef.current.style.width = `${(100 / calculatedScale )}%`
      sliderContentRef.current.style.height = `${(100  / calculatedScale)}%`

      if(isNaN(realScale) || Math.abs(calculatedScale - realScale) > 1e-9){
        setRealScale(() => calculatedScale)
      }
    }, [sliderRef, sliderSizeRef, controllerRef, sliderContentRef, realScale])

    const trackScroll = useCallback( () => {
      console.log("track scroll", "\nx:", window.scrollX, "/", document.body.clientWidth, "\ny:", window.scrollY, "/", document.body.clientHeight, "\nscale:", realScale)
      controllerRef.current.style.transform = `translate(${Math.round(window.scrollX * realScale)}px, ${Math.round(window.scrollY * realScale)}px)`
      getDimensions()
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
      let main = content.current.outerHTML;
      let styleSheets = document.documentElement.getElementsByTagName("style");
      let html = `<html>
        <head>
          ${Array.from(styleSheets).map(sheet => sheet.outerHTML).join("\n")}
        </head>
        <body>
          ${main}
        </body>
      </html>`
      console.log(html)

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
