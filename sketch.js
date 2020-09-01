var cat,database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    cat = createSprite(250,250,10,10);
   cat.shapeColor = "red";
    var catpos=database.ref("cat/position");
    cat.on("value",readpos);
}

function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}
function changePosition(x,y){
 //   ball.x = ball.x + x;
   // ball.y = ball.y + y;
database.ref("cat/position").set({
    "x":position.x+x,
    "y":position.y+y
});
}
function readpos(data){
position=data.val();
cat.x=position.x;
cat.y=position.y;
}




