status="";

function preload(){
    Img=loadImage("2.jpg");
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.position(450,200);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Identifying object";
}

function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectDetector.detect(Img,gotPoses);
}

function gotPoses(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}


function draw(){
    image(Img,0,0,400,300 );
    fill("white");
    text("Computer",105,75);
    noFill();
    stroke("red");
    rect(90,10,160,200);
}