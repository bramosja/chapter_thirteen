let messageEl = document.getElementById("message");



messageEl.addEventListener("keyup", () => {
    document.getElementById("article--class1").textContent = messageEl.value;
    document.getElementById("article--class2").textContent = messageEl.value;
});