
color=["red","green","blue","yellow"]

currentLevel=0;
stack=[];
userStack=[];
Started=false;

$(document).ready(function (){
        $(document).keypress(function (event){
                event.key == 'a' || 'A' ? 
                   started(): alert("Please enter A");
                
        });
});

function started() {
      Started=true;
      next();  
}

$(".btn").click(function (){

var UserColor=$(this).attr('id');
userStack.push(UserColor);
playSound(UserColor);
animates(UserColor);
check(userStack.length-1);

});

function check(val) {
        (stack[val] == userStack[val]) ?   (stack.length === userStack.length) &&
                setTimeout(function () {
                  next();
                }, 1000):$("#level-title").text("Game Over")&&startover();
}
function next(){
        userStack=[]
        currentLevel++;
                 $("#level-title").text("level "+(currentLevel));
    
            temp=Math.floor(Math.random()*4);
                randomChosenColour=color[temp];
            stack.push(randomChosenColour);
             $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);      
        
}

function animates(color) {
$("#"+color).addClass("pressed") ;
setTimeout(function (){$("#"+color).removeClass("pressed")},100); 
}

function playSound(color) {
        var audio =new Audio("sounds/"+color+".mp3");
        audio.play()
}

function startover() {
      level=0;
      stack=[];
      started=false
      
}