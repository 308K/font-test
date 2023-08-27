document.addEventListener("DOMContentLoaded", function() {
    var textarea1 = document.getElementById("textarea1");
    var textarea2 = document.getElementById("textarea2");

    // 获取 URL 中的锚点部分
    var hash = window.location.hash;

    // 去除 # 号并填入对应的 textarea
    if (hash) {
        var decodedText = decodeURIComponent(hash.substring(1)); // 去除 # 号并解码
        textarea1.value = decodedText;
        textarea2.value = decodedText;
    }
});
