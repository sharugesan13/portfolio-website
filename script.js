document.body.style.transition = "background 0.5s";
document.addEventListener("keydown", function (event) {
    if (event.key === "d") {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === "black" ? "#f4f4f4" : "black";
    }
});
