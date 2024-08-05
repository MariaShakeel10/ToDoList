let inp = document.getElementById('input')
let list = document.getElementById('list')
let checkbox =document.getElementById('check')
let input  =document.getElementById('box')
function add() {
    list.innerHTML += `<li class="list-group-item"><input type="checkbox" name="" id="check" class="rounded" onclick="strikeThrough(event)" ><input type="text" class="p-1" id="box" value= "${inp.value}" disabled/> <button class="red btn btn-light" onclick="del(event)">X</button><button class="green" onclick="update(event)">&#8635</button></li>`
    inp.value = ""
}
function click(event) {
    if (event.keyCode === 13) {
        add()
    }
}
inp.addEventListener('keydown', click);
function del(event) {
   event.target.parentNode.remove()
}
function update(event) {
    event.target.parentNode.childNodes[1].disabled=false
    event.target.parentNode.childNodes[1].focus()
}
function strikeThrough(event) {
    let span = event.target.nextElementSibling;
    if (event.target.checked) {
        span.style.textDecoration = 'line-through';
    } else {
        span.style.textDecoration = 'none';
    }
}