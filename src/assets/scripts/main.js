function boxVisibility(e) {
    const boxButton = e.target.dataset.key;
    const boxElement = document.querySelector(`div[data-key="${boxButton}"]`);
    const boxMedia = document.querySelector(`audio[data-key="${boxButton}"]`);
    const boxElements = document.querySelectorAll("div[data-key*='box-key-']");
    const boxMedias = document.querySelectorAll("audio[data-key*='box-key-']");

    // Polyfill for EI11 - no forEach support
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    
    if(!boxElement) return;

    boxElements.forEach(function(EachBoxElement) {
        if (!EachBoxElement.classList.contains('u-box-hide')) {
        EachBoxElement.classList.add('u-box-hide');
        } 
    });

    boxElement.classList.remove("u-box-hide");

    boxMedias.forEach(function(EachBoxMedia) {
       EachBoxMedia.pause();
    });

    if(boxMedia) { boxMedia.play() }
}

document.addEventListener('click', boxVisibility);