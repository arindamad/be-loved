$(document).ready(function(){
  let clickCount = 0;
  $('.title').click(function(){
      $('.container').addClass('open');
      if(clickCount === 0){
          const audio = new Audio("./sound.mpeg");
          audio.play();
          clickCount++;
      }
  });

  $('.close').click(function(){
      $('.container').removeClass('open');
  });
});
