const toDOinput = document.querySelector("#form-container > .TodoInput > form > #todo-Text");
const toDoItems = document.getElementById("created-list");
const createdlistLI = document.querySelector("#created-list > ul > li")
const toDObtn = document.getElementById('todo-btn');
const forms = document.querySelector('form')
let inputvalue;

function makeTodo() {
    inputvalue = toDOinput.value;
    const createEle = document.createElement('li');
    createEle.textContent = toDOinput.value;
    toDoItems.appendChild(createEle);

    if (inputvalue === '') {
        Swal.fire({
            title: "خطا",
            text: "شما اول باید کار مورد نظر رو وارد کنید",
            icon: "error"
        });
        createEle.remove();
        return;
    }

    createEle.addEventListener('click', () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "! کارت با موفقیت انجام شد",
            showConfirmButton: false,
            timer: 1500
        });
        createEle.remove();

        let todos = JSON.parse(localStorage.getItem("TodoListItems")) || [];
        const taskIndex = todos.indexOf(createEle.textContent);
        if (taskIndex > -1) {
            todos.splice(taskIndex, 1);
            localStorage.setItem("TodoListItems", JSON.stringify(todos));
        }
    });

    let todos = JSON.parse(localStorage.getItem("TodoListItems")) || [];
    todos.push(inputvalue);
    localStorage.setItem("TodoListItems", JSON.stringify(todos));
    toDOinput.value = '';
}


toDObtn.addEventListener('click', makeTodo)

window.addEventListener('load', () => {
    let todos = JSON.parse(localStorage.getItem("TodoListItems")) || []
    todos.forEach(element => {
        const createEle = document.createElement('li')
        createEle.textContent = element
        toDoItems.appendChild(createEle)

        createEle.addEventListener('click', () => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "! کارت با موفقیت انجام شد",
                showConfirmButton: false,
                timer: 1500
            });
            createEle.remove();
            localStorage.removeItem("TodoListItems", todos)
        })
    });
});



const rainplay = document.querySelector("#rainplay")
const audioF = document.querySelector("#rainsound")
const dom = document.body;
const contents = document.querySelector('p')


rainplay.addEventListener('click', () => {
    if (audioF.paused) {
        audioF.play()
        rainplay.src = "assests/pause.png"
        // document.body.style.background = "url('assests/rainyBg.jfif')";
        // document.body.style.backgroundSize = 'cover'
        // document.body.style.backgroundRepeat = 'no-repeat'
        // contents.style.color = 'white'
    } else {
        audioF.pause()
        rainplay.src = "play-button-arrowhead.png"
        document.body.style.background = "#c8e0da"
        contents.style.color = 'black'
    }
});

// تعیین اینپوت و صداها با حلقه
const rangeInputs = document.querySelectorAll('#volControl')
rangeInputs.forEach(item => {
    item.addEventListener('input', (event) => {
        audios.forEach(audio => {
            audio.volume = event.target.value
        })
    })
})

const audios = document.querySelectorAll('audio')




const audioS = document.querySelector('#sunnysound')
const sunplay = document.querySelector("#sunplay")

sunplay.addEventListener('click', () => {
    if (audioS.paused) {
        audioS.play()
        sunplay.src = "pause.png"
    } else {
        audioS.pause()
        sunplay.src = "play-button-arrowhead.png"
    }
})


const keyplay = document.querySelector('#keyplay')
const audioT = document.querySelector("#keyboardSound")

keyplay.addEventListener('click', () => {
    if (audioT.paused) {
        audioT.play()
        keyplay.src = "pause.png"
    } else {
        audioT.pause()
        keyplay.src = "play-button-arrowhead.png"
    }
})


const turnplay = document.querySelector("#turnplay")
const audioFour = document.querySelector("#turnsound")

turnplay.addEventListener('click', () => {
    if (audioFour.paused) {
        audioFour.play()
        turnplay.src = 'pause.png'
    } else {
        audioFour.pause()
        turnplay.src = "play-button-arrowhead.png"
    }
})

const crackplay = document.querySelector("#crackplay")
const audioFifth = document.querySelector("#cracksound")

crackplay.addEventListener('click', () => {
    if (audioFifth.paused) {
        audioFifth.play()
        crackplay.src = 'pause.png'
    } else {
        audioFifth.pause()
        crackplay.src = "play-button-arrowhead.png"
    }
})


// darkmode
const btnTheme = document.querySelector(".toggleTheme")
const soundContainers = document.querySelectorAll("#sound-container")



btnTheme.addEventListener('click', () => {
    if (document.body.classList.contains("light-mode")) {
        document.body.classList.remove("light-mode")
        document.body.classList.add("dark-mode")
        btnTheme.textContent = "Lightmode"
        contents.style.color = 'white'
        btnTheme.style.backgroundColor = 'white'
        btnTheme.style.color = 'black'
        soundContainers.forEach(soundContainer => {
            soundContainer.style.backgroundColor = "#04aa6d"

        })
    } else {
        document.body.classList.remove("dark-mode")
        document.body.classList.add("light-mode")
        btnTheme.textContent = "Darkmode"
        contents.style.color = 'black'
        btnTheme.style.backgroundColor = '#14151a'
        btnTheme.style.color = 'white'
        soundContainers.forEach(soundContainer => {
            soundContainer.style.backgroundColor = "rgba(255, 255, 255, 0.5)"

        })
    }
})


let stopParent = document.getElementById('stop-container')

const StopAll = `

<div class = "stopAll">
<form>
<label>StopAll</label>
<input type = "checkbox" id = "stopCheckbox">
</form>
</div>
`

document.body.insertAdjacentHTML('beforeend', StopAll)

const checkBox = document.getElementById('stopCheckbox');



checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            location.reload()
        })
    }
})