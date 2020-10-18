let price = 148.98;
let lastKnownBackpack = document.getElementById('price_backback').value;
let lastKnownShoes = document.getElementById('price_shoes').value;
function updatePrice(which) {
    if (which == 1){
        if (document.getElementById('price_backback').value > lastKnownBackpack){
            price += 54.99;
        }
        else{
            price -= 54.99;
        }
        lastKnownBackpack = document.getElementById('price_backback').value;
        document.getElementById('totalprice').innerText = Math.round(price) + ".99$"; 
    }
    else{
        if (document.getElementById('price_shoes').value > lastKnownShoes){
            price += 74.99;
        }
        else{
            price -= 74.99;
        }
        lastKnownShoes = document.getElementById('price_shoes').value;
        document.getElementById('totalprice').innerText = Math.round(price) + "$"; 
    }
}