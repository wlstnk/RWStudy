
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
    if(save)
    {
        if(Arr[Arr.length - 1] < save)
        {
            alert("더 작은 원반 위에 큰 원반을 올릴 수 없습니다.");
            savePosition.push(save);
            DrawScreen();
            save = null;

        }
        else
        {
            Arr.push(save);
            DrawScreen();
            save = null;
        }
    }
    else if(bisInit==false)
    {
        alert("초기화를 하지 않았습니다.");
    }
    else
    {
        savePosition = Arr;
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
    firstArr.push(6);
    firstArr.push(5);
    firstArr.push(4);
    firstArr.push(3);
    firstArr.push(2);
    firstArr.push(1);

    const element = document.querySelector(".first");
    DrawScreen();
 }

 function DrawScreen()
 {
    const firstElement = document.querySelector(".first");
    const secondElement = document.querySelector(".second");
    const thirdElement = document.querySelector(".third");

    firstElement.innerHTML="first";
    firstArr.forEach(function(i){
        firstElement.innerHTML += FindMatchInnerHTML(i);
    });

    secondElement.innerHTML="second";
    secondArr.forEach(function(i){
        secondElement.innerHTML += FindMatchInnerHTML(i);
    });

    thirdElement.innerHTML="third";
    thirdArr.forEach(function(i){
         thirdElement.innerHTML += FindMatchInnerHTML(i);
    });
 }

 function FindMatchInnerHTML(i)
 {
    switch(i){
        case 1:
            return "<p>⬛</p>";
        case 2:
            return "<p>🟪🟪🟪</p>";
        case 3:
            return "<p>🟦🟦🟦🟦🟦</p>";
        case 4:
            return "<p>🟩🟩🟩🟩🟩🟩🟩</p>";
        case 5:
            return "<p>🟨🟨🟨🟨🟨🟨🟨🟨🟨</p>";
        case 6:
            return "<p>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥</p>";
    }
    return;
 }