function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

function openNewPage(url) {
    window.location.href = url; // 直接在当前页面加载新页面
}
function enableScroll() {
    document.getElementById('windows-wrapper').style.overflow = 'auto';
}

function disableScroll() {
    document.getElementById('windows-wrapper').style.overflow = 'hidden';
}
