import {useCallback, useState, useEffect} from 'react'
import { useWindowEvent, useWindowScroll  } from '@mantine/hooks';

const useSectionHeights = (refArr, mobile=false) => {
    const [sectionHeights, setSectionHeights] = useState([])
    const [activeSection, setActiveSection] = useState("");

    const updateSectionHeights = useCallback(() => {
        console.log("updating section heights")
        if(!refArr.map(({ ref }) => !!ref?.current).includes(false)){
            const heights = refArr.map(({key, ref, title}) => {
              return {
                key, 
                value: ref.current.clientHeight, 
                title
              }  
            })
            let sum = 0; 
            for(let heightEntry of heights){
                heightEntry.height = sum;
                sum += heightEntry.value
            }
            setSectionHeights(() => heights)
        }
    }, refArr.map(({ ref }) => ref?.current?.clientHeight))

    useEffect(updateSectionHeights, refArr.map(({ ref }) => ref?.current?.clientHeight))
    useWindowEvent("resize", updateSectionHeights)

    const [scroll, scrollTo] = useWindowScroll();

    const handleSectionJump = useCallback((sectionKey) => {
        if(sectionHeights.length > 0){
            const sectionToScrollTo = sectionHeights.find(section => section.key === sectionKey);
            console.log("scroll to", sectionKey, sectionToScrollTo)
            if(mobile){
                window.scrollTo(
                    0,
                    sectionToScrollTo.height + 1
                )
            }else{
                scrollTo({
                    x: 0, 
                    y: sectionToScrollTo.height + 1
                })
            }
        }
    }, [...refArr.map(({ ref }) => ref?.current), activeSection, sectionHeights])

    useEffect(() => {
        const isActiveSectionPossible = sectionHeights.length > 0 && scroll.y > 0;
        if(isActiveSectionPossible){
            setActiveSection(() => {
                return sectionHeights.reduce((possibleKey, currentSection) => {
                    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                    if(scroll.y >= Math.max(0, currentSection.height - windowHeight/3)){ //66% of scroll box is within section
                        return currentSection.key
                    }
                    else{
                        return possibleKey
                    }
                }, null)
            })
        }
    }, [scroll.x, scroll.y])

    console.log("section scrolling", scroll, sectionHeights)

    return [activeSection, sectionHeights, handleSectionJump]
}

export default useSectionHeights;