"use strict";

let recivenData = [
    // so that we won't have to fetch any more data from the API - after the quiz has started, you can disconnect from the internet (except for flags).
];
let currentTask = [
    // a variable so that we can store information about current question
]

let corrAnsw = 0;

let streak = 0;

function $(h) {
    return document.querySelector(h);
}
function startGame() {
    $(".sk-chase").style.display = "inline-block";
    $("#icnstr").style.display = "none";
    fetch("https://restcountries.eu/rest/v2/all")
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            gameStartHandler(data, true);
        })
        .catch(function () {
        });
}
function gameStartHandler(data, newgame) {
    if (newgame) {
        recivenData = data;
        $("#startbutton").style.display = "none";
    }
    else {
        $("#option-1").classList.remove("correct-selected");
        $("#option-1").classList.remove("wrong-selected");
        $("#option-2").classList.remove("correct-selected");
        $("#option-2").classList.remove("wrong-selected");
        $("#option-3").classList.remove("correct-selected");
        $("#option-3").classList.remove("wrong-selected");
        $("#option-4").classList.remove("correct-selected");
        $("#option-4").classList.remove("wrong-selected");
    }
    if (Math.floor((Math.random() * 8) + 1) > 5) {
        let yandex = Math.floor((Math.random() * recivenData.length) + 1);
        let yandex1 = Math.floor((Math.random() * recivenData.length) + 1);
        let yandex2 = Math.floor((Math.random() * recivenData.length) + 1);
        let yandex3 = Math.floor((Math.random() * recivenData.length) + 1);
        currentTask = recivenData[yandex];
        console.log(currentTask);
        console.log(recivenData[yandex1]);
        console.log(recivenData[yandex2]);
        console.log(recivenData[yandex3]);

        $(".gamebox").style.display = "block";
        $("#question-title").innerHTML = `<img src = '${currentTask["flag"]}' id = "question-title" class = "imgsu">`;
        let chance = 25;
        let rnnumber = Math.floor((Math.random() * 100) + 1);
        console.log(rnnumber);
        if (rnnumber < chance) {
            $("#option-1").innerText = currentTask["name"];
            corrAnsw = 1;
        }
        else {
            chance = 50;
            if (rnnumber < chance) {
                $("#option-2").innerText = currentTask["name"];
                corrAnsw = 2;
            }
            else {
                chance = 75
                if (rnnumber < chance) {
                    $("#option-3").innerText = currentTask["name"];
                    corrAnsw = 3;
                }
                else {
                    $("#option-4").innerText = currentTask["name"];
                    corrAnsw = 4;
                }
            }
        };

        // Fill the rest of buttons with text
        if (corrAnsw == 1) {
            $("#option-2").innerText = recivenData[yandex1]["name"];
            $("#option-3").innerText = recivenData[yandex2]["name"];
            $("#option-4").innerText = recivenData[yandex3]["name"];
        }
        else if (corrAnsw == 2) {
            $("#option-1").innerText = recivenData[yandex1]["name"];
            $("#option-3").innerText = recivenData[yandex2]["name"];
            $("#option-4").innerText = recivenData[yandex3]["name"];
        }
        else if (corrAnsw == 3) {
            $("#option-1").innerText = recivenData[yandex1]["name"];
            $("#option-2").innerText = recivenData[yandex2]["name"];
            $("#option-4").innerText = recivenData[yandex3]["name"];
        }
        else {
            $("#option-1").innerText = recivenData[yandex1]["name"];
            $("#option-2").innerText = recivenData[yandex2]["name"];
            $("#option-3").innerText = recivenData[yandex3]["name"];
        }
    }
    else {
        let yandex = Math.floor((Math.random() * recivenData.length) + 1);
        let yandex1 = Math.floor((Math.random() * recivenData.length) + 1);
        let yandex2 = Math.floor((Math.random() * recivenData.length) + 1);
        let yandex3 = Math.floor((Math.random() * recivenData.length) + 1);
        currentTask = recivenData[yandex];
        console.log(currentTask);
        console.log(recivenData[yandex1]);
        console.log(recivenData[yandex2]);
        console.log(recivenData[yandex3]);

        $(".gamebox").style.display = "block";
        if (currentTask["capital"]){
            $("#question-title").innerText = `${currentTask["capital"]} is a capital of`;
        }
        else {
            $("#question-title").innerText = `What country does not have a capital`;
        }
        let chance = 25;
        let rnnumber = Math.floor((Math.random() * 100) + 1);
        console.log(rnnumber);
        if (rnnumber < chance) {
            $("#option-1").innerText = currentTask["name"];
            corrAnsw = 1;
        }
        else {
            chance = 50;
            if (rnnumber < chance) {
                $("#option-2").innerText = currentTask["name"];
                corrAnsw = 2;
            }
            else {
                chance = 75
                if (rnnumber < chance) {
                    $("#option-3").innerText = currentTask["name"];
                    corrAnsw = 3;
                }
                else {
                    $("#option-4").innerText = currentTask["name"];
                    corrAnsw = 4;
                }
            }
        };

        // Fill the rest of buttons with text
        if (corrAnsw == 1) {
            $("#option-2").innerText = recivenData[yandex1]["name"];
            $("#option-3").innerText = recivenData[yandex2]["name"];
            $("#option-4").innerText = recivenData[yandex3]["name"];
        }
        else if (corrAnsw == 2) {
            $("#option-1").innerText = recivenData[yandex1]["name"];
            $("#option-3").innerText = recivenData[yandex2]["name"];
            $("#option-4").innerText = recivenData[yandex3]["name"];
        }
        else if (corrAnsw == 3) {
            $("#option-1").innerText = recivenData[yandex1]["name"];
            $("#option-2").innerText = recivenData[yandex2]["name"];
            $("#option-4").innerText = recivenData[yandex3]["name"];
        }
        else {
            $("#option-1").innerText = recivenData[yandex1]["name"];
            $("#option-2").innerText = recivenData[yandex2]["name"];
            $("#option-3").innerText = recivenData[yandex3]["name"];
        }
    }
}

function giveAnwser(ichbin) {
    if (corrAnsw == ichbin) {
        $("#next-button").style.display = "block";
        $("#option-" + ichbin).classList.add("correct-selected");
        streak++;
    }
    else {
        $("#next-button").style.display = "block";
        $("#option-" + ichbin).classList.add("wrong-selected");
        $("#next-button").removeEventListener("click", gameStartHandler);
        $("#next-button").addEventListener("click", gameFail);
    }
}
function gameFail() {
    $(".failbox").style.display = "block";
    $(".gamebox").style.display = "none";
    $("#howmany").innerText = streak;
}