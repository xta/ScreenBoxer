$(document).ready(function() {
// screen boxer 2012 by rexfeng 
(function screen_boxer(){

    
      var boxer_area = $(window);
    
      var window_width = boxer_area.width();
      var window_height = boxer_area.height();
    
      $('#info').html("Width: " + window_width + " Height: " + window_height);
    
      boxer_area.mousemove(function(e) {
        $('#test').html("x-coord: " + e.pageX + "<br /> y-coord: " + e.pageY);
      });
    
      var log = "";
    
      boxer_area.on('click', function(e) {
        log += "x: " + e.pageX + " y: " + e.pageY + "<br />";
        $('#log').html(log);
      });  
    
  // tasks
  
    // get x y total width and height for screen
  
    // when onclick -> drag -> offclick events, draw box
    // check if elements are in
  
    // how greedy selection?



})(); // end screen_boxer
});   // end DOM ready
