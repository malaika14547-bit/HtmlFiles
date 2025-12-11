function handleshape()
{
    let box1=document.getElementById("box1")
    let box2=document.getElementById("box2")

if(box1 .style.display== "none")
{
    box1.style.display = "block";
    box2.style.display = "none";
}
else
{
    box2.style.display = "block";
    box1.style.display = "none";

}

}


setInterval(handleshape,600)
