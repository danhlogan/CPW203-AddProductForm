var PlayerCharacter = (function () {
    function PlayerCharacter() {
    }
    return PlayerCharacter;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = submitInfo;
};
function submitInfo() {
    if (isAllDataValid()) {
        var pageInfo = getPageInfo();
        displayInfo(pageInfo);
    }
}
function isAllDataValid() {
    return true;
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
function displayInfo(pageInfo) {
}
