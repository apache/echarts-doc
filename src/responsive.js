import {store} from './store';

function handleResize() {
    if (window.innerWidth < 600) {
        store.isMobile = true;
    }
    else {
        store.isMobile = false;
    }
}

export function initResponsive() {
    window.addEventListener('resize', handleResize);
    handleResize();
}