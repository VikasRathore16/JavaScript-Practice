
function Calculate(){
    var length = parseFloat(document.getElementById('length').value);
    var width= parseFloat(document.getElementById('width').value);
    var area = width *length;
    var peri = 2*(length+width);
    document.getElementById("area").innerHTML = "Area of Rectangle is " + area +" sq. mtr.";
    document.getElementById("peri").innerHTML = "Perimeter of Rectangle is " + peri + "  mtr";
}

function Convert(){
    var hours = parseFloat(document.getElementById("ihours").value);
    if(document.getElementById("minute").checked){
        var minutes = hours * 60;
        document.getElementById("res").innerHTML= hours + " hours  =  " + minutes + " minutes";
        console.log(hours);
    }
    else{
        var seconds = hours * 60 * 60;
        document.getElementById("res").innerHTML= hours + " hours  =  " + seconds + " seconds";
        console.log(3);
    }
}
