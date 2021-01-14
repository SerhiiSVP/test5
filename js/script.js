

let navUl = document.querySelector("#nav-ul");
		let check = document.querySelector("#check");

		navUl.addEventListener("click", ()=> {
		    check.checked = check.checked == true ? false : true;
		});





	

$(function () {
	$(window).scroll(function() {
	    $('.client__title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});
	
	$(window).scroll(function() {
	    $('.why__title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.build__title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.buttons').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__bounceIn");
	        }
	    });
	});
})











