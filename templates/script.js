const daysOfWeek = [
    /*0*/"Sunday",
    /*1*/"Monday",
    /*2*/"Tuesday",
    /*3*/"Wednesday",
    /*4*/"Thursday",
    /*5*/"Friday",
    /*6*/"Saturday"
];
const weatherDesc = {
    sunny: ["some sun", "some_sun.png"],
    cloudy: ["some clouds", "some_clouds.png"],
    rainy: ["some rain", "some_rain.png"]
}

var cookie = document.getElementById("cookieAlert");
var day3 = ""
var day4 = ""
var today = daysOfWeek[todaysDay()];
var fCheck = false; //indicates we're in Fahrenheit


var cityWeather = {
    sanJose: [
        /*0*/[weatherDesc.rainy, 85, 64],
        /*1*/[weatherDesc.sunny, 80, 66], 
        /*2*/[weatherDesc.cloudy, 69, 60],
        /*3*/[weatherDesc.sunny, 78, 69],
        /*4*/"San Jose"
    ],
    burbank: [
        /*0*/[weatherDesc.sunny, 94, 65],
        /*1*/[weatherDesc.sunny, 92, 60],
        /*2*/[weatherDesc.cloudy, 78, 55],
        /*3*/[weatherDesc.cloudy, 72, 55],
        /*4*/"Burbank"
    ],
    chicago: [
        /*0*/[weatherDesc.cloudy, 59, 47],
        /*1*/[weatherDesc.sunny, 52, 43],
        /*2*/[weatherDesc.cloudy, 79, 60],
        /*3*/[weatherDesc.cloudy, 78, 58],
        /*4*/"Chicago"
    ],
    dallas: [
        /*0*/[weatherDesc.rainy, 73, 63],
        /*1*/[weatherDesc.rainy, 68, 63],
        /*2*/[weatherDesc.rainy, 72, 65],
        /*3*/[weatherDesc.rainy, 83, 69],
        /*4*/"Dallas"
    ],
    newYork: [
        [weatherDesc.sunny, 65, 44],                     
        [weatherDesc.cloudy, 59, 40],
        [weatherDesc.rainy, 55, 38],
        [weatherDesc.cloudy, 61, 44],
        "New York"
    ]
}

function camelKase(input){
    let temp = [];
    let tempArr = input.split(' ');

    for (let val of tempArr) {
        let newVal = val.charAt(0).toUpperCase() + val.slice(1,val.length)
        temp.push(newVal)
    }
    let camelized = temp.join('');
    return camelized.charAt(0).toLocaleLowerCase() + camelized.slice(1,camelized.length)
}

function cookieMonster(){
    cookie.style.visibility = "hidden"
}

function initialize() {
    sundayRunAround()
    document.getElementById("day3Name").innerHTML = day3;
    document.getElementById("day4Name").innerHTML = day4;
    weatherCardChango()
}

function linkOChango(element){
    let temp = document.getElementById("currentCity").innerHTML;
    cCity = cityWeather[camelKase(element.innerHTML)];
    document.getElementById("currentCity").innerHTML = element.innerHTML;
    element.innerHTML = temp;

    weatherCardChango();
}

function sundayRunAround(){
    if (today == "Thursday"){
        day3 = "Saturday"
        day4 = "Sunday"
    }else if (today == "Friday"){
        day3 = "Sunday";
        day4 = "Monday";
    }else if (today == "Saturday"){
        day3 = "Monday";
        day4 = "Tuesday";
    }else if (today == "Sunday"){
        day3 = "Tuesday";
        day4 = "Wednesday";
    }else {
        day3 = daysOfWeek[todaysDay() + 2];
        day4 = daysOfWeek[todaysDay() + 3];
    }
}

function todaysDay() {
    let date = new Date();
    let day = date.getDay();
    return day;
}

var cCity = cityWeather.sanJose; /*var cCity index: cCity [i][j][k] i: (day of the week)*/
/*(j: 0:array, 1:high temp, 2:low temp) (k:only exists in position [i][0] 0:text 1:img)*/

function weatherCardChango() {
    document.getElementById("currentCity").innerHTML = cCity[4];

    document.getElementById("todayText").innerHTML = cCity[0][0][0];
    document.getElementById("todayImg").src = "./img/" + cCity[0][0][1];
    document.getElementById("todayHTemp").innerHTML = cCity[0][1] + "&deg;";
    document.getElementById("todayLTemp").innerHTML = cCity[0][2] + "&deg;";

    document.getElementById("tomorrowText").innerHTML = cCity[1][0][0];
    document.getElementById("tomorrowImg").src = "./img/" + cCity[1][0][1];
    document.getElementById("tomorrowHTemp").innerHTML = cCity[1][1] + "&deg;";
    document.getElementById("tomorrowLTemp").innerHTML = cCity[1][2] + "&deg;"; 

    document.getElementById("day3Text").innerHTML = cCity[2][0][0];
    document.getElementById("day3Img").src = "./img/" + cCity[2][0][1];
    document.getElementById("day3HTemp").innerHTML = cCity[2][1] + "&deg;";
    document.getElementById("day3LTemp").innerHTML = cCity[2][2] + "&deg;";

    document.getElementById("day4Text").innerHTML = cCity[3][0][0];
    document.getElementById("day4Img").src = "./img/" + cCity[3][0][1];
    document.getElementById("day4HTemp").innerHTML = cCity[3][1] + "&deg;";
    document.getElementById("day4LTemp").innerHTML = cCity[3][2] + "&deg;";
    
    if (document.getElementById("unit").value == "celsius"){
        celsioso();
    }
}

initialize();

function celsioso() {
    let select = document.getElementById("unit")
    if (select.value == "celsius"){
        document.getElementById("todayHTemp").innerHTML = Math.floor((cCity[0][1] - 32) * 5 / 9) + "&deg;";
        document.getElementById("todayLTemp").innerHTML = Math.floor((cCity[0][2] - 32) * 5 / 9) + "&deg;";
    
        document.getElementById("tomorrowHTemp").innerHTML = Math.floor((cCity[1][1] - 32) * 5 / 9) + "&deg;";
        document.getElementById("tomorrowLTemp").innerHTML = Math.floor((cCity[1][2] - 32) * 5 / 9) + "&deg;"; 
    
        document.getElementById("day3HTemp").innerHTML = Math.floor((cCity[2][1] - 32) * 5 / 9) + "&deg;";
        document.getElementById("day3LTemp").innerHTML = Math.floor((cCity[2][2] - 32) * 5 / 9) + "&deg;";
    
        document.getElementById("day4HTemp").innerHTML = Math.floor((cCity[3][1] - 32) * 5 / 9) + "&deg;";
        document.getElementById("day4LTemp").innerHTML = Math.floor((cCity[3][2] - 32) * 5 / 9) + "&deg;";
        fCheck = false;
    }else if (select.value == "fahrenheit") {
        weatherCardChango()
        fCheck = true;
    }
}