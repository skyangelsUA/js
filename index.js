for (; ;) {
    
    console.log(`BOOM`)
}


function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (available > ordered) { 
    message =  "The order is accepted, our manager will contact you";
  } else if (available < ordered) { 
    message = "Your order is too large, there are not enough items in stock!";
  } else {
   available !== ordered
    message = "There are no products in the order!";
  }
  // Change code above this line
  return message;
}