
var firstArr = [];
var secondArr = [];
var thirdArr = [];

var save;
var savePosition;
var bisSaved = false;
var bisInit = false;
function OnClickFirst(Arr,Position)
{
    console.log(savePosition,Position);
    if(bisSaved)
    {
        Arr.push(save);
        DrawScreen();
        bisSaved = false;
    }
    else if(bisInit==false)
    {
        alert("초기화를 하지 않았습니다.");
    }
    else
    {
        savePosition = Position;
        bisSaved=true;
        save=Arr.pop();
        DrawScreen();
    }
}
 var bclickOnce = false;
 function Init()
{
    bisInit = true;
    save = null;
    savePosition = null;
    bisSaved = false;
    
    firstArr = [];
    secondArr = [];
    thirdArr = [];
    firstArr.push("<p>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥</p>");
    firstArr.push("<p>🟨🟨🟨🟨🟨🟨🟨🟨🟨</p>");
    firstArr.push("<p>🟩🟩🟩🟩🟩🟩🟩</p>");
    firstArr.push("<p>🟦🟦🟦🟦🟦</p>");
    firstArr.push("<p>🟪🟪🟪</p>");
    firstArr.push("<p>⬛</p>");

    const element = document.querySelector(".first");
    DrawScreen();
 }

 function DrawScreen()
 {
    const firstElement = document.querySelector(".first");
    const secondElement = document.querySelector(".second");
    const thirdElement = document.querySelector(".third");

    // firstElement.innerHTML="first";
    // firstArr.forEach(function(i){
    //     firstElement.innerHTML += i;
    // });
    
    firstArr.sort((x,y)=>x.length-y.length);
    secondElement.innerHTML="first";
    secondArr.forEach(function(i){
        secondElement.innerHTML += i;
    });


    secondElement.innerHTML="second";
    secondArr.forEach(function(i){
        secondElement.innerHTML += i;
    });

    thirdElement.innerHTML="second";
    thirdArr.forEach(function(i){
         thirdElement.innerHTML += i;
    });
 }