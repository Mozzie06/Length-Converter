window.onload = function() {

let feet    =document.getElementById("feet");

let meter   =document.getElementById("meter");

let inch    =document.getElementById("inches");

let cm      =document.getElementById("cm");

let yard    =document.getElementById("yards");

let km      =document.getElementById("km");

let mile    =document.getElementById("miles");

feet.oninput = function() {

    meter.value =  feet.value /3.2808; 

    inch.value =  feet.value *12;   

    cm.value    =  feet.value /0.032808; 

    yard.value  =  feet.value *0.33333;  

    km.value    =  feet.value /3280.8; 

    mile.value  =  feet.value *0.00018939;       

}

meter.oninput = function() {

    feet.value = meter.value *3.2808;

    inch.value = meter.value *39.370;  

    cm.value   = meter.value /0.01;

    yard.value = meter.value *1.0936; 

    km.value   = meter.value /1000;

    mile.value = meter.value *0.00062137;

}

inches.oninput = function() {

    feet.value = inches.value *0.083333;

    meter.value = inches.value /39.370;  

    cm.value = inches.value /0.39370;

    yard.value = inches.value *0.027778; 

    km.value = inches.value /39370;

    mile.value = inches.value *0.000015783;

}

cm.oninput = function() {

    feet.value = cm.value *0.032808;

    meter.value = cm.value /100;  

    inch.value = cm.value *0.39370;

    yard.value = cm.value *0.010936; 

    km.value = cm.value /100000 ;

    mile.value = cm.value *0.0000062137;

}

yards.oninput = function() {

    feet.value = yards.value *3;

    inch.value = yards.value *36;  

    cm.value = yards.value /0.010936;

    meter.value = yards.value /1.0936; 

    km.value = yards.value /1093.6;

    mile.value = yards.value *0.00056818;

}

km.oninput = function() {

    feet.value = km.value *3280.8;

    inch.value = km.value *39370;  

    cm.value = km.value *100000;

    yard.value = km.value *1093.6; 

    meter.value = km.value *1000;

    mile.value = km.value *0.62137;

}

miles.oninput = function() {

    feet.value = miles.value *5280;

    inch.value = miles.value *63360;  

    cm.value = miles.value /0.0000062137;

    yard.value = miles.value *1760; 

    km.value = miles.value /0.62137;

    meter.value = miles.value /0.00062137;

}

};
