let navsheji=document.getElementById("navsheji");
let navremen=document.getElementById("navremen");
let navwangzhi=document.getElementById("navwangzhi");
let navjiaocheng=document.getElementById("navjiaocheng");
let navguanyu=document.getElementById("navguanyu");
function pull(appearlist)
{
    document.getElementById(appearlist).style.display="flex";
}
function down(downlist)
{
    document.getElementById(downlist).style.display="none";
}


// 轮播图js




let countnumber = 0;
let IFgo = false;
let timer;

window.onload = function () {
    let ul_img = document.getElementsByClassName("ul_img")[0];
   
    let li_img = document.getElementsByClassName("li_img");
   
    let arrow = document.getElementsByClassName("arrow");
   
    let div_btn = document.getElementsByClassName("div_btn");
   

    /*定义计时器，控制图片移动*/
    showtime();
    function showtime() {
        timer = setInterval(function () {
            if (IFgo == false) {
                countnumber++;
                ul_img.style.transform = "translate(" + -920 * countnumber + "px)";
                if (countnumber >= li_img.length - 1) {
                    countnumber = li_img.length - 1;
                    IFgo = true;
                }
            }
            else {
                countnumber--;
                ul_img.style.transform = "translate(" + -920 * countnumber + "px)";
                if (countnumber <= 0) {
                    countnumber = 0;
                    IFgo = false;
                }
            }

            for (var i = 0; i < div_btn.length; i++) {
                div_btn[i].style.backgroundColor = "white";
            }
            
            div_btn[countnumber].style.backgroundColor = "white";
            
        }, 4000)
    }

    /*左右方向键操作*/
    for (var i = 0; i < arrow.length; i++) {
        //鼠标悬停时
        arrow[i].onmouseover = function () {
            
            clearInterval(timer);
        }
        //鼠标离开时
        arrow[i].onmouseout = function () {
           
            showtime();
        }
        arrow[i].onclick = function () {
            //区分左右
            if (this.title == 0) {
                countnumber++;
                if (countnumber >= 3) {
                    countnumber = 0;
                }
            }
            else {
                countnumber--;
                if (countnumber < 0) {
                    countnumber = 2;
                }
            }

            ul_img.style.transform = "translate(" + -920 * countnumber + "px)";

            for (var i = 0; i < div_btn.length; i++) {
                div_btn[i].style.backgroundColor = "white";
            }
            div_btn[countnumber].style.backgroundColor = "white";
        }
    }

    //鼠标悬停在底部按钮的操作
    for (var b = 0; b < div_btn.length; b++) {
        div_btn[b].index = b;
        div_btn[b].onmouseover = function () {

            clearInterval(timer);

            for (var a = 0; a < div_btn.length; a++) {
                div_btn[a].style.backgroundColor = "aquamarine";
            }
            div_btn[this.index].style.backgroundColor = "aqua";
            //让countnumber值对应
            //为了控制方向
            if (this.index == 3) {
                IFgo = true;
            }
            if (this.index == 0) {
                IFgo = false;
            }
            countnumber = this.index;
            ul_img.style.transform = "translate(" + -920 * this.index + "px)";
        }

        div_btn[b].onmouseout = function () {
            //添加计时器
            showtime();
        }
    }
}