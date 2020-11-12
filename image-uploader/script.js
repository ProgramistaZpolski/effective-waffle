/*window.SavePhoto = async function SavePhoto(e) 
{
    let formData = new FormData();
    let photo = e.files[0];      
         
    formData.append("avatar", photo);
    
    try {
       let r = await fetch('http://localhost:8000/upload.php', {method: "POST", body: formData}); 
       console.log('HTTP response code:',r.status); 
    } catch(e) {
       console.log('Huston we have problem...:', e);
    }
    
}*/

const url = 'http://localhost:8000/upload.php';
const superhost = 'http://localhost:8000';
const form = document.querySelector('form');
const up = document.querySelector('#updbtn');

function finupd() {
    document.querySelector('progress').style.display = 'block';

    const files = document.querySelector('[type=file]').files
    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
        let file = files[i]

        formData.append('files[]', file)
    }

    fetch(url, {
        method: 'POST',
        body: formData,
    }).then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            showResult(data);
        })
        .catch(function () {
        });
}

function showResult(data) {
    document.querySelector('main').innerHTML = `
        <h2>Uploaded Successfully!</h2>
        <img src="${superhost}/uploads/${data.linker}">
        <input type='text' id='linkval' value='${superhost}/uploads/${data.linker}'>
        <button onclick="copyLink();" class="bluebutton">Copy Link</button>
    `;
}

function copyLink() {
    var copyText = document.getElementById("linkval");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
}

/*up.addEventListener('submit', (e) => {
  e.preventDefault();

  const files = document.querySelector('[type=file]').files
  const formData = new FormData()

  for (let i = 0; i < files.length; i++) {
    let file = files[i]

    formData.append('files[]', file)
  }

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    console.log(response)
  })
})*/