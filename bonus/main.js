$(document).ready(function() {
	
	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET",
		success: function(datoRicevuto){
			var arrayRicevuto = datoRicevuto.response;
			console.log(arrayRicevuto);
			
			var source = $("#template").html();
			var template = Handlebars.compile(source);
			
			for(var i=0; i<arrayRicevuto.length; i++){
				var context = {link:arrayRicevuto[i].poster, title: arrayRicevuto[i].title, author: arrayRicevuto[i].author, year: arrayRicevuto[i].year, genre: arrayRicevuto[i].genre};
				var html = template(context);
				$(".cds-container").append(html);
			}	
				
		},
		error: function(stato){
			console.log("Errore " + stato);
		}
	});

	$("#pop").click(function () {
		$(".cd").each(function () {
			var val = $(this).find(".genre").text();
			if(val == "Pop"){
				$(this).addClass("block");
			}else{
				$(this).addClass("none");
				$(this).removeClass("block");
			}
		});
	});

	$("#rock").click(function () {
		$(".cd").each(function () {
			var val = $(this).find(".genre").text();
			if(val == "Rock"){
				$(this).addClass("block");
			}else{
				$(this).addClass("none");
				$(this).removeClass("block");
			}
		});
	});

	$("#metal").click(function () {
		$(".cd").each(function () {
			var val = $(this).find(".genre").text();
			if(val == "Metal"){
				$(this).addClass("block");
			}else{
				$(this).removeClass("block");
				$(this).addClass("none");
			}
		});
	});

	$("#jazz").click(function () {
		$(".cd").each(function () {
			// console.log($(this));
			var val = $(this).find(".genre").text();
			if(val == "Jazz"){
				$(this).addClass("block");
			} else{
				$(this).removeClass("block");
				$(this).addClass("none");
			}
		});
	});

	$("#tutti").click(function () {
		$(".cd").each(function () {
			$(this).removeClass("none");
			$(this).addClass("block");
		});
	});



});