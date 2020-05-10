class PlayerCharacter
{
    playerName: string;
    charName: string;
    charLevel: number;
    race: string;
    class: string;
    law: string;
    align: string;
    str: number; 
    dex: number;
    con: number;
    int: number;
    wis: number;
    charisma: number;

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

// Validates form 
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
    form.charLevel = parseInt((<HTMLInputElement> document.getElementById("charLevel")).value)
    form.race = (<HTMLSelectElement> document.getElementById("race")).value
    form.class = (<HTMLSelectElement> document.getElementById("class")).value 
    form.law = (<HTMLInputElement> document.querySelector('input[name="law"]:checked')).value
    form.align = (<HTMLInputElement> document.querySelector('input[name="align"]:checked')).value
    form.str = parseInt((<HTMLInputElement> document.getElementById("str")).value)
    form.dex = parseInt((<HTMLInputElement> document.getElementById("dex")).value)
    form.con = parseInt((<HTMLInputElement> document.getElementById("con")).value)
    form.int = parseInt((<HTMLInputElement> document.getElementById("int")).value)
    form.wis = parseInt((<HTMLInputElement> document.getElementById("wis")).value)
    form.charisma = parseInt((<HTMLInputElement> document.getElementById("charisma")).value)

    return form
}

function displayInfo(pageInfo)
{
    
}

