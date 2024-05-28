import {useRef, useState, useCallback, useEffect} from 'react'
import { useWindowEvent  } from '@mantine/hooks';

const useFixedLeftColumn = () => {
    const leftColumnRef = useRef(null);
    const [leftColumnStyle, setLeftColumnStyle] = useState({});

    const updateLeftColumnFixedPosition = useCallback(() => {
        if(leftColumnRef.current){
            setLeftColumnStyle(() => ({
                position: "fixed", 
                width: leftColumnRef.current.clientWidth, 
                height: leftColumnRef.current.clientHeight,
                padding: "var(--grid-col-padding)"
            }))
        }
    }, [leftColumnRef])
    
    useEffect(updateLeftColumnFixedPosition, [leftColumnRef])
    useWindowEvent("resize", updateLeftColumnFixedPosition)

    return [leftColumnRef, leftColumnStyle]
}

export default useFixedLeftColumn;