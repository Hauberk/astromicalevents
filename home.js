var hidden_button = document.getElementById("hidden_click");
function opennav()
				{
					var menu_visible = document.getElementById("menu_after_button_click_js");
					
					if ((menu_visible.style.display === "block"))
					{
						menu_visible.style.display = "none";	
						
						
					}
					else
					{
						menu_visible.style.display = "block";
					}
					
				}
				
var countDownDate = new Date("Dec 26, 2019 07:12:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "<p style = 'color:#b8c6ff;' >Time left for Annular Solar Eclipse:</p>" 
  + "" +"<span style='color:red; font-size:18px;'>"+ days +"</span>"+ " " +"<span style='color:#b8c6ff;'>"+ "days " +"</span>"+ "<span style='color:red; font-size:18px;'>"+ hours +"</span>"+
  " " + "<span style='color:#b8c6ff;'>"+"hours "+"</span>"  + "<span style='color:red; font-size:18px;'>"+ minutes +"</span>"+ " " + 
  "<span style='color:#b8c6ff;'>"+"minutes "+"</span>" + "<span style='color:red; font-size:18px;'>"+seconds +"</span>"+ " " + "<span style='color:#b8c6ff;'>"+"seconds "+"</span>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var slideIndex = 0;
showSlides();
				
	function showSlides()
	{
		var i;
		var slides = document.getElementsByClassName("image_container");
		
		for (i=0; i< slides.length; i++)
		{
			slides[i].style.display = "none";
		}
		slideIndex++;
		if(slideIndex > slides.length)
		{
			slideIndex = 1;
		}
		slides[slideIndex - 1].style.display = "block";
		setTimeout(showSlides, 3000);
	}
				