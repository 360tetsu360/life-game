let canvasSize = 640;
let start = 320;
let game = false;
let size = 20;
let place = canvasSize / size;
var entity = [];
let onEnt = false;
let gliderGun = [
    {x: 0, y: 7},
    {x: 0, y: 8},
    {x: 1, y: 8},
    {x: 1, y: 7},
    {x: 11, y: 8},
    {x: 11, y: 7},
    {x: 11, y: 6},
    {x: 12, y: 5},
    {x: 13, y: 4},
    {x: 14, y: 5},
    {x: 12, y: 9},
    {x: 13, y: 10},
    {x: 14, y: 9},
    {x: 15, y: 6},
    {x: 15, y: 8},
    {x: 16, y: 8},
    {x: 16, y: 7},
    {x: 16, y: 6},
    {x: 15, y: 7},
    {x: 21, y: 6},
    {x: 21, y: 5},
    {x: 21, y: 4},
    {x: 22, y: 4},
    {x: 23, y: 4},
    {x: 24, y: 4},
    {x: 22, y: 6},
    {x: 23, y: 6},
    {x: 24, y: 6},
    {x: 24, y: 5},
    {x: 22, y: 3},
    {x: 23, y: 3},
    {x: 24, y: 3},
    {x: 22, y: 7},
    {x: 23, y: 7},
    {x: 24, y: 7},
    {x: 25, y: 7},
    {x: 25, y: 8},
    {x: 25, y: 3},
    {x: 25, y: 2},
    {x: 30, y: 3},
    {x: 30, y: 4},
    {x: 34, y: 5},
    {x: 34, y: 6},
    {x: 35, y: 6},
    {x: 35, y: 5}
]
let spaceShip = [
    {x: 62, y: 23},
    {x: 62, y: 24},
    {x: 61, y: 24},
    {x: 61, y: 23},
    {x: 60, y: 23},
    {x: 60, y: 24},
    {x: 60, y: 25},
    {x: 61, y: 25},
    {x: 59, y: 24},
    {x: 59, y: 22},
    {x: 58, y: 22},
    {x: 58, y: 23},
    {x: 57, y: 23},
    {x: 57, y: 24},
    {x: 57, y: 25},
    {x: 56, y: 25},
    {x: 56, y: 24},
    {x: 58, y: 26},
    {x: 57, y: 27},
    {x: 55, y: 27},
    {x: 55, y: 26},
    {x: 53, y: 25},
    {x: 54, y: 25},
    {x: 53, y: 27},
    {x: 52, y: 28},
    {x: 52, y: 29},
    {x: 53, y: 30},
    {x: 53, y: 32},
    {x: 54, y: 32},
    {x: 55, y: 31},
    {x: 55, y: 30},
    {x: 56, y: 32},
    {x: 56, y: 33},
    {x: 57, y: 33},
    {x: 57, y: 32},
    {x: 58, y: 31},
    {x: 57, y: 30},
    {x: 57, y: 34},
    {x: 58, y: 34},
    {x: 58, y: 35},
    {x: 59, y: 35},
    {x: 59, y: 33},
    {x: 60, y: 33},
    {x: 60, y: 34},
    {x: 61, y: 34},
    {x: 62, y: 34},
    {x: 62, y: 33},
    {x: 61, y: 33},
    {x: 61, y: 32},
    {x: 60, y: 32},
    {x: 51, y: 27},
    {x: 50, y: 26},
    {x: 51, y: 30},
    {x: 50, y: 31},
    {x: 49, y: 32},
    {x: 48, y: 32},
    {x: 49, y: 25},
    {x: 48, y: 25},
    {x: 46, y: 24},
    {x: 45, y: 23},
    {x: 45, y: 22},
    {x: 45, y: 21},
    {x: 46, y: 21},
    {x: 47, y: 21},
    {x: 48, y: 21},
    {x: 49, y: 21},
    {x: 50, y: 22},
    {x: 46, y: 33},
    {x: 45, y: 34},
    {x: 45, y: 35},
    {x: 45, y: 36},
    {x: 46, y: 36},
    {x: 47, y: 36},
    {x: 48, y: 36},
    {x: 49, y: 36},
    {x: 50, y: 35}
]
function setup(){
    frameRate(60);
    let canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent('canvas');
    background(0);
}
function draw(){
    place = canvasSize / size;
    const fps = document.getElementById('fps');
    const sizeValue = document.getElementById('sizeValue');
    size = Number(sizeValue.value);
    var elem = document.getElementById("size").innerHTML = `size: ${sizeValue.value}px`
    var elem = document.getElementById("fpse").innerHTML = `fps: ${fps.value}`
    var elem = document.getElementById("entity").innerHTML = `entity: ${entity.length}`
    document.getElementById("start").onclick = function() {
        game = true
    }
    document.getElementById("stop").onclick = function() {
        game = false
    }
    document.getElementById("restart").onclick = function() {
        entity.splice(0, entity.length)
        game = false;
    }
    document.getElementById("undo").onclick = function(){
        if(game == false){
            entity.splice(entity.length - 1 , 1)
        }
    }
    document.getElementById("gliderGun").onclick = function(){
        entity = gliderGun.slice();
    }
    document.getElementById("spaceShip").onclick = function(){
        entity = spaceShip.slice();
    }
    if(game == false){
        frameRate(60);
    }
    if(mouseIsPressed){
        var rectPos = {}
        if(game == false)
        {
            if(mouseX <= canvasSize && (mouseY >= 0 && mouseY <= canvasSize)){
                rectPos.x = Math.floor( mouseX / size);    
                rectPos.y = Math.floor(mouseY / size);
                entity.push(rectPos); 
            }
            for (var num = 0;num <= entity.length; num++) {
                var now = entity.length;
                let test = num + 1;
                if(test <= now - 1){
                    for(var i = test; i <= now - 1; i++){
                        if(entity[num].x === entity[i].x && entity[num].y === entity[i].y){
                            entity.splice( i, 1 );
                        }
                    }
                }
            }
        }
    }
    for (let x = 0; x < place; x++) {
        for (let y = 0; y < place; y++) {
            fill(130)
            rect(x * size, y * size, size, size)
        }
    }
    for(var i in entity){
        fill(255)
        rect(entity[i].x * size, entity[i].y * size, size, size);
    }
    if(game){
        frameRate(Number(fps.value));
        alive()
    };
}
function alive(){
    var Nentity = [];
    for(var x = 0; x <= place; x++){
        for(var y = 0; y <= place; y++){
            let newE = {};
            let parent = 0
            let environment = 0;
            onEnt = false;
            let u = 0;
            for (var ent = 0; ent <= entity.length - 1; ent++) {
                if(x === entity[ent].x && y === entity[ent].y){
                    onEnt = true;
                    u = ent
                }
            }
            if(onEnt){
                for (var i = 0; i <= entity.length - 1; i++) {
                    if(((x + 1 === entity[i].x || x - 1 === entity[i].x || x === entity[i].x) && (y + 1 == entity[i].y || y - 1 === entity[i].y || y === entity[i].y)) && ((x === entity[i].x && y === entity[i].y) == false)){
                        environment += 1;
                    }
                }
                if(environment == 2 || environment == 3){
                    newE.x = x;
                    newE.y = y;
                    Nentity.push(newE);
                }
            }else if(onEnt == false){
                for (var t = 0; t <= entity.length - 1; t++) {
                    if(((x + 1 === entity[t].x || x - 1 === entity[t].x || x === entity[t].x) && (y + 1 == entity[t].y || y - 1 === entity[t].y || y === entity[t].y)) && ((x === entity[t].x && y === entity[t].y) == false)){
                        parent += 1;
                    }
                }
                var baby = {}
                if(parent == 3){
                    baby.x = x;
                    baby.y = y;
                    Nentity.push(baby);
                }
            }
        }
    }
    entity = Nentity.slice();
}
