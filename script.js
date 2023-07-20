let button = document.querySelectorAll("button");
let input = document.getElementById("input");
let theExpression = "";
for (let item of button) 
{
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") 
    {
      buttonText = "*";
      theExpression += buttonText;
      input.value = theExpression;
    } 
    else if (buttonText == "=") 
    {
      input.value = eval(theExpression);
    } 
    else if (buttonText == "Clear") 
    {
      theExpression = "";
      input.value = "";
    }
    else 
    {
      theExpression += buttonText;
      input.value = theExpression;
    }
  }
  );
}
