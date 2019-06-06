
var rover = {
  direction: "N",
  x: "0",
  y: "0",
  travelLog: []
}

function turnLeft(rover){
  switch(rover.direction){
    case "N":
      rover.direction="W";
      break;
    case "S":
      rover.direction="E";
      break;
    case "E":
      rover.direction="N";
      break;
    case "W":
      rover.direction="S";
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(rover.direction){
    case "N":
      rover.direction="E";
      break;
    case "S":
      rover.direction="W";
      break;
    case "E":
      rover.direction="S";
      break;
    case "W":
      rover.direction="N";
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch(rover.direction){
    case "N":
     if(gridValidation(rover.y)=== -2){errorMessage();return;}
      rover.y -= 1;
      break;
    case "S":
      if(gridValidation(rover.y)=== -1){errorMessage();return;}
      rover.y = parseInt(rover.y, 10)+ 1;
      break;
    case "E":
      if(gridValidation(rover.x)=== -1){errorMessage();return;}
      rover.x = parseInt(rover.x, 10) + 1;
      break;
    case "W":
      if(gridValidation(rover.x)=== -2){errorMessage();return;}
      rover.x -= 1;
      break;  
  }
  log(rover.x, rover.y, rover);
  console.log("moveForward was called")
}

function moveBackwards(rover){
  switch(rover.direction){
    case "N":
      if(gridValidation(rover.y)=== -1){errorMessage();return;}
      rover.y = parseInt(rover.y, 10)+ 1;
      break;
    case "S":
      if(gridValidation(rover.y)=== -2){errorMessage();return;}
      rover.y -= 1;
      break;
    case "E":
      if(gridValidation(rover.x)=== -2){errorMessage();return;}
      rover.x -= 1;
      break;
    case "W":    
      if(gridValidation(rover.x)=== -1){errorMessage();return;}
      rover.x = parseInt(rover.x, 10) + 1;
      break;  
  }
  log(rover.x, rover.y, rover);
  console.log("moveBackwards was called")
}

function control (commandList, rover){
  for(var command = 0; command < commandList.length; command++){
   switch(commandList[command]){
     case "f":
      moveForward(rover);
      break;
     case "b":
      moveBackwards(rover);
      break;
     case "r":
      turnRight(rover);
      break;
     case "l":
      turnLeft(rover);
      break;
     default:
     console.log('Invalid input only f, b, r, or l are allowed');
    }
  }
}

function log(xCoordinate, yCoordinate, rover){
rover.travelLog.push("["+ xCoordinate + "," +yCoordinate+"]");
}

function gridValidation(coordinate){
  if((parseInt(coordinate, 10) > 4) ){return -1}
  else if(parseInt(coordinate, 10) < -4){return -2}
  else{return 0;}  
}

function errorMessage(){console.log("Illegal coordinate. Rover reached end of grid")}

control('bbbbkbbrbbbbbbblb',rover);

console.log(rover.x);
console.log(rover.y);
console.log(rover.direction);
console.log("Rover desparted from coordinate [0,0] and visited: " + rover.travelLog);

