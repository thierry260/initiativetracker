var sessie = [];
var initiativepoint;

// Anonymous function - entry point
(function () {
    // _ts returns new Library object that hold our selector. Ex: _ts('.theme')
    var _ts = function (params) {
        return new library(params);
    };
     
    var library = function (params) {
        /* Get all elements in the document that matches a specified selector(s),
        as a static NodeList object */
        var selector = document.querySelectorAll(params),
        count = 0;
        
        // Get NodeList object length
        this.length = selector.length;
         
        // Store NodeList objects in form array of objects for method chaining
        for (; count < this.length; count++) {
            this[count] = selector[count];
        }
         
        // Return as object
        return params;        
    };
 
    // Assign our _ts object to global window object.
    if(!window._ts) {
        window._ts = _ts;  

        // Extend the library object
		_ts.fn = library.prototype = 
		{
		    // This method hides the selected element(s)
		    hide: function () {
		        var len = this.length;
		        
		        // Here we simply loop through our object (this) and set the css to display none. 
		        while (len--) {
		            this[len].style.display = 'none';
		        }
		 
		        // If you want to chain methods, it's important to return this.
		        return this;
		    },

		    adding: function () {
		    	document.getElementById("output").innerHTML = sessie.join(", ");

				var chosen = document.getElementById(players).value;
				var nummer = document.getElementById(initiative).value;
				var n = nummer.length;
				if (n <= 1){
					nummer = "0" + nummer;
				}

				var thenew = "<tr><td>" + nummer + "</td><td>" + chosen + "</td><td><input type='checkbox'></td></tr>";

				var full = sessie.push(thenew);
				sessie.sort();
				printThis = " ";
				for(var i = 0; i < sessie.length; i++){
			        printThis += sessie[i];
			    }
			    document.getElementById('output').innerHTML = "<table>" + printThis + "</table>";
		 
		        // If you want to chain methods, it's important to return this.
		        return this;
		    },

		    removing: function () {

		    	$("#"+ players +" option:selected").remove();

		        return this;
		    },
		 
		    // This method shows the hidden, selected elements
		    show: function () {
		        var len = this.length;
		        
		        while (len--) {
		            this[len].style.display = 'block';
		        }
		 
		        return this;
		    } 
		};
    }
})();