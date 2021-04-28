const DISTANCE = 80;

window.onscroll = function() {scroll()};

var style = getComputedStyle(document.body);

function scroll() {
    
    if (document.body.scrollTop > DISTANCE || document.documentElement.scrollTop > DISTANCE) {
    
        document.getElementById("nav").style.padding = "5px 10px";
        document.getElementById("nav").style.backgroundColor = style.getPropertyValue('--header-background-dark');
        document.getElementById("title").style.fontSize = style.getPropertyValue('--header-fontsize-mid');
        
        var eles = document.getElementsByTagName('a');
        
        for (var i = 0; i < eles.length; i++){
        
            eles[i].style.color = style.getPropertyValue('--header-foreground-light');
        
        }
        
    } else {
    
        document.getElementById("nav").style.padding = "30px 10px";
        document.getElementById("nav").style.backgroundColor = style.getPropertyValue('--header-background-light');
        document.getElementById("title").style.fontSize = style.getPropertyValue('--header-fontsize-big');
        
        var eles = document.getElementsByTagName('a');
        
        for (var i = 0; i < eles.length; i++){
        
            eles[i].style.color = style.getPropertyValue('--header-foreground-dark');
        
        }
    
    }
    
}