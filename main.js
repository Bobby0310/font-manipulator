var Nose_x=0;
var Nose_y=0;
var Lw=0;
var Rw=0;
var difference=0;


function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);

  Canvas= createCanvas(450,300);
  Canvas.position(600,200);

  poses=ml5.poseNet(video,ModelR)
  poses.on('pose',POSE)
}

function ModelR() {
    console.log("Model is ready!")
}

function POSE(results) {
    if (results.length>0) {
        console.log(results)
        Nose_x=results[0].pose.nose.x
        Nose_y=results[0].pose.nose.y
        Lw=results[0].pose.leftWrist.x
        Rw=results[0].pose.rightWrist.x
        difference=floor(Lw-Rw);
    }
    

}

function draw() {
    background("purple")
   fill("black")
   stroke("black")
   textSize(difference)
   text("hi im "+difference+" days old.",50,110 )

   document.getElementById("whos").innerHTML="Size of text= " + Math.floor(difference)
   }