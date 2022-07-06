function(instance, properties, context) {

    var cssNoBreakLine = properties.cssProperties.replace(/(\r\n|\n|\r)/gm, "");
    var cssNoSpace = cssNoBreakLine.replace(/\s+/g, ' ').trim()
    
    
    bevelCSS = `.`+properties.bevelname+` {

    ${cssNoSpace}

    }`
    
    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = bevelCSS
    
    document.getElementsByTagName('head')[0].appendChild(style);
    
    var idStrings = properties.bevelelementid
    var idArray = idStrings.toString().split(',');
    
    idArray.forEach((element)=> {
        document.getElementById(element.replace(/\s/g, '')).className += ' '+properties.bevelname+'';
    })
    
}