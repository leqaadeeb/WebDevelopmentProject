let displayElement = document.getElementById("display");

let buttons = document.getElementsByClassName("button");

for(let button of buttons) {
    button.addEventListener("click", handleClick)
}

function handleClick(event) {
    let clickedValue = event.target.textContent.trim()

    if(clickedValue == "C")
    {
        displayElement.textContent = "";
    }

    else if(clickedValue == "DEL")
    {
        displayElement.textContent = displayElement.textContent.slice(0, -1);
    }

    else if(clickedValue == "=")
    {
        if (displayElement.textContent.includes("+")) 
        {
            let total = 0;

            const numbers = displayElement.textContent.split("+");
            
            for(let number of numbers)
            {

                total += parseFloat(number);
            }

            displayElement.textContent = total;
        }

        else if (displayElement.textContent.includes("-")) 
        {
            const numbers = displayElement.textContent.split("-");

            let total = parseFloat(numbers[0]);
                
            for(let i = 1; i < numbers.length; i++)
            {

                total = total - parseFloat(numbers[i]);
            }

                displayElement.textContent = total;
        }

        else if (displayElement.textContent.includes("*")) 
        {
            let total = 1;

            const numbers = displayElement.textContent.split("*");
            
            for(let number of numbers)
            {

                total = total * parseFloat(number);
            }

            displayElement.textContent = total;
        }

        else if (displayElement.textContent.includes("/")) 
        {
            const numbers = displayElement.textContent.split("/");

            let total = parseFloat(numbers[0]);
                
            for(let i = 1; i < numbers.length; i++)
            {

                total = total / parseFloat(numbers[i]);
            }

            displayElement.textContent = total;
        }
    }

    else
    {
        displayElement.textContent = displayElement.textContent + clickedValue;
    }
}