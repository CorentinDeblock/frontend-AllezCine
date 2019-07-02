let cancelCookie = document.getElementById("cookie-refuse");
let okCookie = document.getElementById("cookie-accept");
let closecookie = document.getElementById("close-popup")

let target = document.getElementById("cookie-popup");

addElement = (element) => {
    element.classList.add("cookie-anim");
}

removeElement = (element) => {
    element.classList.remove("cookie-anim");
    element.classList.add("cookie-anim-down");
}

applyClick = (element) => {
    element.addEventListener("click",() => {
        removeElement(target);
    })
}

addElement(target);

applyClick(cancelCookie);
applyClick(okCookie);
applyClick(closecookie)