// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

function intro() {
    const textcontainer = document.getElementById("container");

    let hue = 0;

    setInterval(() => {
        hue = (hue + 1) % 360;
        const color = `hsl(${hue}, 100%, 50%)`;
        textcontainer.style.color = color;
    }, 50);
}