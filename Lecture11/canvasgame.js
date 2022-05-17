var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var bulletLength =0;
var bulletList = [];

class player{
    constructor(x,y,radius)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = 'pink';
    }

    draw()
    {
        context.beginPath();
        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

class Bullet{
    constructor(x,y,radius)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = 'black';
    }

    draw()
    {
        context.beginPath();
        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

var p = new player(100,100,30);
p.draw();

canvas.onclick = function(event)
{
    const x = event.clientX - context.canvas.offsetLeft; 
    const y = event.clientY - context.canvas.offsetTop;
    console.log(bulletLength);

    bulletList[bulletLength] = new Bullet(x,y,10);
    bulletLength++;
    bulletList.forEach(element => {
        element.draw();
        console.log("a");
    });
} 
