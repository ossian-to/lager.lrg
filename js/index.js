$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >750) {

        $('.top').stop().css("opacity", "1");
    } else {

        $('.top').stop().css("opacity", "0");
    }
});

$('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 + 'px' }, 300);
});


$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $(this).toggleClass('open');
        $('.nav').toggleClass('active')
    })
    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('.nav').removeClass('active');
            $('.menu-icon').removeClass('open')
        }
    });
});


//圖片大小驗證
function verificationPicFile(file) {
    var fileSize = 0;
    var fileMaxSize = 1024;//1M
    var filePath = file.value;
    if(filePath){
        fileSize =file.files[0].size;
        var size = fileSize / 3072;
        if (size > fileMaxSize) {
            alert("檔案大小不能大於3M");
            file.value = "";
            return false;
        }else if (size <= 0) {
            alert("檔案大小不能為0M");
            file.value = "";
            return false;
        }
    }else{
        return false;
    }
}
