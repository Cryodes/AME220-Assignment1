var boxPos = ["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"];

var buttonClicked = function(n)
{
  var id = "#button" + n.toString();
  var pageWidth =$("body").width();
  var boxWidth = 150;
  console.log($(id).html());
  if(boxPos[n] == "left")
  {
    $(id).animate({"margin-left" : pageWidth -boxWidth + "px", "color" : "red"}, 1000, $(id).html);
    boxPos[n] = "right";
  }
  else
  {
    $(id).animate({ "margin-left" : "0px", "color": "black"}, 1000, $(id).html);
    boxPos[n] = "left";
  }
}
