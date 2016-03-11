$(document).ready(function(){
        $.getJSON("/all", function(data){
            for(var i = 0; i < data.length; i++){
                $("#results").append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].avgWeight + "</td><td>" + data[i].whatIwouldReallyCallIt + "</td></tr>" );
            }
        });


    $("#weightsort").on("click", function(){
        // get and log to the console data from the /weight endpoint
        $.getJSON("/weight", function(data){
            $("#results").empty();
            for(var i = 0; i < data.length; i++){
               $("results").append
            }

        });
        console.log("weight button clicked");
    });

    $("#namesort").on("click", function(){
        $.getJSON("/name", function(data){
            console.log(data);
        });
        console.log("name button clicked");
    });
})