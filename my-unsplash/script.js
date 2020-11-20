'use strict';
let state = [];

function $(h) {
    return document.querySelector(h);
}
fetch("./api/posts.json")
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        loadGrid(data);
    })
    .catch(function () {
    });

function loadGrid(data) {
    state = data;
    let currentGridArea = 1;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        $(`.area${currentGridArea}`).innerHTML += `<div class="imgcard">
            <img loading="lazy" src="${element.img}">
            <div class="semimodal">
                <h3>${element.label}</h3>
            </div>
        </div>`;
        if (currentGridArea == 1) {
            currentGridArea = 2;
        } else if (currentGridArea == 2) {
            currentGridArea = 3;
        } else {
            currentGridArea = 1;
        }
    }
}



function showModal(action) {
    if (action) {
        $(".modal").style.display = "block";
    } else {
        $(".modal").style.display = "none";
    }
}

function searchPosts() {
    $(".area1").innerHTML = "";
    $(".area2").innerHTML = "";
    $(".area3").innerHTML = "";
    let currdata = state.filter(element => element.label.includes($("#search").value));
    let currentGridArea = 1;
    for (let index = 0; index < currdata.length; index++) {
        const element = currdata[index];
        $(`.area${currentGridArea}`).innerHTML += `<div class="imgcard">
            <img loading="lazy" src="${element.img}">
            <div class="semimodal">
                <h3>${element.label}</h3>
            </div>
        </div>`;
        if (currentGridArea == 1) {
            currentGridArea = 2;
        } else if (currentGridArea == 2) {
            currentGridArea = 3;
        } else {
            currentGridArea = 1;
        }
    }
}