var block = document.getElementById("block");
var space = document.getElementsByClassName("plats");
var blockSize = 2.5;

var Xv = 0;
var Yv = 0;

block.style.width = blockSize + "%";
block.style.height = blockSize + "%";
block.style.left = 1 + "%";
block.style.top = 1 + "%";

var newLvl = function() {
  block.style.left = 1 + "%";
  block.style.top = 1 + "%";
  Xv = 0;
  Yv = 0;
};

var lvlNum = 1;
var lvl1 = function() {
  newLvl();
  lvlNum = 1;
  document.body.style.backgroundColor = "#FFCB47";
  space[0].style.left = 0 + "%";
  space[0].style.top = 90 + "%";
  space[0].style.width = 100 + "%";
  space[0].style.height = 10 + "%";
  space[1].style.left = 80 + "%";
  space[1].style.top = 50 + "%";
  space[1].style.width = 15 + "%";
  space[1].style.height = 50 + "%";
  space[2].style.left = 65 + "%";
  space[2].style.top = 75 + "%";
  space[2].style.width = 30 + "%";
  space[2].style.height = 5 + "%";
  space[3].style.left = 20 + "%";
  space[3].style.top = 50 + "%";
  space[3].style.width = 5 + "%";
  space[3].style.height = 65 + "%";
};
var lvl2 = function() {
  newLvl();
  lvlNum = 2;
  document.body.style.backgroundColor = "#A1E44D";
  space[0].style.left = 0 + "%";
  space[0].style.top = 90 + "%";
  space[0].style.width = 25 + "%";
  space[0].style.height = 10 + "%";
  space[1].style.left = 60 + "%";
  space[1].style.top = 90 + "%";
  space[1].style.width = 40 + "%";
  space[1].style.height = 10 + "%";
  space[2].style.left = 20 + "%";
  space[2].style.top = 50 + "%";
  space[2].style.width = 5 + "%";
  space[2].style.height = 50 + "%";
  space[3].style.left = 60 + "%";
  space[3].style.top = 50 + "%";
  space[3].style.width = 5 + "%";
  space[3].style.height = 50 + "%";
};
var lvl3 = function() {
  newLvl();
  lvlNum = 3;
  document.body.style.backgroundColor = "#7692FF";
  space[0].style.left = 0 + "%";
  space[0].style.top = 90 + "%";
  space[0].style.width = 10 + "%";
  space[0].style.height = 10 + "%";
  space[1].style.left = 25 + "%";
  space[1].style.top = 75 + "%";
  space[1].style.width = 5 + "%";
  space[1].style.height = 5 + "%";
  space[2].style.left = 50 + "%";
  space[2].style.top = 50 + "%";
  space[2].style.width = 5 + "%";
  space[2].style.height = 5 + "%";
  space[3].style.left = 75 + "%";
  space[3].style.top = 75 + "%";
  space[3].style.width = 5 + "%";
  space[3].style.height = 5 + "%";
};
lvl1();

var touching = function(block, space, blockSize){
  var returning = false;
  for (var i = 0; i < space.length; i++) {
    if (parseFloat(block.style.left) + parseFloat(blockSize) > parseFloat(space[i].style.left) && parseFloat(block.style.left) < parseFloat(space[i].style.left) + parseFloat(space[i].style.width) && parseFloat(block.style.top) + parseFloat(blockSize) > parseFloat(space[i].style.top) && parseFloat(block.style.top) < parseFloat(space[i].style.top) + parseFloat(space[i].style.height)) 
    {
      returning = true;
    }
  }
  return returning;
};

var keys = {};
window.onkeyup = function(e) {
  keys[e.keyCode] = false;
};
window.onkeydown = function(e) {
  keys[e.keyCode] = true;
};

var myInterval = setInterval(function() {
  if (keys[39]) {
    Xv += 1;
  }
  if (keys[37]) {
    Xv -= 1;
  }
  Xv *= 0.8;
  block.style.left = parseFloat(block.style.left) + Xv / 4 + "%";

  if (touching(block, space, blockSize) === true) {
    block.style.top = parseFloat(block.style.top) - 1 / 4 + "%";

    if (touching(block, space, blockSize) === true) {
      block.style.top = parseFloat(block.style.top) - 1 / 4 + "%";

      if (touching(block, space, blockSize) === true) {
        block.style.top = parseFloat(block.style.top) - 1 / 4 + "%";

        if (touching(block, space, blockSize) === true) {
          block.style.top = parseFloat(block.style.top) - 1 / 4 + "%";

          if (touching(block, space, blockSize) === true) {
            block.style.left = parseFloat(block.style.left) - Xv / 4 + "%";
            block.style.top = parseFloat(block.style.top) + 1 + "%";
            if (keys[38]) {
              if (Xv > 0) {
                Xv = -5;
              } else {
                Xv = 5;
              }
              Yv = 10;
            } else {
              Xv = 0;
            }
          }
        }
      }
    }
  }

  Yv--;
  block.style.top = parseFloat(block.style.top) - Yv / 4 + "%";
  if (touching(block, space, blockSize) === true) {
    block.style.top = parseFloat(block.style.top) + Yv / 4 + "%";
    Yv = 0;
  }
  block.style.top = parseFloat(block.style.top) + 1 / 4 + "%";
  if (touching(block, space, blockSize) === true) {
    if (keys[38]) {
      Yv = 15;
    }
  }
  block.style.top = parseFloat(block.style.top) - 1 / 4 + "%";
  
  if (keys[82]) {
    newLvl();
  }
  if(parseFloat(block.style.top) > 100){
    newLvl();
  }
  if(parseFloat(block.style.left) > 100 - blockSize){
    console.log(block.style.top);
    if (lvlNum === 1) {
            lvl2();
    } else if (lvlNum === 2) {
            lvl3();
    } else if (lvlNum === 3) {
            lvl1();
    }
    console.log(lvlNum);
  }
}, 30);