import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '~styles/breakpoints';

export const useScreenDetector = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isSmallMobile = width <= 375;
    const isMobile = width <= parseInt(BREAKPOINTS.mobile, 10);
    const isTablet =
        width <= parseInt(BREAKPOINTS.tablet, 10) &&
        width > parseInt(BREAKPOINTS.mobile, 10);
    const isDesktop = width > parseInt(BREAKPOINTS.tablet, 10);

    return { isSmallMobile, isMobile, isTablet, isDesktop };
};