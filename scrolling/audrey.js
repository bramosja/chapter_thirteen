const audrey = document.getElementById("audrey");





window.addEventListener("scroll", () => {
    let size = window.scrollY;
    console.log(size);
    let sizeW = (size) / 3;
    console.log(sizeW)
    audrey.style.width =  `${sizeW}px`;
    audrey.style.minWidth = "50px";

    let sizeY = (size) / 4;
    audrey.style.height = `${sizeY}px`;
    audrey.style.minHeight = "100px";
});
