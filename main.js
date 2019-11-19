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


});