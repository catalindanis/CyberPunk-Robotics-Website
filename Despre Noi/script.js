window.addEventListener('load', function () {
    checkDeviceType();
})

function checkDeviceType(){
    if(/Android|webOS|iPhone|BlackBerry|IEMobile/i.test(navigator.userAgent)){
        mobileInit();
    }
    else{
        desktopInit();
    }
}

function mobileInit(){
    document.getElementsByClassName("mobile")[0].style.display = "block";
}

function desktopInit(){
    document.getElementsByClassName("desktop")[0].style.display = "block";
}