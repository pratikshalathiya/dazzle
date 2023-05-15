$(document).ready(function(){

     // --------------main active menu-------------

    $('.main-menu > li > a').click(function(){

     $('.main-menu').find('li a').removeClass('active');

     $(this).addClass('active');

 })

     // =-------------pre-loader------------------

     setTimeout(function(){

          $('.pre-loader').fadeOut();
  
      },1000);

     // ------------------scroll event---------------------

     $(window).on('scroll',function(){

          x = $(Window).scrollTop();

          if(x>=200){
               $('#scroll-top').css('opacity','1');
          }
          else{
               $('#scroll-top').css('opacity','0');
          }

     })

     $('#scroll-top').click(function(){

          $(window).scrollTop({top:0})

     })

     // -------------------- Counter---------------

     window.onload = ()=>{
          // $(selector).countMe(delay,speed)
          $("#num1").countMe(40,66);
          $("#num2").countMe(30, 30);
          $("#num3").countMe(40, 50);
       }

});