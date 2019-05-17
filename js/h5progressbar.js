particle_no = 25;
var globalID;

var gCallback=null;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     ||  
    function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

var counter = 0;
var particles = [];
var w = 150, h = 100;
canvas.width = w;
canvas.height = h;

function reset(){
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,w,h);
  
  // ctx.fillStyle = '#171814';
  // ctx.fillRect(0,0,350,10);
}

let instance = null;

function progressbar(){
  instance = this;
  this.widths = 0;
  this.hue = 0;
  
  this.draw = function(){
    ctx.fillStyle = 'hsla('+this.hue+', 100%, 40%, 1)';
    ctx.fillRect(25,80,this.widths,2);

    // var grad = ctx.createLinearGradient(0,0,0,130);
    // grad.addColorStop(0,"transparent");
    // grad.addColorStop(1,"rgba(0,0,0,0.5)");
    // ctx.fillStyle = grad;
    // ctx.fillRect(0,0,this.widths,100);
  }

}

function particle(){
  this.x = 23 + bar.widths;
  this.y = 85;
  
  this.vx = 0.8 + Math.random()*1;
  this.v = Math.random()*5;
  this.g = 1 + Math.random()*2;
  this.down = false;
  
  this.draw = function(){
    ctx.fillStyle = 'hsla('+(bar.hue+0.3)+', 100%, 40%, 1)';;
    var size = Math.random()*1.5;
    
    ctx.fillRect(this.x, this.y, size, size);
  }
}

function draw(bar){
    reset();
    counter++
    
    bar.hue += 0.8;
    
    bar.widths += 2;
    if(bar.widths > 150){
      if(counter >= 150){
        cancel();
        if(gCallback) gCallback();
        reset();
        bar.hue = 0;
        bar.widths = 0;
        counter = 0;
        particles = [];
      }else{
        bar.hue = 126;
        bar.widths =200;
        bar.draw();
      }
    }else{
      bar.draw();
      for(var i=0;i<particle_no;i+=10){
        particles.push(new particle());
      }
    }
    update();
  }

// 取消系统帧动画
function cancel(){
  cancelAnimationFrame(globalID);
}


// 绘制粒子效果
function update(){
  for(var i=0;i<particles.length;i++){
    var p = particles[i];
    p.x -= p.vx;
    if(p.down == true){
      p.g += 0.1;
      p.y += p.g;
    }else{
      if(p.g<0){
        p.down = true;
        p.g += 0.1;
        p.y += p.g;
      }
      else{
        p.y -= p.g;
        p.g -= 0.1;
      }
    }
    p.draw();
  }
}

function action(callback){
  
  gCallback = callback;
  animloop();
}

function animloop() {
  globalID = requestAnimFrame(animloop);
  draw(instance);
}