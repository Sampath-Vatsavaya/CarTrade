x={}
fetch("soldplayers.json")
.then(function(response){
	return response.json();
})
.then(function(z){
	
    for(y of z)
    {
        delete y["href"];
        delete y[""]
    }

});

