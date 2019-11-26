var Links = {
  setColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i <alist.length){
    //   console.log(alist[i]);
    //   /*style.active.color = 'red';*/
    //   alist[i].style.color = color;
    //
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var  Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
var target = document.querySelector('body');
if (self.value === 'night'){
  Body.setBackgroundColor ('gray');
  Body.setColor ('pink');
  self.value = 'day';
  document.querySelector('h1').style.borderBottom = '1px solid white';
  document.querySelector('ol').style.borderRight = '1px solid white';

  Links.setColor('powderblue');

} else{
  Body.setBackgroundColor ('white');
  Body.setColor ('black');
  self.value = 'night';
  document.querySelector('h1').style.borderBottom = '1px solid black';
  document.querySelector('ol').style.borderRight = '1px solid black';

  Links.setColor('black');
}
}
