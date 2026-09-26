let form =document.getElementById("orderForm");
 
let username = document.getElementById("username"); 

let password = document.getElementById("password");
 
 let phone = document.getElementById("phone"); 

 let order = document.getElementById("order");

 let welcome = document.getElementById("welcome"); 

 let savedOrder = document.getElementById("savedOrder");
  
 let savedUsername = document.getElementById("savedUsername");




 form.addEventListener ("submit", functionevent)

     // Prevent page refresh 
      event.preventDefault();



      //

      let usernameValue = username.value;

      let passwordValue = password.value;

      let phoneValue = phone.value;

      let orderValue = order.value;


      //
      let usernameRegex = /^\S+$/; 
      let passwordRegex = /^(?=.*\d).{8,}$/;
     let phoneRegex = /^07\d{8}$/;

     //

     if (!usernameRegex.test(usernamevalue)) {
        alert("Username must not be empty or contain spaces.")
        return;
     }


     if(!passwordRegex.test(passwordvalue)) {

        alert("Password must be at least 8 characters and contain at least one number.")

        return;
     }



     if(!phoneRegex.test(phonevalue)) {

        alert("Phone must be exactly 10 digits and start with 07.")

        return;
     }


     if (ordervalue === "") { 

        alert("Please select an order.");

     return;
     }


     welcome.textContent = "welcome," + usernamevalue;

       
     localStorage.setItem("order ", orderValue);
      

     sessionStorage.setItem("username ", usernameValue);



     // Get data from Local Storage

     let storeorder =localStorage.getItem("order");



     // Get data from Session Storage

      let storedUsername = sessionStorage.getItem("username");


      // Display saved data


       savedOrder.textContent = "Saved Order: " + storedOrder;


      savedUsername.textContent = "Saved Username: " + storedUsername;
    
    





