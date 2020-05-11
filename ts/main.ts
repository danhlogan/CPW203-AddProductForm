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
    let addBtnSub = <HTMLElement> document.querySelector("button#submit")
    let addBtnClear = <HTMLElement> document.querySelector("button#clear")
    addBtnSub.onclick = submitInfo
    addBtnClear.onclick = clearAll
}

// Main  
function submitInfo():void 
{
    if(isAllDataValid())
    {
        let pageInfo = getPageInfo()
        displayInfo(pageInfo)
        clearForm()
    }

}

// Validates form 
function isAllDataValid():boolean
{
        let flag = true;

        let vPlayerName = (<HTMLInputElement> document.getElementById("playerName")).value
        let vCharName = (<HTMLInputElement> document.getElementById("charName")).value
        let vcharLevel = parseInt((<HTMLInputElement> document.getElementById("charLevel")).value)
        let vRace = (<HTMLSelectElement> document.getElementById("race")).value
        let vClass = (<HTMLSelectElement> document.getElementById("class")).value
        let vStr = (<HTMLInputElement> document.getElementById("str")).value
        let vDex = (<HTMLInputElement> document.getElementById("dex")).value
        let vCon = (<HTMLInputElement> document.getElementById("con")).value
        let vInt = (<HTMLInputElement> document.getElementById("int")).value
        let vWis = (<HTMLInputElement> document.getElementById("wis")).value
        let vCharisma = (<HTMLInputElement> document.getElementById("charisma")).value
        
        var spanList = document.querySelectorAll("span")
        for(let i = 0; i < spanList.length; i++)
        {
            spanList[i].innerText = ""
        }

        if(vPlayerName == "")
        {
            document.getElementById("nameSpan").innerText = "Please enter your name"
            document.getElementById("playerNameFS").style.width = "350px"
            flag = false
        }

        if(vCharName == "")
        {
            document.getElementById("charNameSpan").innerText = "Please decide name"
            document.getElementById("charInfo").style.width = "500px"
            flag = false
        }

        if(vcharLevel < 1 || vcharLevel > 20 || document.getElementById("charLevel").value == "")
        {
            document.getElementById("levelSpan").innerText = "Enter a number between 1 - 20" 
            document.getElementById("charInfo").style.width = "500px"
            flag = false
        }

        if(vRace == "Races")
        {
            document.getElementById("raceSpan").innerText = "Please choose a race" 
            document.getElementById("charInfo").style.width = "500px"
            flag = false
        }

        if(vClass == "Character Classes")
        {
            document.getElementById("classSpan").innerText = "Please choose a class" 
            document.getElementById("charInfo").style.width = "500px"
            flag = false
        }

        if(!(<HTMLInputElement> document.querySelector('input[name="law"]:checked')))
        {
            document.getElementById("lawSpan").innerText = "Please choose your Ethics"
            document.getElementById("charInfo").style.width = "500px"
            flag = false
        }

        if(!(<HTMLInputElement> document.querySelector('input[name="align"]:checked')))
        {
            document.getElementById("alignSpan").innerText = "Please choose your Morals"
            document.getElementById("charInfo").style.width = "500px"
            flag = false 
        }

        if(vStr == "")
        {
            document.getElementById("strSpan").innerText = "Enter number 8 - 20"
            document.getElementById("abilScores").style.width = "350px"
            flag = false  
        }

        if(vDex == "")
        {
            document.getElementById("dexSpan").innerText = "Enter number 8 - 20"
            document.getElementById("abilScores").style.width = "350px"
            flag = false  
        }

        if(vCon == "")
        {
            document.getElementById("conSpan").innerText = "Enter number 8 - 20"
            document.getElementById("abilScores").style.width = "350px"
            flag = false  
        }

        if(vInt == "")
        {
            document.getElementById("intSpan").innerText = "Enter number 8 - 20"
            document.getElementById("abilScores").style.width = "350px"
            flag = false  
        }

        if(vWis == "")
        {
            document.getElementById("wisSpan").innerText = "Enter number 8 - 20"
            document.getElementById("abilScores").style.width = "350px"
            flag = false  
        }

        if(vCharisma == "")
        {
            document.getElementById("charismaSpan").innerText = "Enter number 8 - 20"
            document.getElementById("abilScores").style.width = "350px"
            flag = false  
        }

        return flag;
}

// Fetches form data
function getPageInfo():PlayerCharacter
{
    let form = new PlayerCharacter()

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

function displayInfo(form:PlayerCharacter):void
{
    document.querySelector("h3").innerText = 
    "Welcome to the wonderful world of Dungeons and Dragons, " + form.playerName + "!"

    document.querySelector("p").innerHTML =
    "Your character, " + form.charName + ", is a level " + form.charLevel + " " + form.race + " "
    + form.class + ". Their nature is " + form.law + " " + form.align + "." + 
    "<br>Your ability scores are:" + 
    "<br> Strength - " + form.str +
    "<br> Dexterity - " + form.dex +
    "<br> Constitution - " + form.con +
    "<br> Intelligence - " + form.int +
    "<br> Wisdom - " + form.wis +
    "<br> Charisma - " + form.charisma 
}

function clearForm():void
{
    var spanList = document.querySelectorAll("span")
    for(let i = 0; i < spanList.length; i++)
    {
        spanList[i].innerText = ""
    }

    var numList = document.querySelectorAll('input[type="number"]')
    for(let i = 0; i < numList.length; i++)
    {
        numList[i].value = ""
    }

    var radioList = document.querySelectorAll('input[type="radio"]')
    for(let i = 0; i < radioList.length; i++)
    {
        radioList[i].checked = false
    }

    var textList = document.querySelectorAll('input[type="text"]')
    for(let i = 0; i < textList.length; i++)
    {
        textList[i].value= ""
    }

    var selectList = document.querySelectorAll("option")
    for(let i = 0; i < selectList.length; i++)
    {
        selectList[i].selected = selectList[i].defaultSelected
    }
    
    document.getElementById("charInfo").style.width = "320px"
    document.getElementById("abilScores").style.width = "200px" 
}

function clearHeading():void
{
    document.querySelector("h3").innerText = ""
    document.querySelector("p").innerText = "" 
}

function clearAll():void
{
    clearForm()
    clearHeading()
}

