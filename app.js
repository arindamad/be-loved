$(document).ready(function(){
    let clickCound = 0;
    $('.title').click(function(){
      $('.container').addClass('open');
      if(clickCound===0){
        const Audio = new Audio("./sound.mpeg").play(); 
        clickCound++;
      }
           
    });
    
    
    $('.close').click(function(){
      $('.container').removeClass('open');
    });
  });