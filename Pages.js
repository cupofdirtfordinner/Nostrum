var Pages = [
    document.getElementById("Display"),
    document.getElementById("Select"),
    document.getElementById("Tools"),
    document.getElementById("Forum")
]
function Clear() {
    Pages[0].style.display = "none";
    Pages[1].style.display = "none";
    Pages[2].style.display = "none";
    Pages[3].style.display = "none";
}

function Display() {
    Clear(); 
    Pages[0].style.display = "block";
}
function Select() {
    Clear();
    Pages[1].style.display = "block";
}
function Tools() {
    Clear();
    Pages[2].style.display = "block";
}
function Forum() {
    Clear(); 
    Pages[3].style.display = "block";
}

Display()