import {useCallback, useState, useEffect, useRef} from 'react'
import { useWindowEvent, useWindowScroll  } from '@mantine/hooks';
import useInterval from './useInterval.jsx';

const getUnix = () => (new Date()).getTime();
const DELTA_T = 200; //milliseconds
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const useSectionHeights = (refArr, mobile=false) => {
    const [sectionHeights, setSectionHeights] = useState([])
    const [activeSection, setActiveSection] = useState("");
    const [scrollYAtLastChange, setScrollYAtLastChange] = useState(0)
    const [sectionChangeTime, setSectionChangeTime] = useState(0);
    const [autoUpdateInterval, setAutoUpdateInterval] = useState(null);
    const activeAnimationRef = useRef(null);
    const isJumpingRef = useRef(false);

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
            let sum = 1; //pixel 
            for(let heightEntry of heights){
                heightEntry.height = sum;
                sum += heightEntry.value
            }
            setSectionHeights(() => heights)
        }
    }, refArr.map(({ ref }) => ref?.current?.clientHeight))

    useEffect(updateSectionHeights, refArr.map(({ ref }) => ref?.current?.clientHeight))
    useWindowEvent("resize", updateSectionHeights)

    const [scroll] = useWindowScroll();

    const cancelFastScroll = useCallback(() => {
        if (activeAnimationRef.current) {
            cancelAnimationFrame(activeAnimationRef.current);
            activeAnimationRef.current = null;
        }
        isJumpingRef.current = false;
    }, []);

    const fastScrollTo = useCallback((targetY, duration = 300) => {
        if (activeAnimationRef.current) {
            cancelAnimationFrame(activeAnimationRef.current);
            activeAnimationRef.current = null;
        }

        const maxScroll = Math.max(
            0,
            (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight
        );
        const clampedTargetY = Math.max(0, Math.min(targetY, maxScroll));
        const startY = window.scrollY || window.pageYOffset || 0;
        const distance = clampedTargetY - startY;

        if (Math.abs(distance) < 2) {
            window.scrollTo(0, clampedTargetY);
            isJumpingRef.current = false;
            return;
        }

        const startTime = performance.now();
        isJumpingRef.current = true;

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startY + distance * ease);

            if (progress < 1) {
                activeAnimationRef.current = requestAnimationFrame(step);
            } else {
                activeAnimationRef.current = null;
                window.scrollTo(0, clampedTargetY);
                setTimeout(() => {
                    isJumpingRef.current = false;
                }, 50);
            }
        };

        activeAnimationRef.current = requestAnimationFrame(step);
    }, []);

    useEffect(() => {
        const handleUserInteraction = () => {
            if (activeAnimationRef.current) {
                cancelFastScroll();
            }
        };

        window.addEventListener('wheel', handleUserInteraction, { passive: true });
        window.addEventListener('touchstart', handleUserInteraction, { passive: true });
        return () => {
            if (activeAnimationRef.current) {
                cancelAnimationFrame(activeAnimationRef.current);
            }
            window.removeEventListener('wheel', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [cancelFastScroll]);

    const handleSectionJump = useCallback((sectionKey) => {
        if(sectionHeights.length > 0){
            const sectionToScrollTo = sectionHeights.find(section => section.key === sectionKey);
            console.log("scroll to", sectionKey, sectionToScrollTo)
            if (sectionToScrollTo) {
                setActiveSection(sectionKey);
                fastScrollTo(sectionToScrollTo.height + 1, 300);
            }
        }
    }, [sectionHeights, fastScrollTo])

    const updateActiveSection = () => {
        if (isJumpingRef.current) {
            return;
        }

        const isActiveSectionPossible = (sectionHeights.length > 0) && (scroll.y > 0);

        const activeSectionToAdd = !isActiveSectionPossible ? "preface" : sectionHeights.reduce((possibleKey, currentSection) => {
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            if(scroll.y >= Math.max(0, currentSection.height - windowHeight/3)){ //66% of scroll box is within section
                return currentSection.key
            }
            else{
                return possibleKey
            }
        }, null)

        const timeDelta = getUnix() - sectionChangeTime 
        const distanceDelta = Math.abs(scroll.y - scrollYAtLastChange)
        const sectionChanged = activeSection !== activeSectionToAdd

        const scrollSpeed = distanceDelta / timeDelta
        console.log("active update speed", scrollSpeed, distanceDelta, timeDelta)

        if(scrollSpeed < 6.66){
            setActiveSection(() => activeSectionToAdd)
            setSectionChangeTime(() => getUnix())
            setScrollYAtLastChange(() => scroll.y)
            setAutoUpdateInterval(() => null)
        }
        else if(sectionChanged){
            console.log("active update", timeDelta, distanceDelta, activeSection, "->", activeSectionToAdd)
            setAutoUpdateInterval(() => DELTA_T)
        }
    }

    useEffect(updateActiveSection, [scroll.y])
    useInterval(updateActiveSection, autoUpdateInterval)

    console.log("section scrolling", scroll, sectionHeights)

    return [activeSection, sectionHeights, handleSectionJump]
}

export default useSectionHeights;