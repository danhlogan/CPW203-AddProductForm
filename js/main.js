var PlayerCharacter = (function () {
    function PlayerCharacter() {
    }
    return PlayerCharacter;
}());
window.onload = function () {
    var addBtnSub = document.querySelector("button#submit");
    var addBtnClear = document.querySelector("button#clear");
    addBtnSub.onclick = submitInfo;
    addBtnClear.onclick = clearAll;
};
function submitInfo() {
    if (isAllDataValid()) {
        var pageInfo = getPageInfo();
        displayInfo(pageInfo);
        clearForm();
    }
}
function isAllDataValid() {
    var flag = true;
    var vPlayerName = document.getElementById("playerName").value;
    var vCharName = document.getElementById("charName").value;
    var vcharLevel = parseInt(document.getElementById("charLevel").value);
    var vRace = document.getElementById("race").value;
    var vClass = document.getElementById("class").value;
    var vStr = document.getElementById("str").value;
    var vDex = document.getElementById("dex").value;
    var vCon = document.getElementById("con").value;
    var vInt = document.getElementById("int").value;
    var vWis = document.getElementById("wis").value;
    var vCharisma = document.getElementById("charisma").value;
    var spanList = document.querySelectorAll("span");
    for (var i = 0; i < spanList.length; i++) {
        spanList[i].innerText = "";
    }
    if (vPlayerName == "") {
        document.getElementById("nameSpan").innerText = "Please enter your name";
        document.getElementById("playerNameFS").style.width = "350px";
        flag = false;
    }
    if (vCharName == "") {
        document.getElementById("charNameSpan").innerText = "Please decide name";
        document.getElementById("charInfo").style.width = "500px";
        flag = false;
    }
    if (vcharLevel < 1 || vcharLevel > 20 || document.getElementById("charLevel").value == "") {
        document.getElementById("levelSpan").innerText = "Enter a number between 1 - 20";
        document.getElementById("charInfo").style.width = "500px";
        flag = false;
    }
    if (vRace == "Races") {
        document.getElementById("raceSpan").innerText = "Please choose a race";
        document.getElementById("charInfo").style.width = "500px";
        flag = false;
    }
    if (vClass == "Character Classes") {
        document.getElementById("classSpan").innerText = "Please choose a class";
        document.getElementById("charInfo").style.width = "500px";
        flag = false;
    }
    if (!document.querySelector('input[name="law"]:checked')) {
        document.getElementById("lawSpan").innerText = "Please choose your Ethics";
        document.getElementById("charInfo").style.width = "500px";
        flag = false;
    }
    if (!document.querySelector('input[name="align"]:checked')) {
        document.getElementById("alignSpan").innerText = "Please choose your Morals";
        document.getElementById("charInfo").style.width = "500px";
        flag = false;
    }
    if (vStr == "" || parseInt(vStr) < 8 || parseInt(vStr) > 20) {
        document.getElementById("strSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vDex == "" || parseInt(vDex) < 8 || parseInt(vDex) > 20) {
        document.getElementById("dexSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vCon == "" || parseInt(vCon) < 8 || parseInt(vCon) > 20) {
        document.getElementById("conSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vInt == "" || parseInt(vInt) < 8 || parseInt(vInt) > 20) {
        document.getElementById("intSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vWis == "" || parseInt(vWis) < 8 || parseInt(vWis) > 20) {
        document.getElementById("wisSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vCharisma == "" || parseInt(vCharisma) < 8 || parseInt(vCharisma) > 20) {
        document.getElementById("charismaSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    return flag;
}
function getPageInfo() {
    var form = new PlayerCharacter();
    form.playerName = document.getElementById("playerName").value;
    form.charName = document.getElementById("charName").value;
    form.charLevel = parseInt(document.getElementById("charLevel").value);
    form.race = document.getElementById("race").value;
    form.class = document.getElementById("class").value;
    form.law = document.querySelector('input[name="law"]:checked').value;
    form.align = document.querySelector('input[name="align"]:checked').value;
    form.str = parseInt(document.getElementById("str").value);
    form.dex = parseInt(document.getElementById("dex").value);
    form.con = parseInt(document.getElementById("con").value);
    form.int = parseInt(document.getElementById("int").value);
    form.wis = parseInt(document.getElementById("wis").value);
    form.charisma = parseInt(document.getElementById("charisma").value);
    return form;
}
function displayInfo(form) {
    document.querySelector("h3").innerText =
        "Welcome to the wonderful world of Dungeons and Dragons, " + form.playerName + "!";
    document.querySelector("p").innerHTML =
        "Your character, " + form.charName + ", is a level " + form.charLevel + " " + form.race + " "
            + form.class + ". Their nature is " + form.law + " " + form.align + "." +
            "<br>Your ability scores are:" +
            "<br> Strength - " + form.str +
            "<br> Dexterity - " + form.dex +
            "<br> Constitution - " + form.con +
            "<br> Intelligence - " + form.int +
            "<br> Wisdom - " + form.wis +
            "<br> Charisma - " + form.charisma;
}
function clearForm() {
    var spanList = document.querySelectorAll("span");
    for (var i = 0; i < spanList.length; i++) {
        spanList[i].innerText = "";
    }
    var numList = document.querySelectorAll('input[type="number"]');
    for (var i = 0; i < numList.length; i++) {
        numList[i].value = "";
    }
    var radioList = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radioList.length; i++) {
        radioList[i].checked = false;
    }
    var textList = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < textList.length; i++) {
        textList[i].value = "";
    }
    var selectList = document.querySelectorAll("option");
    for (var i = 0; i < selectList.length; i++) {
        selectList[i].selected = selectList[i].defaultSelected;
    }
    document.getElementById("charInfo").style.width = "320px";
    document.getElementById("abilScores").style.width = "200px";
}
function clearHeading() {
    document.querySelector("h3").innerText = "";
    document.querySelector("p").innerText = "";
}
function clearAll() {
    clearForm();
    clearHeading();
}
