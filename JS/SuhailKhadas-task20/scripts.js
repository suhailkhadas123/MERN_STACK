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
     const message= document.getElementById("book-section");
     const name = document.getElementById("input-name").value;
     const email = document.getElementById("input-email").value;
     const phone = document.getElementById("input-number").value;
     const total = document.getElementById("total-amount").textContent;

    if(cart.length == 0){
        message.innerHTML="<p>Please Add Service/Services in cart to Book</p>";
        alert("Please Add Service/Services in cart to Book");
    }
    else{
      if(name.length == 0 || email.length == 0 || phone.length == 0){
        message.innerHTML="<p>Enter Details</p>";
        alert("Enter Details");
      }else{
        
        message.innerHTML="<p>Waiting For Confirmation</p>";

        

        // sendBookingEmail(name, email, phone, cart, total);
      }
    }
}



        (function() {
           
            emailjs.init({
              publicKey: "yW7xU8iVc0tC15p9k",
            });
        })();
   window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_2oufhxf', 'template_yl5h0bv', this)
                    .then(() => {
                       setTimeout(function booking(){
          ;
            alert("Thank you For Booking the Service We will get back to you soon!");
        }, 3000);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }








