(function( $ ) {
    $.Navbar = function( element ) {
        this.$element = $( element );
        this.init();
    };
    $.Navbar.prototype = {
        init: function() {
          // Properties
          this.cartPrefix = "Furniture-"; // Prefix string to be prepended to the cart's name in the session storage
            this.cartName = this.cartPrefix + "cart"; // Cart name in the session storage
            this.storage = sessionStorage; // shortcut to the sessionStorage object
          this.$navhtml = this.$element.find( "#nav-details-content" ); 
          //this.loggedin = "loggedin";
          // Method invocation
          this.navCreate();
        },

      // Public methods
        navCreate: function() {
          var loggedin = this.storage.getItem("loggedin");
        //var html ="<div class='container'>";
       var html = "<marquee direction='right' id='marq' behavior='alternate'>We Ship Within 24 Hours | Free Delivery On All Orders Over R550* |  Orders Delivered Within 2 - 4 Working Days</marquee>";
        
        html += "<nav class='navbar navbar-expand-lg navbar-light'>";
        html += "<ul class='navbar-brand' id='logo'>";
        html += "<a href='./index.html' alt='Logo' style='background-color: #294db1;'>";
        html += "<img src='../images/products/logo-icon.png' width='90' height='90'>";
        html += "</a>";
        html += "</ul>";
        html += "<ul class='navbar-nav ml-auto'>";
        html += "<li class='nav-item'>";
        html += "<a style='color:white;' class='nav-link' href='./index.html'>Home";
        html += "</a>";
        html += "</li>";
        html += "<li class='nav-item'>";
        html += "<a style='color:white;' class='nav-link' href='./product.html'>Products";
        html += "</a>";
        html += "</li>";
        
        html += "<li class='nav-item'>";
        html += "<a style='color:white;' class='nav-link' href='./about.html'>About Us</a>";
        html += "</li>";
        html += "<li class='nav-item'>";
        html += "<a style='color:white;' class='nav-link' href='./contact.html'>Contact</a>";
        html += "</li>";
        html += "<li class='nav-item'>";
        if(loggedin=='0' || loggedin ==null)
        {
        html += "<a style='color:white;' class='nav-link' href='./login.html'>Login/Register</a>";
        }
        else
        {
        html += "<a style='color:white;' class='nav-link' href='#' id='logoutuser'>Logout</a>";
        
        }
        html += "</li>";

       // html += "<li class='nav-item'>";
        //html += "<div id='nav-cart-count-container'>";
        //html += "<span id='nav-cart-count' aria-hidden='true' class='nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content'>"+this.getCartSize()+"</span>";
        //html += "<span class='nav-cart-icon nav-sprite'></span>";
       // html += "</div>";
       // html += "<a style='color:white;' class='nav-link' href='./cart.html'>Cart</a>";
       // html += "</li>";
       html += "<li class='nav-item'>";
        html += "<a href='../html/cart.html'>";
        
        html += "<div class='container' >";
        html += "<img src='../images/cart.png'>"
        if(this.getCartSize()<10){
        html += "<h5 class='cartsize'>"+this.getCartSize()+"</h5>";
        }
        else{
        html += "<h5 class='cartsize2'>"+this.getCartSize()+"</h5>";
        }
        html += "<span aria-hidden='true' class='nav-line-2'>Cart<span class='nav-icon nav-arrow'></span>";
       
        html += "</div>";
        
        html += "</a>";
        html += "</li>";


        html += "</ul>";
        html += "</nav>";
        //html += "</div>";  
        this.$navhtml[0].innerHTML = html; 
        if(loggedin=='1')
        {
          document.getElementById('logoutuser').onclick = function () {
            window.location.href = "login.html";
            return false;
        }
        }
        
  
      },

      getCartSize: function() {
        var self = this;
        var cartsize = 0;
        try {
          cartsize = self._toJSONObject( self.storage.getItem( self.cartName ) ).items.length;
        } catch (error) {
          cartsize = 0;
        }
        
        
        return cartsize;
        
    },

   
     /* Converts a JSON string to a JavaScript object
         * @param str String the JSON string
         * @returns obj Object the JavaScript object
         */
        
     _toJSONObject: function( str ) {
      var obj = JSON.parse( str );
      return obj;
  }

      

    };
    $(function() {
      var navbar = new $.Navbar( "#nav-details" );
  });

  
    
})( jQuery );