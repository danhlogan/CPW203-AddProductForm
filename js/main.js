var PlayerCharacter = (function () {
    function PlayerCharacter() {
    }
    return PlayerCharacter;
}());
window.onload = function () {
    var addBtn = document.querySelector("button");
    addBtn.onclick = submitInfo;
};
function submitInfo() {
    if (isAllDataValid()) {
        var pageInfo = getPageInfo();
        displayInfo(pageInfo);
    }
    if (!isAllDataValid()) {
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
    if (vStr == "") {
        document.getElementById("strSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vDex == "") {
        document.getElementById("dexSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vCon == "") {
        document.getElementById("conSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vInt == "") {
        document.getElementById("intSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vWis == "") {
        document.getElementById("wisSpan").innerText = "Enter number 8 - 20";
        document.getElementById("abilScores").style.width = "350px";
        flag = false;
    }
    if (vCharisma == "") {
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
}
