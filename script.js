$(document).ready(function(){
   
   
    var $video = $('video');
    var videoH = $video.height();
    var videoW = $video.width();

    $(window).mousemove(function(e){
       
      var mouseX = e.pageX,
          mouseY = e.pageY;
           
       
        $video.css({
            left:  e.pageX  - videoW / 2,
            top:   e.pageY - videoH / 2
        });
    })
    
    
    
   $('.enter').click(function(){
       console.log('clicked');
      $(this).fadeOut('500');
      $video.get(0).play();
   });



});