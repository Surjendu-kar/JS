function pokemon(){
    const settings = {
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET",
    };  
    $.ajax(settings).done(function(response){
    
        for(let i=0; i<response.results.length;i++){
          
            let html = `<div id='${i}' class="card">
            <h3>${response.results[i]["name"]}</h3>
            </div>`
            $(".pokemon").append(html); 
        }
        // console.log(response.next);
        $(window).on('scroll', function() {
            // console.log(settings["url"]);
            if($(window).scrollTop() >= $('.div').offset().top + $('.div').outerHeight() - window.innerHeight) {
            settings["url"] = response["next"]
            // console.log(settings["url"]);
            pokemon()
            }
          });
    });
}
pokemon()
