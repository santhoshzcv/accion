	
function day(){
			var date = new Date(document.getElementById("date").value);
    			var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
      			document.write(days[date.getDay()]);
			}
