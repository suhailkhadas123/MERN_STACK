let cart = [];

function addtoCart() {
  let btn = event.target;
  let row = btn.closest('.service-row');
  let name = row.querySelector('.service-name').textContent;
  let price = parseFloat(row.querySelector('.service-price').textContent.replace('₹',''));
  
  if (btn.textContent == 'Add Item') {
    cart.push({name, price});
    btn.textContent = 'Remove Item';
  } else {
    cart = cart.filter(i => i.name != name);
    btn.textContent = 'Add Item';
  }
  update();
}

function update() {
  let tbody = document.getElementById('cart-items');
  tbody.innerHTML = '';
  let tot = 0;
  let sno = 1;
  cart.forEach(i => {
    let tr = `<tr><td>${sno++}</td><td>${i.name}</td><td>₹${i.price}</td></tr>`;
    tbody.innerHTML += tr;
    tot += i.price;
  });
  document.getElementById('total-amount').textContent = `₹${tot}`;
}

function book(){
     event.preventDefault();
     const message= document.getElementById("book-section")
    if(cart.length ==0){
        
        message.innerHTML="<p>Please Add Service/Services in cart to Book</p>"
       alert("Please Add Service/Services in cart to Book")
    }
    else{
        message.innerHTML="<p>Waiting For Confirmation</p>";
        setTimeout(function booking(){
            
            message.innerHTML="<p>Booking Successfull</p>";
            alert("Booking Successfull");
        }, 3000)
    }
}