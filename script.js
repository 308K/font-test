document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("textarea");

    // 获取 URL 中的锚点部分
    var hash = window.location.hash;

    // 去除 # 号并填入 textarea
    if (hash) {
        var decodedText = decodeURIComponent(hash.substring(1)); // 去除 # 号并解码
        textarea.value = decodedText;
    }
});
const textarea = document.getElementById("textarea1");
const fontSizeSlider = document.getElementById("fontSizeSlider");

fontSizeSlider.addEventListener("input", function() {
  const selectedFontSize = fontSizeSlider.value;
  textarea.style.fontSize = selectedFontSize + "px";
});
const textarea = document.getElementById("textarea2");
const fontSizeSlider = document.getElementById("fontSizeSlider");

fontSizeSlider.addEventListener("input", function() {
  const selectedFontSize = fontSizeSlider.value;
  textarea.style.fontSize = selectedFontSize + "px";
});
