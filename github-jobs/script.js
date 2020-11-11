let jobData = [];


function $(h) {
    return document.querySelector(h);
}


function searchJobs(locationOrDescription) {
    $(".sk-fading-circle").style.display = "block";
    if (locationOrDescription) {
        // https://jobs.github.com/positions.json?description=google
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${$("#jobsearch").value}`)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                parseSearch(data);
            })
            .catch(function () {
            });
    } else {
        let customurl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${$("#jobsearch").value}`;
        if ($("#fulltime").checked) {
            customurl += `&full_time=true`;
        }
        if ($("#amsterdam").checked == true || $("#london").checked == true || $("#berlin").checked == true || $("#newyork").checked == true) {
            if ($("#amsterdam").checked == true) {
                customurl += `&location=Amsterdam`;
            } else if ($("#london").checked == true) {
                customurl += `&location=London`;
            } else if ($("#berlin").checked == true) {
                customurl += `&location=Berlin`;
            } else if ($("#newyork").checked == true) {
                customurl += `&location=New+York`;
            }
        } else {
            if ($("#city").value != "") {
                customurl += `&location=${$("#city").value}`;
            }
        }
        fetch(customurl)
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                parseSearch(data);
            })
            .catch(function () {
            });
    }
}

function parseSearch(rData) {
    jobData = rData;
    $(".listjobs").innerHTML = "";
    for (let jobindex = 0; jobindex < jobData.length; jobindex++) {
        const element = jobData[jobindex];
        $(".listjobs").innerHTML += `
            <div id="${element.id}" class="card" onclick='showModal("${element.id}")'>
                <div class="maininfo">
                    <img src="${element.company_logo}" alt="${element.company} logo">
                    <div class="maininfo__right">
                        <h3 class="maininfo__company">${element.company}</h3>
                        <h2 class="maininfo__position">${element.title}</h2>
                        <h3 class="maininfo__fulltime" id="${element.id}__fulltime">Full time</h3>
                    </div>
                </div>
                <div class="moreinfo">
                    <img src="./globe-hemisphere-west-fill.svg" alt="Location">
                    <h4>${element.location}</h4>
                    <img src="./clock-fill.svg" alt="Posted">
                    <h4>${element.created_at}</h4>
                </div>
            </div>
            <div id="md${element.id}-Modal" class="modal">

                <div class="modal-content">
                    <span class="close" onclick='closeModal("${element.id}");'>&times;</span>
                    <h1 class="modal__jobtitle">${element.title}</h1>
                    <div class="modal__additionalinfo">
                        <img src="${element.company_logo}" alt="${element.company} logo">
                        <div class="modal__moreadditionalinfo">
                            <h3 class="modal__companyname">${element.company}</h3><br>
                            <h4 class="modal__location">${element.location}</h4>
                        </div>
                    </div>
                    <h3 class="modal__jobdescription">${element.description}</h3><br>
                    <h2 class="modal__jobapply">How to apply?</h2>
                    <h3>${element.how_to_apply}</h3>
                </div>
            </div>`;
        if (element.type != "Full Time") {
            $(`#${element.id}__fulltime`).remove();
        }
    }
    $(".sk-fading-circle").style.display = "none";
}

function closeModal(modalId) {
    $(`#md${modalId}-Modal`).style.display = "none";
}

function showModal(modalId) {
    $(`#md${modalId}-Modal`).style.display = "block";
}