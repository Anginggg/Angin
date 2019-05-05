var matrix = [];
var side = 13;
var a = 50;
var grassArr = [];
var grasseaterArr = [];
var monsterArr = [];
var waterArr = [];
var personArr = [];
var factoryArr = [];
// var matrix = [
//     [4, 0, 1, 0, 0],
//     [1, 5, 4, 0, 0],
//     [0, 1, 6, 4, 6],
//     [0, 5, 1, 5, 0],
//     [1, 1, 3, 4, 6],
//     [1, 1, 0, 2, 0],
//     [1, 1, 5, 4, 0]
//  ];

function setup() {


    frameRate(2);

    for (let y = 0; y < a; y++) {
        matrix[y] = [];
        for (let x = 0; x < a; x++) {
            matrix[y][x] = Math.round(random(6));
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var eater = new Grasseater(x, y, 2);
                grasseaterArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                var mon = new Monster(x, y, 3);
                monsterArr.push(mon);
            }

            else if (matrix[y][x] == 4) {
                var wat = new Water(x, y, 4);
                waterArr.push(wat);
            }
            else if (matrix[y][x] == 5) {
                var per = new Person(x, y, 5);
                personArr.push(per);

            }
            else if (matrix[y][x] == 6) {
                var fact = new Factory(x, y, 6);
                factoryArr.push(fact);
            }

        }
    }

}



function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("silver");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);


            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);


            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("turquoise");
                rect(x * side, y * side, side, side);


            }
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }

    }




    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }

    for (var i in monsterArr) {
        monsterArr[i].mul();
        monsterArr[i].move();
        monsterArr[i].eat();
        monsterArr[i].die();

    }
    for (var i in waterArr) {
        waterArr[i].mul();
        waterArr[i].move();
        waterArr[i].eat();
        waterArr[i].die();

    }

    for (var i in personArr) {
        personArr[i].mul();
        personArr[i].move();
        personArr[i].makefactory();
        personArr[i].die();

    }
    for (var i in factoryArr) {
        factoryArr[i].mul();
        factoryArr[i].move();
        factoryArr[i].eat();
        factoryArr[i].die();

    }

}

