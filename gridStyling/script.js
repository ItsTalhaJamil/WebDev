const button = document.getElementById("changeGrid");
const grid = document.getElementById("grid");
let columns =3;

button.addEventListener("click", function () {
    if (columns === 3) {
        grid.style.gridTemplateColumns = "1fr 1fr";
        columns = 2;
    } else if (columns === 2) {
        grid.style.gridTemplateColumns = "1fr 1fr 1fr";
        columns = 3;
    } else if (columns >= 4) {
        grid.style.gridTemplateColumns = "4fr 1fr";
    } else {
        grid.style.gridTemplateColumns = "4r 1fr";
    }
});