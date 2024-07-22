function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

function openNewPage(url) {
    window.location.href = url; // 直接在当前页面加载新页面
}
