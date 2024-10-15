import {useState, useEffect} from 'react';

const useCascadingLoad = (numberOfComponents, delay = 500) => {
    const [loadedComponents, setLoadedComponents] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setLoadedComponents(prev => {
                if (prev.length < numberOfComponents) {
                    return [...prev, prev.length]
                }
                clearInterval(timer);
                return prev
            })
        }, delay);
        
        return () => clearInterval(timer);
    }, [numberOfComponents, delay]);
    return loadedComponents;
};

export default useCascadingLoad;