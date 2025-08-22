const shownButton = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const equalTo = document.querySelector(".equal-to");

const allClear = document.querySelector(".all-clear");
const backSpace = document.querySelector(".backspace");

// -------------------------main function-------------------------------

function calculator(input) {
  if (input === "⌫") {

    updateDisplay(display.textContent.slice(0, -1));

  } else if (input === "AC") {

    updateDisplay("");

  } else if (input === "=") {

    try {

      let expression = display.textContent;

      expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1*0.01)"); //  % replaced

      expression = expression.replace(/(\d+)√(\d+)/g, (match, p1, p2) => `${p1}*Math.sqrt(${p2})`); // number.underroot replaced

      expression = expression.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)"); // underroot.number replaced


      updateDisplay(eval(expression));

    } catch {

        updateDisplay("Error");

    }

  }else {

    updateDisplay(display.textContent += input);

  }
}


//-----------------------------click handler--------------------------------



shownButton.forEach((button) => {
  button.addEventListener("click", function () {
    calculator(button.textContent);
  });
});


//-------------------------------keyboard handler--------------------------------


window.addEventListener("keydown",function(e){
    const keyBtn = document.querySelector(`.btn[data-key = "${e.key}"]`);

    if (keyBtn){

        calculator(keyBtn.textContent);
    }

});


//-------------------------display scroll------------------------------------


function updateDisplay(value) {
  display.textContent = value;
  display.scrollLeft = display.scrollWidth; // always scroll right
}


