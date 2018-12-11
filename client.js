//display value of state list option in ownership input
function stateSelect() {
    var stateList = document.getElementById("stateList");
    document.getElementById("ownership").value = stateList.options[stateList.selectedIndex].value;
}

//change the display of the main page to none and the about page to block
function aboutPage() {
    var mainPage = document.getElementById("mainPage");
    var aboutPage = document.getElementById("aboutPage");
    mainPage.style.display = "none";
    aboutPage.style.display = "block";
}
