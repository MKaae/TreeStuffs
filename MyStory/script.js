const scene11 = {
    title: "Seding in squad.",
    text: /*html*/`
    `,
    choices: []
}

const scene10 = {
    title: "Going in alone.",
    text: /*html*/`
    `,
    choices: []
}

const scene9 = {
    title: "Starting assault",
    text: /*html*/`
    `,
    choices: []
}

const scene8 = {
    title: "Diplomacy 4",
    text: /*html*/`
    <p>
    Lets send in another squad but warn first of no aggression.
    </p>
    `,
    choices: [
        {
            name: "Yes.",
            node: scene11
        },
        {
            name: "No.",
            node: scene10
        }
    ]
}

const scene7 = {
    title: "Diplomacy 3",
    text: /*html*/`
    <p>
    Are you sure you want to go alone?
    </p>
    `,
    choices: [
        {
            name: "Yes.",
            node: scene10
            },
            {
            name: "No.",
            node: scene8
            }
    ]
}

const scene6 = {
    title: "Diplomacy 2",
    text: /*html*/`
    <p>
    Should we try a diplimatic solution?    
    </p>
    `,
    choices: [
        {
            name: "Yes.",
            node: scene7
        }
    ]
}

const scene5 = {
    title: "Casual 2",
    text: /*html*/`
    <p>
    Should we start the attack? 
    </p>
    `,
    choices: [
        {
            name: "Yes.",
            node: scene9
            },
            {
            name: "No.",
            node: scene6
            }
    ]
}

const scene4 = {
    title: "Casual 1",
    text: /*html*/`
    <p>
    Waiting is not an option we have our whole fleet here. Start asault?
    </p>
    `,
    choices: [
        {
            name: "Yes.",
            node: scene5
        },
        {
            name: "No.",
            node: scene6
        }
    ]
}

const scene3 = {
    title: "Emotional 1",
    text: /*html*/`
    <p>
        I think you are being a bit aggresive, is it clouding your judgement?
    </p>
    `,
    choices: [
        {
            name: "Yes.",
            node: scene6
        },
        {
            name: "No.",
            node: scene5
        }
    ]
}

const scene2 = {
    title: "Diplomacy 1",
    text: /*html*/`
    <p>
        Do you want to go alone on this diplomatic mission or what?
    </p>
    <p>
        Make a choice in what direction you want to approach this.
    </p>`,
    choices: [
        {
        name: "Yes.",
        node: scene7
        },
        {
        name: "No.",
        node: scene8
        }
    ]
}
const scene1 = {
    title: "Historien begynder",
    text: /*html*/`
    <p>
    You are at the step of an invasion talking with the general.</p>
    <p>
    Make a choice in what direction you want to approach this.
    </p>`,
    choices: [
        {
        name: "We should try and talk with them war should be the last option.",
        node: scene2
        },
        {
        name: "They killed our scouts. None of those animals deserve to live after what they did.",
        node: scene3
        },
        {   
        name: "How about we just wait out and see what happens. Like back in QZ3 that was a blast.",
        node: scene4
        }
    ]
}

// function conenctNodes(){
//     scene1.choices[0].node = scene2;
//     scene1.choices[0].node = scene3;
//     scene1.choices[0].node = scene4;
// }

let currentScene;

start();

function start() {
    showScene(scene1);
    registerButtonClick();
    currentScene = scene1;
}


function showScene(scene) {

    const html = /*html*/`<div class="scene">    
    <h2>${scene.title}</h2>
    <div class="text">
    ${scene.text}
    </div>
    <div class="choices">
    ${scene.choices.map((choice, i) => `<button id="btn-${i}">${choice.name}</button>`).join(" ")}
    </div>
    </div>
    `

    document.querySelector("main").insertAdjacentHTML("beforeend", html);
}

function registerButtonClick(){
    document.querySelector("main").addEventListener('click', userClicked);
}

function userClicked(event){
    const target = event.target;
    if(target.tagName === "BUTTON"){
        buttonClicked(target);
    }
}

function buttonClicked(button){
    //remove buttons
    //find next scene show related to button
    //show next scene
    button.parentElement.remove();
    const index = Number(button.id.substring(4));
    const choices = currentScene.choices[index];
    
    currentScene = choices.node;

    showScene(currentScene);
}