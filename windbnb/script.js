function $(h){
    return document.querySelector(h);
}
fetch('https://api.jsonbin.io/b/5f95924cbd69750f00c35a19')  // ukradnij dane z openweathermap 
    .then(function (resp) { return resp.json() }) // konwert tu dżejson
    .then(function (data) { // prześlij dane do rysowania
        console.log(data);
        parseRecivenData(data, true);
    })
    .catch(function () {
        // złap wszystkie errory
});
let cardRegistry;
function parseRecivenData(inf, saveToRegistry) {
    if (saveToRegistry){
        cardRegistry = inf;
    }
    console.log("Recived data");
    for (let i = 1; i < 7; i++){
        let trri = i - 1;
        console.log('Found ' + i + " element in array");
        console.log(i);
        console.log(inf[trri]);
        if (inf[trri]){
            console.log(inf[trri].title);
            /*$("main").innerHTML += `<div class = 'card'>
            <img src = "${inf[i].photo}">
             ${inf[i].title}
            </div>`;*/
            console.log("endpoint 1");
            console.log("#card" + i + "-img");
            $("#card" + i + "-img").src = inf[trri].photo;
            if (inf[trri].superHost == false){
                $("#card" + i + "-superhost").style.display = "none";
            }
            $("#card" + i + "-apartmentextra").innerText = inf[trri].type;
            $("#card" + i + "-ratingvalue").innerText = inf[trri].rating;
            $("#card" + i + "-description").innerText = inf[trri].title;
            console.log("endpoint 2");
        }
        else { 
            for (let e = i; e < 7; e++){
                $(".card" + e).style.display = "none";
            }
            i = 999;
        }
        
    }
    $("#stayland").innerText = "Stays in Finland - " + inf.length + " stays"
    document.getElementById('loader').style.display = "none";
    document.getElementById('scaler').style.display = "block";
}

function showHdrMax(){
    //$(".maxhdr").style.display = "block";
    $(".maxhdr").classList.add('show');
    $(".maxhdr").classList.remove('hide');

    //$(".maxhdr-cover").style.display = "block";
    $(".maxhdr-cover").classList.add('show-h');
    $(".maxhdr").classList.remove('hide');
}
function hideMaxhdr() {
    $(".maxhdr").classList.remove('show');
    $(".maxhdr").classList.add('hide');

    //$(".maxhdr-cover").style.display = "block";
    $(".maxhdr-cover").classList.remove('show-h');
    $(".maxhdr").classList.add('hide');
}

let adlval = 0;
let chlval = 0;

function changeSpanVal(spanname, plus) {
    if (plus) {
        if (spanname == "adl") {
            adlval++;
            $("#" + spanname).innerText = adlval;
        } else {
            chlval++;
            $("#" + spanname).innerText = chlval;
        } 
    } else {
        if (spanname == "adl") {
            adlval--;
            $("#" + spanname).innerText = adlval;
        } else {
            chlval--;
            $("#" + spanname).innerText = chlval;
        } 
    }
}

function findLocations(){
    let tmpRgi = cardRegistry;
    let flnRgi = tmpRgi.filter(element => element.city.includes($("#loc18").value));
    console.log(flnRgi);
    parseRecivenData(flnRgi, false);
    hideMaxhdr();
}