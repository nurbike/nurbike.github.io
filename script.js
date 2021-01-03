function switchTheme() {
    let lightCSS = "style-light.css";
    let darkCSS = "style-dark.css";
    let lightButtonText = "Dark Mode";
    let darkButtonText = "Light Mode";

    let button = document.getElementById("switch-button");

    let links = document.getElementsByTagName("link");
    let themeLink = links[1];

    if(themeLink.href.includes(lightCSS)) {
        themeLink.href = darkCSS;
        button.innerText = darkButtonText;
    } else {
        themeLink.href = lightCSS;
        button.innerText = lightButtonText;
    }


}
