function handlelight()
{
    let bulbon=document.getElementById("bulbon")
    let bulboff=document.getElementById("bulboff")

    
if(bulbon.style.display== "none")
{
      bulbon.style.display = "block";
    bulboff.style.display = "none";

}
else
{
    bulboff.style.display = "block";
    bulbon.style.display = "none";
}

}

setInterval(handlelight, 500)


    



    
