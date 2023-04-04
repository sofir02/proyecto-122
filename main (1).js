x = 0;
y = 0;
draw_apple="";
screen_width= 0;
screen_height=0;
apple="";
speak_data= "";
to_number=0;

function preload(){
  apple = loadImage("tipos-de-manzana-royal-gala.jpg");
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla."; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "La voz se reconoció como: " + content;
  to_number = Number(content); 
      if(Number.isInteger(to_number))
      {
        document.getElementById("status").innerHTML = "Se empezó a dibujar una manzana "; 
        draw_apple = "set";
      }

      else{
        document.getElementById("status").innerHTML = "no se reconoció un número";
      }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width , screen_height -150);
  canvas.position (0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
   for(var i = 1; i <= to_number; i++){
    x = Math.floor(Math.random()* 700);
    y = Math.floor(Math.random()* 400);
    image(apple, x, y, 50, 50);
   }

   document.getElementById("status").innerHTML = to_number + " manzanas dibujadas";
   speak_data = to_number + " manzanas dibujadas";
   speak();
   draw_apple = "";
    }

    
}

function speak(){
  var symth = window.speechSynthesis;
  var utterThis = new speechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  speak_data = "";

}





