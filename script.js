$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navba').addClass("sticky");
        }else{
            $('.navba').removeClass("sticky");
        }
    });
    var typed = new Typed(".typing-2", {
        strings: ["Portfolio", "goal", "inspiration"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    //toggle menu/navba script
    $('.menu-btn').click(function(){
        $('.navba .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});
var v = document.getElementById("hide");
var c = document.getElementById("hidden");
var df = document.getElementById("hid");
var r = document.getElementById("r");
var e = document.getElementById("e");
var a = document.getElementById("a");
var d = document.getElementById("d");
var b = document.getElementById("b");
var s = document.getElementById("c");
var cs = document.getElementById("css");
var as = document.getElementById("ass");
var hidee = document.getElementById("hidee")
function R(){
    v.style.display = "block";
    r.style.display = "none";
    d.style.display = "block";
}
function em(){
    c.style.display = "block";
    e.style.display = "none";
    b.style.display = "block";
}
function am(){
    df.style.display = "block";
    a.style.display = "none";
    s.style.display = "block";
}
function dm(){
    v.style.display = "none";
    r.style.display = "block";
    d.style.display = "none";
}
function bm(){
    c.style.display = "none";
    e.style.display = "block";
    b.style.display = "none";
}
function cm(){
    df.style.display = "none";
    a.style.display = "block";
    s.style.display = "none";
}
function ass(){
    as.style.display = "none";
    hidee.style.display = "block";
    cs.style.display = "block";
}
function css(){
    as.style.display = "block";
    hidee.style.display = "none";
    cs.style.display = "none";
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sh = document.getElementById('h');
var shs = document.getElementById('s');
var shu = document.getElementById('u');
function show(){
    sh.style.display ="block";
    shs.style.display ="none";
    shu.style.display = "block";
}
function unshow(){
    sh.style.display ="none";
    shu.style.display ="none";
    shs.style.display ="block";
}