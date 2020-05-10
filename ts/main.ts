class PlayerCharacter
{
    playerName: string;
    charName: string;
    class: string;
    intScore: number;
    test: boolean;
}

// let PlayerChar= new PlayerCharacter()

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

function isAllDataValid()
{
    return true;
}

function getPageInfo()
{

}

function displayInfo()
{

}

