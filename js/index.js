let featuresOffsetTop = $("#features").offset().top;
$(window).scroll(function () {
    let windowScroll = $(this).scrollTop();

    if(windowScroll > featuresOffsetTop)
    {
        $('#btnUp').fadeIn(500);
        $('#navbar').css("backgroundColor", "rgba(0, 0, 0, 0.5)");
    }
    else
    {
        $('#btnUp').fadeOut(500);
        $('#navbar').css("backgroundColor", "transparent");
    }
});

$('#btnUp').click( function () {

    $('html, body').animate({scrollTop: 0}, 1000);
})

$('a').click(function () {

    let linkHref = $(this).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    $('html, body').animate({scrollTop: sectionOffset}, 1000);
    $('#main-nav').toggleClass('show');

})


let colorItem = $('.color-item');
colorItem.eq(0).css("backgroundColor", "tomato");
colorItem.eq(1).css("backgroundColor", "#09c");
colorItem.eq(2).css("backgroundColor", "orange");
colorItem.eq(3).css("backgroundColor", "teal");
colorItem.eq(4).css("backgroundColor", "yellow");

colorItem.click(function() {

    let color = $(this).css("backgroundColor");
    $("body").css("color", color);
});

$("#options img").click(function () {

    let imgSrc = $(this).attr('src');
    $("header").css("backgroundImage", `url(${imgSrc})`);
})

$("#options i").click(function () {

    let colorBoxWidth = $(".colors-box").innerWidth();
    if($("#options").css('left') == "0px")
    {
        $("#options").animate({ left:`-${colorBoxWidth}`}, 1000);
    }
    else
    {
        $("#options").animate({ left:`0px`}, 1000);
    }
})

$(".img-item").click( function () {

    let imgSrc = $(this).attr('src');
    $('#mainImage').attr("src", imgSrc);
});

$('#menu ul li a').on('click', function(event) {

    console.log("Ahmed");
    event.preventDefault();

});
$('.navbar-toggler').on('click', function () {
    $(this).toggleClass('collapsed');
    $('#main-nav').toggleClass('show');
})


var lightboxContainer = document.getElementById("lightbox-container");
var lightboxItem = document.getElementById("lightbox-item");
var currentSlideIndex = 0;
var imgsList =  document.querySelectorAll(".item img") ;
var imgArray = [];
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

for(var i=0;i<imgsList.length ;i++)
{
    imgArray.push(imgsList[i]);

    imgsList[i].addEventListener("click" , function(eventInfo){

        currentSlideIndex =  imgArray.indexOf(eventInfo.target) ;

        var imgSrc =  eventInfo.target.getAttribute("src");
        lightboxContainer.style.display ="flex";
        lightboxItem.style.backgroundImage = "url("+imgSrc+")"
    })
}

function nextSlide ()
{
    currentSlideIndex++;
    if (currentSlideIndex == imgArray.length)
    {
        currentSlideIndex = 0;
    }

    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = "url("+imgSrc+")";
}
function prevSlide ()
{
    currentSlideIndex--;
    if (currentSlideIndex < 0)
    {
        currentSlideIndex = imgArray.length-1;
    }

    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = "url("+imgSrc+")";
}
function closeSlide ()
{
    lightboxContainer.style.display ="none";
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
closeBtn.addEventListener('click', closeSlide);


document.addEventListener('keydown', function (eventInfo)
{
    if(eventInfo.keyCode == 37)
    {
        prevSlide();
    }
    else if (eventInfo.keyCode == 39)
    {
        nextSlide();
    }
    else if (eventInfo.keyCode == 27)
    {
        closeSlide();
    }
})
