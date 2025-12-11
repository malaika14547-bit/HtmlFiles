function handlebox ()
{    
  let box1=document.getElementById("box1")
  let box2=document.getElementById("box2")

  if(box1.style.backgroundColor == "red")
  {
    box1.style.backgroundColor = "blue"
  }
  else{
    box1.style.backgroundColor = "red"
  }

  if(box2.style.backgroundColor == "blue")
    {
      box2.style.backgroundColor = "red"
    }
    else{
    box2.style.backgroundColor = "blue"
  }


}

  setInterval(handlebox,500)

  function handlecircle ()
  {
      let circle1 = document.getElementById("car1");
      let circle2 = document.getElementById("car2");

      if(circle1.style.backgroundColor == "blue")
      {
        circle1.style.backgroundColor = "red";
      }
      else{
        circle1.style.backgroundColor ="blue";
      }

      if(circle2.style.backgroundColor == "red")
      {
        circle2.style.backgroundColor ="blue";
      }
      else{
        circle2.style.backgroundColor ="red";
      }

  }

setInterval(handlecircle,500)
