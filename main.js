function setup(){
    canvas=createCanvas(360,400);
    canvas.center();

   camera=createCapture(VIDEO);
   camera.size(300,300);
   camera.hide();

   poseNet=ml5.poseNet(camera,modelLoaded);
   posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("pose net is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function take_snapshot(){
save('myfilterimg.png');
}