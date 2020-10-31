function $(h) {
    return document.querySelector(h);
}
fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        setData(data);
    })
    .catch(function () {
    });
function setData(deeta) {
    $(".quote").innerText = deeta.quote.quoteText;
    $("#author-qu").innerText = deeta.quote.quoteAuthor;
    if (deeta.quote.quoteGenre) {
        $("#genre-qu").innerText = deeta.quote.quoteGenre;
    }
    else {
        $("#genre-qu").innerText = "N/A";
    }
}

function redoQu() {
    fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            $("main").innerHTML = `
        <div class="quote-par">
            <h1 class="quote">If you live in a good neighborhood, you drive home and there's a bank. There's grocery stores and big
                houses - but no motels. What that tells you psychologically is you protect your money and buy good
                things for your family to eat in your nice big house.</h1>
        </div>
        <div class="quote-addon" onclick="getAuthor();">
            <h3 id = "author-qu">will.i.am</h3>
            <h4 id = "genre-qu">family</h4>
            <img src="arrow-right.svg" id = "swhqu" alt="Show more quotes">
        </div>
        `
            setData(data);
        })
        .catch(function () {
        });
}
function getAuthor() {
    let athname = $('#author-qu').innerText;
    fetch(`https://quote-garden.herokuapp.com/api/v2/authors/${athname}?page=1&limit=10`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            $("main").innerHTML = `<h1 style = "font-weight: 700;">${athname}</h1><br>`;
            for (let i = 0; i < data.quotes.length; i++) {
                $("main").innerHTML += `
            <div class="quote-par">
                <h1 class="quote">${data.quotes[i].quoteText}</h1>
            </div><br><br><br><br>
            `
            }
        })
        .catch(function () {
        });
}