var totalnum = 6;

var colors=generate(totalnum);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var reset=document.querySelector("#reset");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("cd");
var message = document.querySelector("#message");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
easybtn.addEventListener("click",function(){
   easybtn.classList.add("selected");
   hardbtn.classList.remove("selected");
   totalnum=3;
   colors=generate(totalnum);
  
   pickedColor=pickColor();
   colorDisplay.textContent=pickedColor;
   for( let i=0;i< squares.length;i++)
{
    if(colors[i]){
  squares[i].style.backgroundColor=colors[i];}
  else
  { squares[i].style.display = "none"; }
}
});
hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");

    totalnum=6;
    colors=generate(totalnum);
   
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for( let i=0;i< squares.length;i++)
 {  
   squares[i].style.backgroundColor=colors[i];
   squares[i].style.display="block";
  
 }
 });



reset.addEventListener("click",function(){
     colors=generate(totalnum);
     h1.style.backgroundColor = "steelblue"
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     reset.textContent="New Colors"
     message.textContent="";
     for( let i=0;i< squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i]; 
}

});





colorDisplay.textContent=pickedColor;
for( let i=0;i< squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i]; 

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        console.log(pickedColor);
        console.log(clickedColor);
        if(pickedColor === clickedColor)
        {
            
            message.textContent="Correct!!!"
            reset.textContent="Play Again?"
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent="Try Again!";
        }
    });
}
function changeColor(color){
    for(var i=0 ;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generate(num)
{
    var arr=[]
    for(var  i=0 ;i<num ;i++)
    {
        arr.push(randomnum());
    }
    return arr;
}
function randomnum()
{
    var r=Math.floor(Math.random()*256); 
    var g=Math.floor(Math.random()*256); 
    var b=Math.floor(Math.random()*256); 
    return "rgb("+r+", "+g+", "+b+")"
}