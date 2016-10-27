 $(function () {

     "use strict";

     var topoffset = 50;
     var slideqty = $('#featured .item').length;
     var wheigth = $(window).height();
     var ranSlide = Math.floor(Math.random() * slideqty);
     
     $('#featured .item').eq(ranSlide).addClass('active');
     
     
     $('.fullheight').css('height', wheigth);
     
     
     $(#featured .item img).each(function(){
       var imgSrc = $(this).attr('src');
       $(this).parent().css({'background-image': 'url('+imgSrc+')'});
       });


        $(window).resize(function(){
            wheigth = $(window).height();
            $('.fullheight').css('height', wheigth);
        });



     //Activate Scrollspy
     $('body').scrollspy({
         target: 'header .navbar',
         offset: topoffset
     });


     //Use smooth scrolling when clicking on navigation
     $('.navbar a[href*=#]:not([href=#])').click(function () {
         if (location.pathname.replace(/^\//, '') ===
             this.pathname.replace(/^\//, '') &&
             location.hostname === this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - topoffset + 2
                 }, 500);
                 return false;
             } //target.length
         } //click function
     }); //smooth scrolling


     // Add an inbody class to nav when scrollspy event fires
     $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
         var hash = $(this).find('li.active a').attr('href');
         if (hash !== '#featured') {
             $('header nav').addClass('inbody');
         } else {
             $('header nav').removeClass('inbody');
         }
     });

     
for (var i = 0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
    if (i === ranSlide) {
        insertText += 'class="active" ';
    }
    '></li>';
    $('#featured ol').append(insertText);
}     

$('.carousel').carousel ({
    pause: false;
})
     

     $('.carousel').carousel({
         interval: false
     });

 });
