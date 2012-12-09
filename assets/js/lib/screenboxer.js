$(document).ready(function() {
// screen boxer 2012 by rexfeng 
(function screen_boxer(){

    
  var boxer_area = $(window);

  // get x y total width and height for screen
    // var window_width = boxer_area.width();
    // var window_height = boxer_area.height();

    // $('#info').html("Width: " + window_width + " Height: " + window_height);

  // get current x y mouse coord
    // boxer_area.mousemove(function(e) {
    //   $('#test').html("x-coord: " + e.pageX + "<br /> y-coord: " + e.pageY);
    // });

  // track clicks
    // var log = "";

    // boxer_area.on('click', function(e) {
    //   log += "x: " + e.pageX + " y: " + e.pageY + "<br />";
    //   $('#log').html(log);
    // });  
  
  // when mousedown -> drag -> mouseoff events, draw box

    // boxer_area.mouseup(function(e){
    //   $('#log').append(" Mouseup: " + e.pageX + ", " + e.pageY + "<br />");
    // }).mousedown(function(e){
    //   $('#log').append(" Mousedown: " + e.pageX + ", " + e.pageY);
    // });

  // check if elements are in. how greedy selection?



  var xbox, ybox;

  boxer_area.mousedown(function(e){

    xbox = e.pageX;
    ybox = e.pageY;

    $("#boxer").attr({ id: '' });
    box = $('<div style="border:1px #333 solid;position:fixed;">').hide();
    $(document.body).append(box);
    box.attr({id: 'boxer'}).css({ top: e.pageY, left: e.pageX }).fadeIn();

  });

  boxer_area.mousemove(function(e) {

    if (e.pageX > xbox) {
      $("#boxer").css({ width: Math.abs(e.pageX - xbox) });
    } else {
      $("#boxer").css({ left: e.pageX, right: xbox, width: Math.abs(e.pageX - xbox)
      });
    }

    if (e.pageY > ybox) {
      $("#boxer").css({ height: Math.abs(e.pageY - ybox) });
    } else {
      $("#boxer").css({ top: e.pageY, bottom: ybox, height: Math.abs(e.pageY - ybox) });
    }

  });

  boxer_area.mouseup(function() {
    console.log("Top: " + $('#boxer').css('top'));
    console.log("Bottom: " + $('#boxer').css('bottom'));
    console.log("Left: " + $('#boxer').css('left'));
    console.log("Right: " + $('#boxer').css('right'));
    console.log("Width: " + $('#boxer').css('width'));
    console.log("Height: " + $('#boxer').css('height'));
    $("#boxer").attr({ id: '' })
  });






})(); // end screen_boxer
});   // end DOM ready
