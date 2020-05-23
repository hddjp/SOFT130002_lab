
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/
var container = document.getElementsByClassName("container")[0];
var arrowLeft = document.getElementsByClassName("arrow_left")[0];
var arrowRight = document.getElementsByClassName("arrow_right")[0];
var wrap = document.getElementsByClassName("wrap")[0];
var buttons = document.getElementsByClassName("buttons")[0];
var order;
window.onload = function () {
    this.order = 1;
}
function move(num) {
    if (1 <= num && num <= 5) {
        buttons.children[order - 1].classList.remove("on");
        order = num;
        wrap.style.left = 600 - 600 * num + "px";
        buttons.children[order - 1].classList.add("on");
    }
    else if (num < 1) {
        move(num + 5);
    }
    else {
        move(num - 5);
    }
}
var tdgroup = document.querySelectorAll("td");

/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

arrowLeft.addEventListener("click", function () { move(order - 1) }, false);
arrowRight.addEventListener("click", function () { move(order + 1) }, false);

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

var play = setInterval(function () { move(order + 1); }, 2000);
container.addEventListener("mouseover", function () {
    clearInterval(play);
});
container.addEventListener("mouseout", function () {
    play = setInterval(function () { move(order + 1); }, 2000);
});

/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

for (let i = 0; i < 5; i++) {
    buttons.children[i].addEventListener("click", function () {
        move(i + 1);
    });
}

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/


var func = function () {
    var inputs = document.querySelectorAll("input");
    for (input of inputs) {
        text = document.createTextNode(input.value);
        input.parentNode.replaceChild(text, input);
    }
}
for (td of tdgroup) {
    td.addEventListener("click", function (e) {
        if (this.children[0] == undefined) {
            func();
            input = document.createElement("input");
            input.type = "text";
            input.className="a";
            input.style = "border-color:blue;border-width:1.5px;height:25px;width:190px";
            input.value = this.childNodes[0].nodeValue;
            this.replaceChild(input, this.firstChild);
            $("input.a").focus();
            e.stopPropagation();
        }
        else {
            e.stopPropagation();
        }
    })
}
window.addEventListener("click", func, false)

/*********************************************end*************************************/