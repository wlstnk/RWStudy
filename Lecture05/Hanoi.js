
var bclickOnce=false;
function OnClickBtn_Init()
{
    console.log("InitBtnClick");
    const element = document.querySelector(".first");
    if(bclickOnce==false)
    {
        element.innerHTML+='<p>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥</p><p>🟨🟨🟨🟨🟨🟨🟨🟨🟨</p><p>🟩🟩🟩🟩🟩🟩🟩</p><p>🟦🟦🟦🟦🟦</p><p>🟪🟪🟪</p><p>⬛</p>';
        bclickOnce=true;
    }
 }