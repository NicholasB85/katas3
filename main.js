//01. Display the numbers from 1-20.
function one() {
    let answer = "";
    for (let i = 1; i <= 20; i++) {
        answer += i + " ";

    }
    //creating a div and appending the new element to it.
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}
//02. Display the even numbers up to 20.
function two() {
    let answer = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            answer += i + " ";
        }
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}
//03. Display the odd numbers up to 20.
function three() {
    let answer = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            answer += i + " ";
        }
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}
//04. Display the multiples of 5 up to 100.
function four() {
    let answer = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            answer += i + " ";
        }
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}
//05. Display the square numbers up to 100.
function five() {
    let answer = "";
    for (let i = 1; i <= 100; i++) {
        var y = i * i;
        if (y <= 101) {
            answer += y + " ";
        }
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}
//06. Display the numbers counting back from 20.
function six() {
    let answer = "";
    for (let i = 20; i > 0; i--) {
        answer += i + " ";
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}
//07. Display the even numbers decending from 20.
function seven() {
    let answer = "";
    for (let i = 20; i > 0; i--) {
        if (i % 2 == 0) {
            answer += i + " ";
        }
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);

}
//08. Display the odd numbers counting down from 20.
function eight() {
    let answer = "";
    for (let i = 20; i > 0; i--) {
        if (i % 2 != 0) {
            answer += i + " ";
        }
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}
//09. display the multiples of five decending from 100.
function nine() {
    let answer = "";
    for (let i = 100; i > 0; i--) {
        if (i % 5 == 0) {
            answer += i + " ";
        }
    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);

}
//10. display the square numbers counting down to from 100.
function ten() {
    let answer = "";
    for (let i = 10; i > 0; i--) {
        let y = i * i;
        if (i >= 0) {
            answer += y + " ";
        }

    }
    var element = document.createElement("div");
    element.textContent = answer;
    document.body.appendChild(element);
}

//setting the sample array as a const.
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
//11. display the array to page.
function eleven() {
    let s = sampleArray;
    var element = document.createElement("div");
    element.textContent = s;
    document.body.appendChild(element);
}
//12. display the even numbers of the array.
function evens() {
    let evens = sampleArray.filter(i => i % 2 === 0);
    var element = document.createElement("div");
    element.textContent = evens;
    document.body.appendChild(element);
}
//13. dispaly the odd numbers of the array
function odds() {
    let odds = sampleArray.filter(i => i & 2 != 0);
    var element = document.createElement("div");
    element.textContent = odds;
    document.body.appendChild(element);
}
//14. display the numbers from the array squared.
function square() {
    let square = sampleArray.map(function (a) {
        return a * a;
    });
    var element = document.createElement("div");
    element.textContent = square;
    document.body.appendChild(element);
}

//15. display the sum of the numbers 1-20
function sum(){
    let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let sum = numbers.reduce(function(a, b) {
        return a + b;
    })
    var element = document.createElement("div");
    element.textContent = sum;
    document.body.appendChild(element);
}

//16. display the sum of all the numbers in the given array
function sum2() {
    let sum2 = sampleArray.reduce(function(a, b) {
        return a + b;})
    var element = document.createElement("div");
    element.textContent = sum2;
    document.body.appendChild(element);
}

//17. find smallest number in sample array
function small() {
    let small = Math.min.apply(Math, sampleArray);
    var element = document.createElement("div");
    element.textContent = small;
    document.body.appendChild(element);
}

//18. find the largest number in the sample array
function largest() {
    let large = Math.max.apply(Math, sampleArray);
    var element = document.createElement("div");
    element.textContent = large;
    document.body.appendChild(element);
}

//19. creating the rectangles
one()
two()
three()
four()
five()
six()
seven()
eight()
nine()
ten()
eleven()
evens()
odds()
square()
sum()
sum2()
small()
largest()
