function $(h) {
    return document.querySelector(h);
}
let todoList = [
    // awesome stuff coming there...
]
// INIT START 
if (localStorage.getItem('installed')) {
    console.log("Database already initialized");
    for (i = 0; i < localStorage.length - 1; i++) {
        let item = `autosave-${i}`;
        //alert(localStorage[item]);
        if (localStorage[item]){
            var arr = localStorage[item].split(',');
            let tmpList = {
                "text": arr[0],
                "active": arr[1],
                "id": arr[2]
            }
            console.log(tmpList);
            $("#checkbox-land").innerHTML += `
            <br><br><label class="todobox" id = "td-${tmpList.id}" onchange = "changeStatus(${tmpList.id}, ${todoList.length});">${tmpList.text}
                            <input  id = "tdc-${tmpList.id}" type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        `
            console.table(tmpList);
            todoList.push(tmpList);
            console.log(todoList);
        }
    }
    console.log(todoList.length);
    for (let i = 0; i < todoList.length; i++) {
        console.log(todoList[i].id);
        if (todoList[i].active == "false") {
            $("#tdc-" + todoList[i].id).checked = true;
            $("#td-" + todoList[i].id).style.textDecoration = "line-through";
        }
    }
}
else {
    localStorage.setItem('installed', true);
    console.log("Initialized database");
}
// INIT END
function addTodo() {
    console.log(todoList);
    let idtd = Math.floor((Math.random() * 1000000) + 1);
    let tmpList = {
        "text": $("#addtodo").value,
        "active": true,
        "id": idtd
    }
    $("#checkbox-land").innerHTML += `
    <br><br><label class="todobox" id = "td-${idtd}" onchange = "changeStatus(${idtd}, ${todoList.length});">${tmpList.text}
                    <input  id = "tdc-${idtd}" type="checkbox">
                    <span class="checkmark"></span>
                </label>
                `
    console.table(tmpList);
    todoList.push(tmpList);
    console.log(todoList);
    for (let i = 0; i < todoList.length; i++) {
        console.log(todoList[i].id);
        localStorage.setItem(`autosave-${i}`, [todoList[i].text, todoList[i].active, todoList[i].id]);
        if (todoList[i].active == false) {
            $("#tdc-" + todoList[i].id).checked = true;
            $("#td-" + todoList[i].id).style.textDecoration = "line-through";
        }
    }
}
function changeStatus(tdid, order) {
    console.log(tdid);
    if (todoList[order].active == true) {
        $("#td-" + tdid).style.textDecoration = "line-through";
        todoList[order].active = false;
        localStorage.setItem(`autosave-${order}`, [todoList[order].text, todoList[order].active, todoList[order].id]);
    }
    else {
        $("#td-" + tdid).style.textDecoration = "none";
        todoList[order].active = true;
        localStorage.setItem(`autosave-${order}`, [todoList[order].text, todoList[order].active, todoList[order].id]);
    }
}

function changeActiveTab(tab) {
    if (tab == 1) {
        $("#tabsel1").classList.add("tabs-active");
        $("#tabsel2").classList.remove("tabs-active");
        $("#tabsel3").classList.remove("tabs-active");
        $(".tab1").style.display = "block";
        $(".tab2").style.display = "none";
        $(".tab3").style.display = "none";
    }
    else if (tab == 2) {
        $("#tabsel1").classList.remove("tabs-active");
        $("#tabsel2").classList.add("tabs-active");
        $("#tabsel3").classList.remove("tabs-active");
        $(".tab1").style.display = "none";
        $(".tab2").style.display = "block";
        $(".tab3").style.display = "none";
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].active == true) {
                console.log('h');
                $("#checkbox-land-2").innerHTML += `
                    <br><br><label class="todobox" id = "td-${todoList[i].id}" onchange = "changeStatus(${todoList.id}, ${i});">${todoList[i].text}
                    <input  id = "tdc-${todoList[i].id}" type="checkbox">
                    <span class="checkmark"></span>
                </label>
                `
            }
            else if (todoList[i].active == "true"){
                console.log('h');
                $("#checkbox-land-2").innerHTML += `
                    <br><br><label class="todobox" id = "td-${todoList[i].id}" onchange = "changeStatus(${todoList.id}, ${i});">${todoList[i].text}
                    <input  id = "tdc-${todoList[i].id}" type="checkbox">
                    <span class="checkmark"></span>
                </label>
                `
            }
        }
    }
    else {
        $("#tabsel1").classList.remove("tabs-active");
        $("#tabsel2").classList.remove("tabs-active");
        $("#tabsel3").classList.add("tabs-active");
        $(".tab1").style.display = "none";
        $(".tab2").style.display = "none";
        $(".tab3").style.display = "block";
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].active == false) {
                console.log('h');
                $("#checkbox-land-3").innerHTML += `
                    <br><br><label class="todobox" id = "td-${todoList[i].id}" onchange = "changeStatus(${todoList[i].id}, ${i});">${todoList[i].text}
                    <input  id = "tdc-${todoList[i].id}" type="checkbox" checked>
                    <span class="checkmark"></span>
                </label><img src = "trash.svg" alt = "Delete todo" class = "deleteicon" id = "trsh-${todoList[i].id}" onclick = "deleteTodo(${todoList[i].id}, ${i})">
                `
            }
            else if (todoList[i].active == "false"){
                console.log('h');
                $("#checkbox-land-3").innerHTML += `
                    <br><br><label class="todobox" id = "td-${todoList[i].id}" onchange = "changeStatus(${todoList[i].id}, ${i});">${todoList[i].text}
                    <input  id = "tdc-${todoList[i].id}" type="checkbox" checked>
                    <span class="checkmark"></span>
                </label><img src = "trash.svg" alt = "Delete todo" class = "deleteicon" id = "trsh-${todoList[i].id}" onclick = "deleteTodo(${todoList[i].id}, ${i})">
                `
            }
        }
    }
}

function deleteTodo(tdid, order){
    $(`#td-${tdid}`).remove();
    todoList.splice(order, order-1);
    localStorage.removeItem(`autosave-${order}`);
}
function deletAll(){
    $("#checkbox-land-3").innerHTML = "<h2>Nothing there</h2>";
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].active == 'false') {
            console.log('h');
            todoList.splice(i, i-1);
            localStorage.removeItem(`autosave-${i}`);
        }
    }
}