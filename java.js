
var items = document.querySelectorAll('.item');
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].style.opacity = 1;
      items[i].classList.add('animated');
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

})
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

// Call carousel manually
$('#myCarouselCustom').carousel();

// Go to the previous item
$("#prevBtn").click(function(){
    $("#myCarouselCustom").carousel("prev");
    

});
// Go to the previous item
$("#nextBtn").click(function(){
    $("#myCarouselCustom").carousel("next");
});
 // Call carousel manually
            $('#myCarouselCustom').carousel(1);
            
            // Go to the previous item
            $("#prevBtn").click(function(){
                $("#myCarouselCustom").carousel("prev");
            });
            // Go to the previous item
            $("#nextBtn").click(function(){
                $("#myCarouselCustom").carousel("next");
            });



            function isElementInViewport(el) {
              var rect = el.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
            }
       
            const sr = ScrollReveal({
              origin: 'bottom',
              distance: '50px',
              duration: 2000,
              delay: 200,
              reset: true
            });
            
            sr.reveal('.scroll-reveal');
            