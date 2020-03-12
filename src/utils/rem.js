// const baseSize = 32; // 基準大小


// function setRem() {
//   // # 當前頁面寬度 750 寬的縮放比例，可根據自己需求來須改。
//   const scale = document.documentElement.clientWidth / 750
//   // # 設定根面根節點字體大小
//   document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
// }

// // # 初始化
// setRem()
// // # 每當視窗改變時，重新對html 設置 rem
// window.onresize = function () {
//   setRem();
// }


!(function (win, option) {
  var count = 0, designWidth = option.designWidth, designHeight = option.designHeight || 0, designFontSize = option.designFontSize || 20, maxWidth = option.maxWidth || 800, callback = option.callback || null, root = document.documentElement, rootWidth, newSize, t, self; function _getNewFontSize() { var winWidth = win.innerWidth > maxWidth ? maxWidth : win.innerWidth; var scale = designHeight !== 0 ? Math.min(winWidth / designWidth, win.innerHeight / designHeight) : winWidth / designWidth; return scale * designFontSize; }
  !(function () { var winWidth = win.innerWidth > maxWidth ? maxWidth : win.innerWidth; rootWidth = root.getBoundingClientRect().width; self = self ? self : arguments.callee; if (rootWidth !== winWidth && count < 20) { win.setTimeout(function () { count++; self(); }, 0); } else { newSize = Math.floor(_getNewFontSize()); if (newSize + 'px' !== getComputedStyle(root)['font-size']) { root.style.fontSize = newSize + 'px'; return callback && callback(newSize); } } })(); win.addEventListener('onorientationchange', function () { clearTimeout(t); t = setTimeout(function () { self(); }, 200); }, false); win.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(function () { self(); }, 200); }, false); win.document.addEventListener('gesturestart', function (e) { e.preventDefault(); });
})(window, { designWidth: 750, designFontSize: 100, maxWidth: 800 });