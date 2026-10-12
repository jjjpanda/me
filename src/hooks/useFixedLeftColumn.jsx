import {useRef, useState, useCallback, useEffect} from 'react'
import { useWindowEvent  } from '@mantine/hooks';

const useFixedLeftColumn = () => {
    const leftColumnRef = useRef(null);
    const [leftColumnStyle, setLeftColumnStyle] = useState({});

    const updateLeftColumnFixedPosition = useCallback(() => {
        if(leftColumnRef.current){
            setLeftColumnStyle(() => ({
                position: "fixed", 
                top: "var(--app-shell-padding, 16px)",
                height: "calc(100vh - var(--app-shell-padding, 16px) * 2)",
                width: leftColumnRef.current.clientWidth, 
                boxSizing: "border-box"
            }))
        }
    }, [leftColumnRef])
    
    useEffect(updateLeftColumnFixedPosition, [leftColumnRef])
    useWindowEvent("resize", updateLeftColumnFixedPosition)

    return [leftColumnRef, leftColumnStyle]
}

export default useFixedLeftColumn;