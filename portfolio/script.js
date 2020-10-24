function $(h){
    /* hQuery - coming soon */
    return document.querySelector(h);
}
function hoverPrecent(what){
    if (what == "html"){
        $("#html-progress-text").innerText = "90%";
    }
    else if (what == "css"){
        $("#css-progress-text").innerText = "70%";
    }
    else if (what == "js"){
        $("#js-progress-text").innerText = "59%";
    }
    else if (what == "bootstrap"){
        $("#bootstrap-progress-text").innerText = "60%";
    }
    else if (what == "jquery"){
        $("#jquery-progress-text").innerText = "20%";
    }
    else if (what == "php"){
        $("#php-progress-text").innerText = "40%";
    }
    else if (what == "nodejs"){
        $("#nodejs-progress-text").innerText = "40%";
    }
    else if (what == "mysql"){
        $("#mysql-progress-text").innerText = "30%";
    }
    else{
        alert("Kernel Panic");
    }
}
function deHoverPrecent(what){
    if (what == "html"){
        $("#html-progress-text").innerText = "HTML";
    }
    else if (what == "css"){
        $("#css-progress-text").innerText = "CSS";
    }
    else if (what == "js"){
        $("#js-progress-text").innerText = "Javascript";
    }
    else if (what == "bootstrap"){
        $("#bootstrap-progress-text").innerText = "Bootstrap";
    }
    else if (what == "jquery"){
        $("#jquery-progress-text").innerText = "jQuery";
    }
    else if (what == "php"){
        $("#php-progress-text").innerText = "PHP";
    }
    else if (what == "nodejs"){
        $("#nodejs-progress-text").innerText = "NodeJS";
    }
    else if (what == "mysql"){
        $("#mysql-progress-text").innerText = "MySQL";
    }
    else{
        alert("Kernel Panic");
    }
}
let project404 = {
    "name": "404 Page",
    "link": "https://programistazpolski.ct8.pl/devchallenge/404-not-found/",
    "image": "img/product1.webp",
    "tag": "Vanilla HTML/CSS"
}
let projectTeam = {
    "name": "Team Page",
    "link": "https://programistazpolski.ct8.pl/devchallenge/my-team-page/",
    "image": "img/product2.webp",
    "tag": "Vanilla HTML/CSS"
}
let projectConsultant = {
    "name": "Interior Consultant",
    "link": "https://programistazpolski.ct8.pl/devchallenge/interior-consultant/",
    "image": "img/product3.webp",
    "tag": "Vanilla HTML/CSS/JS"
}
let projectRecipe = {
    "name": "Recipe Page",
    "link": "https://programistazpolski.ct8.pl/devchallenge/recipe-page/",
    "image": "img/product4.webp",
    "tag": "Vanilla HTML/CSS"
}
let projectGallery = {
    "name": "Gallery Page",
    "link": "https://programistazpolski.ct8.pl/devchallenge/my-gallery/",
    "image": "img/product5.webp",
    "tag": "Vanilla HTML/CSS"
}
let projectCheckout = {
    "name": "Checkout Page",
    "link": "https://programistazpolski.ct8.pl/devchallenge/checkout-page/",
    "image": "img/product6.webp",
    "tag": "Vanilla HTML/CSS/JS"
}
let projectEdie = {
    "name": "Edie Homepage",
    "link": "https://programistazpolski.ct8.pl/devchallenge/edie-homepage/",
    "image": "img/product7.webp",
    "tag": "Vanilla HTML/CSS/JS"
}
let projectLanding = {
    "name": "Amazing Computers Homepage",
    "link": "http://programistazpolski.ct8.pl/fcc/landing/",
    "image": "img/product8.webp",
    "tag": "Vanilla HTML/CSS"
}
let projectSurvey = {
    "name": "ThePizzaPage Survey",
    "link": "http://programistazpolski.ct8.pl/fcc/survey/",
    "image": "img/product9.webp",
    "tag": "Vanilla HTML/CSS"
}
let projectDocs = {
    "name": "Javascript Docs",
    "link": "http://programistazpolski.ct8.pl/fcc/docs/",
    "image": "img/product10.webp",
    "tag": "Vanilla HTML/CSS"
}
let projectTribute = {
    "name": "Linus Torvalds Tribute Page",
    "link": "http://programistazpolski.ct8.pl/fcc/tribute/",
    "image": "img/product11.webp",
    "tag": "Vanilla HTML/CSS"
}
let currpage = 1;
function changePage(toWhere){
    if (toWhere == "next"){
        if (currpage == 1){
            currpage++;
            $("#card1-img").src = projectRecipe.image;
            $("#card1-p").innerText = projectRecipe.tag;
            $("#card1-h1").innerText = projectRecipe.name;
            $("#card1-button").setAttribute("onclick", "projectRedirecter('recipe')");

            $("#card2-img").src = projectGallery.image;
            $("#card2-p").innerText = projectGallery.tag;
            $("#card2-h1").innerText = projectGallery.name;
            $("#card2-button").setAttribute("onclick", "projectRedirecter('gallery')");

            $("#card3-img").src = projectCheckout.image;
            $("#card3-p").innerText = projectCheckout.tag;
            $("#card3-h1").innerText = projectCheckout.name;
            $("#card3-button").setAttribute("onclick", "projectRedirecter('checkout')");
        }
        else if (currpage == 2){
            currpage++;
            $("#card1-img").src = projectEdie.image;
            $("#card1-p").innerText = projectEdie.tag;
            $("#card1-h1").innerText = projectEdie.name;
            $("#card1-button").setAttribute("onclick", "projectRedirecter('edie')");

            $("#card2-img").src = projectLanding.image;
            $("#card2-p").innerText = projectLanding.tag;
            $("#card2-h1").innerText = projectLanding.name;
            $("#card2-button").setAttribute("onclick", "projectRedirecter('landing')");

            $("#card3-img").src = projectSurvey.image;
            $("#card3-p").innerText = projectSurvey.tag;
            $("#card3-h1").innerText = projectSurvey.name;
            $("#card3-button").setAttribute("onclick", "projectRedirecter('survey')");
        }
        else if (currpage == 3){
            currpage++;
            $("#card1-img").src = projectDocs.image;
            $("#card1-p").innerText = projectDocs.tag;
            $("#card1-h1").innerText = projectDocs.name;
            $("#card1-button").setAttribute("onclick", "projectRedirecter('docs')");

            $("#card2-img").src = projectTribute.image;
            $("#card2-p").innerText = projectTribute.tag;
            $("#card2-h1").innerText = projectTribute.name;
            $("#card2-button").setAttribute("onclick", "projectRedirecter('tribute')");

            $("#card3-img").src = "img/comingsoon.webp";
            $("#card3-p").innerText = "????";
            $("#card3-h1").innerText = "Coming soon...";
            $("#card3-button").setAttribute("onclick", "alert('????????');");
        }
    }
    else if (toWhere == "back"){
        if (currpage == 2){
            currpage--;
            $("#card1-img").src = project404.image;
            $("#card1-p").innerText = project404.tag;
            $("#card1-h1").innerText = project404.name;
            $("#card1-button").setAttribute("onclick", "projectRedirecter('404')");

            $("#card2-img").src = projectTeam.image;
            $("#card2-p").innerText = projectTeam.tag;
            $("#card2-h1").innerText = projectTeam.name;
            $("#card2-button").setAttribute("onclick", "projectRedirecter('team')");

            $("#card3-img").src = projectConsultant.image;
            $("#card3-p").innerText = projectConsultant.tag;
            $("#card3-h1").innerText = projectConsultant.name;
            $("#card3-button").setAttribute("onclick", "projectRedirecter('consultant')");
        }
        else if (currpage == 3){
            currpage--;
            $("#card1-img").src = projectRecipe.image;
            $("#card1-p").innerText = projectRecipe.tag;
            $("#card1-h1").innerText = projectRecipe.name;
            $("#card1-button").setAttribute("onclick", "projectRedirecter('recipe')");

            $("#card2-img").src = projectGallery.image;
            $("#card2-p").innerText = projectGallery.tag;
            $("#card2-h1").innerText = projectGallery.name;
            $("#card2-button").setAttribute("onclick", "projectRedirecter('gallery')");

            $("#card3-img").src = projectCheckout.image;
            $("#card3-p").innerText = projectCheckout.tag;
            $("#card3-h1").innerText = projectCheckout.name;
            $("#card3-button").setAttribute("onclick", "projectRedirecter('checkout')");
        }
        else if (currpage == 4){
            currpage--;
            $("#card1-img").src = projectEdie.image;
            $("#card1-p").innerText = projectEdie.tag;
            $("#card1-h1").innerText = projectEdie.name;
            $("#card1-button").setAttribute("onclick", "projectRedirecter('edie')");

            $("#card2-img").src = projectCheckout.image;
            $("#card2-p").innerText = projectCheckout.tag;
            $("#card2-h1").innerText = projectCheckout.name;
            $("#card2-button").setAttribute("onclick", "projectRedirecter('checkout')");

            $("#card3-img").src = projectSurvey.image;
            $("#card3-p").innerText = projectSurvey.tag;
            $("#card3-h1").innerText = projectSurvey.name;
            $("#card3-button").setAttribute("onclick", "projectRedirecter('survey')");
        }
    }
    else if (toWhere == "nojs"){
        $("#card1-img").src = project404.image;
        $("#card1-p").innerText = project404.tag;
        $("#card1-h1").innerText = project404.name;
        $("#card1-button").setAttribute("onclick", "projectRedirecter('404')");

        $("#card2-img").src = projectGallery.image;
        $("#card2-p").innerText = projectGallery.tag;
        $("#card2-h1").innerText = projectGallery.name;
        $("#card2-button").setAttribute("onclick", "projectRedirecter('gallery')");

        $("#card3-img").src = projectRecipe.image;
        $("#card3-p").innerText = projectRecipe.tag;
        $("#card3-h1").innerText = projectRecipe.name;
        $("#card3-button").setAttribute("onclick", "projectRedirecter('recipe')");
    }
    else{
        $("#card1-img").src = projectEdie.image;
        $("#card1-p").innerText = projectEdie.tag;
        $("#card1-h1").innerText = projectEdie.name;
        $("#card1-button").setAttribute("onclick", "projectRedirecter('edie')");

        $("#card2-img").src = projectLanding.image;
        $("#card2-p").innerText = projectLanding.tag;
        $("#card2-h1").innerText = projectLanding.name;
        $("#card2-button").setAttribute("onclick", "projectRedirecter('landing')");

        $("#card3-img").src = projectConsultant.image;
        $("#card3-p").innerText = projectConsultant.tag;
        $("#card3-h1").innerText = projectConsultant.name;
        $("#card3-button").setAttribute("onclick", "projectRedirecter('consultant')");
    }
}
function projectRedirecter(where){
    if (where == "404"){
        window.open(project404.link, "_blank"); 
    }
    else if (where == "team"){
        window.open(projectTeam.link, "_blank"); 
    }
    else if (where == "consultant"){
        window.open(projectConsultant.link, "_blank"); 
    }
    else if (where == "recipe"){
        window.open(projectRecipe.link, "_blank"); 
    }
    else if (where == "gallery"){
        window.open(projectGallery.link, "_blank"); 
    }
    else if (where == "checkout"){
        window.open(projectCheckout.link, "_blank"); 
    }
    else if (where == "edie"){
        window.open(projectEdie.link, "_blank"); 
    }
    else if (where == "landing"){
        window.open(projectLanding.link, "_blank"); 
    }
    else if (where == "survey"){
        window.open(projectSurvey.link, "_blank"); 
    }
    else if (where == "docs"){
        window.open(projectDocs.link, "_blank"); 
    }
    else if (where == "tribute"){
        window.open(projectTribute.link, "_blank"); 
    }
    else{
        console.log("Kernel Panic")
    }
}