class PlayerCharacter
{
    playerName: string;
    charName: string;
    class: string;
    intScore: number;
    test: boolean;
}

window.onload = function()
{
    let addBtn = <HTMLElement> document.querySelector("input[type=button]")
    addBtn.onclick = submitInfo
}

// Main  
function submitInfo() 
{
    if(isAllDataValid())
    {
        let pageInfo = getPageInfo()
        displayInfo(pageInfo)
    }

}

// Validates form data
function isAllDataValid()
{
    return true;
}

// Fetches form data
function getPageInfo():PlayerCharacter
{
    let form  = new PlayerCharacter()
    form.playerName = (<HTMLInputElement> document.getElementById("playerName")).value
    form.charName = (<HTMLInputElement> document.getElementById("charName")).value
}

function displayInfo()
{

}

