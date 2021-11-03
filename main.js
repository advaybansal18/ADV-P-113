function setup(){
    canvas=createCanvas(650,500);
    canvas.position(10,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
  image(video,0,0,650,500);
  tint(tint_color);
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
function take_snapshot(){
  save('filter_color_js.png');
}

