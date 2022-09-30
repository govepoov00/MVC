this.storage = sessionStorage; // shortcut to the sessionStorage object

self.storage.setItem( "loggedin", 0 );
self.storage.setItem( "loggeduser", "" );

var password = document.getElementById("pass1")
  , confirm_password = document.getElementById("pass2");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;



  $( "#register" ).on( "submit", function(e) {
      
   // const array = $(this).serializeArray();
   const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  var model= JSON.stringify(value); 
    //var model =  JSON.stringify($(this).serialize());
    //const array = $(this).serializeArray(); // Encodes the set of form elements as an array of names and values.
    //const model = '';
    //$.each(array, function () {
    //  model[this.name] = this.value || "";
    //});
    console.info("Model"+model);
    //var jsonData = {fname:fName,lname:lName,email:eMail,password:pAssword};
    //var jsonData = {Name:fName,Class:lName};
    // var model= JSON.stringify(jsonData); 
    //alert(dataString); return false;
 
    jQuery.support.cors = true;
    $.ajax({
      type: 'POST',
      //url: "php/register.php/registerDB",
      //url: "cs/Student/AddStudent",
      url: "/HelloWorld/Register/",
     // contentType: 'application/json; charset=utf-8',
     contentType: 'application/json',
     // dataType: 'json',
     // processData: false,
     data: model, 
     //data: {model},
      //data: {json: sdata },
      //data: jsonData,
      success: function () {
               
        $("#register-form").html("<div id='message'></div>");
        $("#message")
          .html("<h3>Registration Successfull!</h3>")
          .append("<p>Please continue to login.</p>")
          .hide()
          .fadeIn(2500, function () {
            $("#message")
          });
        
                 
      },
     

      statusCode: { // <- Add this property
        500: function() {
            $("#register-form").html("<div id='message'></div>");
            $("#message")
              .html("<h3>User already exists!</h3>")
              .append("<p>Please continue to login.</p>")
              .hide()
              .fadeIn(2500, function () {
                $("#message")
              });
            

        }
        
    }
      
    });
      
    e.preventDefault();
  });



  $( "#login" ).on( "submit", function(e) {
 
    //var dataString = $(this).serialize();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    var model= JSON.stringify(value);  
    //alert(dataString); return false;
 
    $.ajax({
      type: "POST",
      url: "/HelloWorld/Login/",
      contentType: 'application/json',
      data: model,
      success: function () {
        self.storage.setItem( "loggedin", 1 );
        this.$useremail = document.getElementById( "email" ).value; // Element that displays the subtotal charges
        self.storage.setItem( "loggeduser", this.$useremail );   
        $("#login-error").html("<div id='message'></div>");
        
        $("#message")
          .html("<h3>Login Successfull!</h3>")
          .append("<p>Navigating to home page</p>")
          .hide()
          .fadeIn(200, function () {
            $("#message")
          });
          
          window.location.href = "index.html";
                 
      },

      statusCode: { // <- Add this property
        500: function() {
            $("#login-error").html("<div id='message'></div>");
            $("#message")
              .html("<h3>Invalid Username and password combination</h3>")
              .append("<p>Please try to login again.</p>")
              .hide()
              .fadeIn(200, function () {
                $("#message")
              });
            

        }
    }
      
    });
 
    e.preventDefault();
  });



/*

const loginbtn = document.getElementById('login-btn')
const loginputs = document.getElementById('login')

loginbtn.addEventListener('click', () => {

    const email = (loginputs.elements["email"].value).trim();
    const pass = (loginputs.elements["pass"].value).trim();
    
    if( (email != "") && (pass != "") ) {
    alert(email+"Trying to login"+pass);
    }

})

const regbtn = document.getElementById('reg-btn')
const reginputs = document.getElementById('register')

regbtn.addEventListener('click', () => {

    const fname = (reginputs.elements["fname"].value).trim();
    const lname = (reginputs.elements["lname"].value).trim();
    const rmail = (reginputs.elements["rmail"].value).trim();
    const pass1 = (reginputs.elements["pass1"].value).trim();
    const pass2 = (reginputs.elements["pass2"].value).trim();
    const terms = reginputs.elements["terms"].checked;
    if((fname != "") && (lname != "") && (rmail != "") && (pass1 != "") && (pass2 != "") && (terms != false)) {
        if(pass1 == pass2){
            alert("Trying to Register");

            $.ajax({type: "GET", url: 'register.php',data: { fname:fname,lname:lname,rmail:rmail,pass1:pass1 }, success: function(data){
                console.log(data);
            }});
            
        }
        else
            alert("Passwords do not match")
    }
    
})*/
