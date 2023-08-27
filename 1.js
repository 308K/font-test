document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("textarea1");

    // 获取 URL 中的锚点部分
    var hash = window.location.hash;

    // 去除 # 号并填入 textarea
    if (hash) {
        var decodedText = decodeURIComponent(hash.substring(1)); // 去除 # 号并解码
        textarea1.value = decodedText;
    }
});