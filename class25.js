function handlelight()
{
 let bulblon = document.getElementById("bulbon");
 let bulboff =document.getElementById("bulboff");

 if(bulblon.style.display == "none")
 {
    bulblon.style.display = "block";
    bulboff.style.display = "none";
 }
 else
    {
    bulblon.style.display = "none";
    bulboff.style.display = "block";

    }
    

}