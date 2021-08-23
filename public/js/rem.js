!(function(win, doc) {
    function setFontSize() {
        const designWidth = 750;

        const html = doc.documentElement;
        const deviceWidth = html.clientWidth <= 0 ? 375 : html.clientWidth;
        html.style.fontSize = deviceWidth / designWidth * 100 + 'px';
        doc.body.style.fontSize = .28 + 'rem';
    }

    let timer = null;
    win.addEventListener('resize', function() {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);
    win.addEventListener("DOMContentLoaded", function() {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);
    //初始化 
    setFontSize();
}(window, document));