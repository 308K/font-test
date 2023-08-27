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
document.getElementById("shareButton1").addEventListener("click", function() {
    var textareaContent = document.getElementById("textarea1").value;
    shareTextareaContent(textareaContent);
});

document.getElementById("shareButton2").addEventListener("click", function() {
    var textareaContent = document.getElementById("textarea2").value;
    shareTextareaContent(textareaContent);
});

function shareTextareaContent(content) {
    var currentURL = window.location.href.split('#')[0]; // Get the current URL without the hash
    var shareLink = currentURL + "#" + encodeURIComponent(content);
    copyToClipboard(shareLink);
    alert("已复制分享链接：" + shareLink);
}

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
