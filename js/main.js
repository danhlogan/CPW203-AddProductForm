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
}
function displayInfo() {
}
