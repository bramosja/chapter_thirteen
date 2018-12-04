
fly = "#flight";
mind = "#mindreading";
ray = "#xray";
let buttonFun = (call) => {
    const findDisabled = document.querySelector(call);

    let flightHandlerFunction = () => {
        findDisabled.classList.add("enabled");
        findDisabled.classList.remove("disabled");
    }

    flightHandlerFunction();
}

document.querySelector("#activate-flight").addEventListener("click", () => {
    
    buttonFun(fly)

})

document.querySelector("#activate-mindreading").addEventListener("click", () => {

    buttonFun(mind);

})

document.querySelector("#activate-xray").addEventListener("click", () => {


    buttonFun(ray);
        
})

document.querySelector("#activate-all").addEventListener("click", () => {

    buttonFun(fly);
    buttonFun(mind);
    buttonFun(ray);
   
})

document.querySelector("#deactivate-all").addEventListener("click", () => {

    let allSections = document.querySelectorAll("section");

    for(i = 0; i < allSections.length; i++){
        allSections[i].classList.add("disabled");
        allSections[i].classList.remove("enabled");
    }

})