function setup(){
    createCanvas(1000,600)
    background(46, 193, 219)
}

// function draw(){

// rect(30,10,30,35)

// Text("Health", 30, 10)


let health = [100, 100]

let pikachu = health[0]
let charizard = health[1]

let pokemon = [pikachu, charizard]

// let pikachuattacks =["Lightning","thunderpunch","Poison","Heal"]
// let charizardattacks =["Flamethrower","Airslash","Solarbeam","reflect"]

let lightning = 25
let thunderpunch = 30
let poison = 15
let heal = 40
let flamethrower = 45
let airslash = 25
let solarbeam = 40
let reflect = 35

let attacks = [lightning, thunderpunch, poison, heal]
let attacks2 = [flamethrower, airslash, solarbeam, reflect]

let cpu = attacks2[Math.floor(Math.random() * attacks2.length)];

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        health[1] = health[1] - lightning;
       console.log(health[1])
    } else if (keyCode === RIGHT_ARROW){
      health[1] = health[1] - thunderpunch;
     console.log(health[1])
    } else if(keyCode === UP_ARROW){
      health[1] = health[1] - poison;
     console.log(health[1])
    } else if(keyCode === DOWN_ARROW){
      health[0] = health[0] + heal
     console.log(health[0])
    } if(health[1] < 100){
      health[0] = health[0] - cpu;
      console.log(health[0])
  } if(health[1]<= 50){
    health[1] = health[1] + heal;
    console.log(health[1])
  }
}

function draw(){
  arc(100, 500, 200, 200, 0, PI + QUARTER_PI, CHORD);
  rect(0,0,300,150)
  // rect(600,1000,300,200)


} 

// function draw(){
  // rect(0,0,300,150)

// }