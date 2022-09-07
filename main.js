canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 90;

backgroundImage = "estádio.jpeg";
roverImage = "ball22.png";
roverX = 10;
roverY = 10;

 function add() {
backgroundImgTag = new Image();
backgroundImgTag.onload = uploadBackground;
backgroundImgTag.src = backgroundImage;
roverIngTag = new Image(); 
roverIngTag.onload = uploadRover;

roverIngTag.src = roverImage;
function uploadBackground ( ) {
ctx.drawImage (backgroundImgTag,0,0, canvas .width, canvas .height) ;
}
function uploadRover ( ) {
    ctx.drawImage (roverIngTag,roverX,roverY, roverWidth, roverHeight) ;
    }
    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keyPressed = e.keyCode;
        if(keyPressed=='38'){
            up();
        }
        if(keyPressed=='40'){
            down();
        }
        if(keyPressed=='37'){
            left();
        }
        if(keyPressed=='39'){
            right();
        }
    }
    function up(){
        if(roverY>=0){
            roverY=roverY-10;
            uploadBackground();
            uploadRover();
        }
    }
    function down(){
        if(roverY<=500){
            roverY=roverY+10;
            uploadBackground();
            uploadRover();
        }
    }
    function left(){
        if(roverX>=0){
            roverX=roverX-10;
            uploadBackground();
            uploadRover();
        }
    }
    function right(){
        if(roverX<=700){
            roverX=roverX+10;
            uploadBackground();
            uploadRover();
        }
    }
}