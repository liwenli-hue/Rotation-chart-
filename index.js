var timer;
var oLi = document.querySelectorAll('.right-nav li');
var oImgLi = document.querySelectorAll('.box li');
var wrap = document.getElementsByClassName('wrapper')[0];
var nowIndex = 0;

function init() {
    bindEvent();
    play();
}
init();
// 事件函数
function bindEvent() {
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        // 移入当前li   当前li选中
        oLi[i].onmouseenter = function () {
            nowIndex = this.index;
            move(nowIndex);
        }
    };
    // 移到区域内清除定时器
    wrap.onmouseenter = function(){
        clearInterval(timer);
    }
    // 移出 继续自动轮播
    wrap.onmouseleave = function(){
        play();
    }
}

// 自动轮播  每隔一段时间索引值自动变化
function play() {
    clearInterval(timer);
    timer = setInterval(function () {
        nowIndex++;
        if (nowIndex == oLi.length) {
            nowIndex = 0;
        }
        move(nowIndex);
    }, 1800);
}

// 动作函数   选中菜单高度变化   右侧对应图片透明度变化
function move(i){
    var activeLi = document.getElementsByClassName('active')[0];
    activeLi.className = '';
    oLi[i].setAttribute('class', 'active');
    var activeImg = document.getElementsByClassName('show')[0];
    activeImg.className = '';
    oImgLi[i].setAttribute('class', 'show');
}