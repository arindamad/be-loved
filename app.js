$(document).ready(function(){
  let audio;

  $('.title').click(function(){
      $('.container').addClass('open');
      if (!audio || audio.paused) {
          audio = new Audio("./sound.mpeg");
          audio.play();
          clickCount++;
      } else {         
          audio.currentTime = 0;
      }
  });

  $('.close').click(function(){
      $('.container').removeClass('open');
  });
});
