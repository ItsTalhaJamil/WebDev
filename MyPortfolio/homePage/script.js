// load navbar
fetch("../Navbar/navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    // load navbar css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../NavBar/style/navbar.css";   
    document.head.appendChild(link);

    // load navbar js
    const script = document.createElement("script");
    script.src = "../NavBar/script/navbar.js";
    document.body.appendChild(script);
});


// load hero
fetch("../Hero-section/hero-section.html")
.then(res => res.text())
.then(data => {
    document.getElementById("hero").innerHTML = data;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Hero-section/style/hero-section.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "../Hero-section/script/hero.js";
    document.body.appendChild(script);
});


// load footer
fetch("../Footer/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Footer/style/footer.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "../Footer/script/footer.js";
    document.body.appendChild(script);
});