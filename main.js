function preload(){
}

function setup() {
canvas=createCanvas(500,500);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
}

function draw() {
image(video,0 ,0 , 640, 480);
fill(0,0,0,0);
square(1,1,500);
}

function take_snapshot(){
    save('student_name.png');
}