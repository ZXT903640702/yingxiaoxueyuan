//复制链接
$(".wz-share").on("click","#copyHref",function(){
    var inp = document.createElement("input");
    document.documentElement.appendChild(inp);
    inp.style.position = "absolute";
    inp.style.opacity = 0;
    inp.type = "text";
    inp.value = location.href;
    inp.select();
    document.execCommand("Copy");
    alert("复制成功，请粘贴到你的QQ/微信上推荐给你的好友");
    document.documentElement.removeChild(inp);
});