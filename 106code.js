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
function openPreview() {
    // 在新标签页中打开当前目录下的preview.html文件
    window.open('lovedaima.html', '_blank');
}

function downloadFile() {
    // 触发浏览器下载指定的zip文件
    const downloadUrl = '爱心代码.zip'; // 使用相对路径或绝对路径
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'filename.zip'; // 设置下载的文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}