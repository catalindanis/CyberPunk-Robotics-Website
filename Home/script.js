window.addEventListener('load', function () {
    init();
});

function init(){
    document.getElementsByClassName("root")[0].style.display = "block";
}

var menuIsOpened = false;

function openNavigationBar(){
    document.getElementsByClassName("menu")[0].style.display = "block";
    document.getElementsByClassName("menu")[0].style.animation = "load_menu_mobile 1s";
    document.getElementsByClassName("background_desktop")[0].style.opacity = "10%";
    document.getElementsByClassName("logo")[0].style.opacity = "10%";
    document.getElementsByClassName("text")[0].style.opacity = "10%";
    document.getElementsByClassName("social_media")[0].style.opacity = "10%";
    menuIsOpened = true;
}

function closeNavigationBar(){
    
    document.getElementsByClassName("menu")[0].style.animation = "close_menu_mobile 1s";
    document.getElementsByClassName("background_desktop")[0].style.opacity = "100%";
    document.getElementsByClassName("logo")[0].style.opacity = "100%";
    document.getElementsByClassName("text")[0].style.opacity = "100%";
    document.getElementsByClassName("social_media")[0].style.opacity = "100%";
    setTimeout( function() { document.getElementsByClassName("menu")[0].style.display = "none"; }, 1000);
    menuIsOpened = false;
}


window.addEventListener("resize", function() {
    closeMenuIfNeeded();
});

function closeMenuIfNeeded(){
    if(window.innerWidth >= 990 && menuIsOpened)
        closeNavigationBar();
}

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

