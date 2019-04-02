/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding: the browser window, also referred to as default.
* 2. implicit binding: this refers to whatever is left of the dot. Usually set inside and object.
* 3. Explicit Binding: uses methods like call, apply, bind.  this is set as first argument.  usually not in an object.
* 4. New binding: binds to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const about = {
    name: "Alan Lemasney",
    age: "26",
    sport: "soccer",
    play () {
        return `${this.name} is ${this.age} years old, and loves to play ${this.sport}.`
    }
}

console.log(about.play());

// Principle 3

// code example for New Binding
function PlayerHeight(height) {
    this.height = height
    this.tall = function() {
        return `The player is ${this.height}.`
    }
}

const alan = new PlayerHeight('6 foot');
console.log(alan.tall());

// Principle 4

// code example for Explicit Binding

const player = {
    name: "Alan"
}

const positions = ["defender", "left-mid", "forward"];

function playerPositions(position1, position2, position3) {
    return `${this.name} can play ${position1}, ${position2}, or ${position3}.`
}

// playerPositions.call(player, positions[0], positions[1], positions[2]);
// playerPositions.apply(player, positions);
const newPlayer = playerPositions.bind(player, ...positions);
console.log(newPlayer());