const zoomTab = document.querySelector('img');
zoomTab.addEventListener('click', zoomVanGogh);

let zoomVanGogh = () => {
    if (zoomTab.style.width == '80%') {
        zoomTab.style.width = '100%';
    } else {
        zoomTab.style.width = '80%';
    };
}