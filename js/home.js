// add money to the account

// Step-1: Add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
  .addEventListener('click', function (event) { 
    // Prevent page reload after submit
    event.preventDefault();

    // Step-2: Get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
  });
