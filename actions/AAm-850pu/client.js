function(properties, context) {
    
	var idStrings = properties.glasselementid
    var idArray = idStrings.toString().split(',');
    
    idArray.forEach((element)=> {
        document.getElementById(element.replace(/\s/g, '')).classList.remove(properties.glassname);
    })

}