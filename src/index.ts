import {useEffect, useState} from 'react';


const CLASS_NAMES = ['pub_300x250', 'pub_300x250m', 'pub_728x90', 'text-ad', 'textAd', 'text_ad', 'text_ads', 'text-ads', 'text-ad-links'];

function useAdblockDetect() {
    const [detected, setDetected] = useState(false);

    useEffect(() => {
        const bait = document.createElement('div');
        bait.classList.add(...CLASS_NAMES);
        bait.style.position = 'absolute';
        bait.style.pointerEvents = 'none';
        bait.style.width = '1px';
        bait.style.height = '1px';

        document.body.appendChild(bait);

        if (window.document.body.getAttribute('abp') !== null
            || bait.offsetParent === null
            || bait.offsetHeight == 0
            || bait.offsetWidth == 0
            || bait.offsetLeft == 0
		    || bait.offsetTop == 0
            || bait.clientHeight == 0
            || bait.clientWidth == 0) {
            setDetected(true);
        } else if (window.getComputedStyle !== undefined) {
            const baitTemp = window.getComputedStyle(bait, null);
            if (baitTemp && (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden')) {
                setDetected(true);
            }
        }

        bait.remove();
    }, []);

    return detected;
}

export default useAdblockDetect;
