$(document).ready(function(){
        $.getJSON("/all", function(data){
            for(var i = 0; i < data.length; i++){
                $("#results tbody").append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].avgWeight + "</td><td>" + data[i].whatIwouldReallyCallIt + "</td></tr>" );
            }
        });


    $("button.sort").on("click", function(){
        // get and log to the console data from the /weight endpoint
        $.getJSON("/" + $(this).val(), function(data){
            $("#results tbody").empty();
            for(var i = 0; i < data.length; i++){
               var newTr = "<tr>";
                newTr += "<td>" + data[i].name + "</td>";
                newTr += "<td>" + data[i].numlegs + "</td>";
                newTr += "<td>" + data[i].class + "</td>";
                newTr += "<td>" + data[i].avgWeight + "</td>";
                newTr += "<td>" + data[i].whatIwouldReallyCallIt + "</td>";
                newTr += "</tr>";
                $("#results tbody").append(newTr);
            }

        });
        console.log("weight button clicked");
    });

})