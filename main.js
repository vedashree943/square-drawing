noseX=0;
noseY=0;
difference=0;
rwristX=0;
lwristX=0;
function setup() {
video=createCapture(VIDEO);
video.size(550,500);


canvas=createCanvas(550,500);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded() {
console.log("posenet is initialized");
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x ="+noseX+ " nose y ="+noseY);
    

    //code for wrist
    lwristX=results[0].pose.leftWrist.x;
    rwristX=results[0].pose.rightWrist.x;
    difference=floor(lwristX-rwristX);
    console.log("left wrist x "+ lwristX + "right wrist x "+ rwristX + " difference "+ difference);

}
}
function draw() {
    background("#F9B4ED");

    document.getElementById("square_side").innerhtml="width and height of the square will be = " + difference +"px";
    fill("#C52184");
    stroke("#C52184");
    square(noseX,noseY,difference);
}