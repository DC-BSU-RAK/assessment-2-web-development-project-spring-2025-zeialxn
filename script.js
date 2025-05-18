function showPage(id) { //used to switch to page content instead of navigating to new pages
  document.querySelectorAll('.page').forEach(page => { //selects all elements class w .page and loops through them
    page.classList.remove('active'); //remove the class active and  hide all elements w the class page
  });
  document.getElementById(id).classList.add('active'); //show elements with the said ids by adding active class 
}

function openPopup(id) { //opens a popup and make the bg blurred
  const popup = document.getElementById(id); //declare a constant variable and find the popup element
  popup.classList.add('show'); // makes the popup show or visible
  document.querySelector('main').classList.add('blur'); //adds blur to the main without affecting the popup

}

function closePopup(id) { //to close the pop up and remove the blur efffect
  const popup = document.getElementById(id); 
  popup.classList.remove('show');
  document.querySelector('main').classList.remove('blur');

}

function showTerms() { //to show the terms and condition pop up
  document.getElementById('termsPopup').classList.add('active'); //adds class active to the element w the said id
}

function acceptTerms() { //checks the checkboxes, hides the popup and removes the blur effect
  document.getElementById('agree').checked = true; 
  document.getElementById('termsPopup').classList.remove('show');
  document.querySelector('main').classList.remove('blur');
}

function clearForm() { //clears all the input and checkbox on the form
  document.querySelectorAll('.order-form input').forEach(input => input.value = ''); //finds all the input in the said id, for each input it will display the input value inside''
  document.getElementById('agree').checked = false; //unchecks the box
}

function submitForm() { //to show popup and add blur
  document.getElementById('thankyou').classList.add('show');
  document.querySelector('main').classList.add('blur');
}

function closeThankYou() { //to close the pop up remove the blur and clear the form
  document.getElementById('thankyou').classList.remove('show');
  document.querySelector('main').classList.remove('blur');
  clearForm();
}

function increase(id) { // order counter
  const counter = document.getElementById(id); //finds element w the given id and store it in the counter
  let value = parseInt(counter.textContent); //returns the text in the element and converts it into an integer which is stored in the value
  value++; //increase by 1
  counter.textContent = value; //updates the value
}

function decrease(id) { //similar to increase id except this is decrease
  const counter = document.getElementById(id);
  let value = parseInt(counter.textContent);
  if (value > 0) {
    value--;
    counter.textContent = value;
  }
}
