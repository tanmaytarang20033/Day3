function addNumber(){
    console.log("---------------------------------");
    var OneNumber=parseInt(document.getElementById('numOne').value)
    var TwoNumber=parseInt(document.getElementById('numTwo').value)
    var addition = OneNumber + TwoNumber
    var output=`Output is ${addition}`
    document.getElementById('result').innerHTML=output
}

function subtractionNumber(){
    console.log("---------------------------------");
    var OneNumber=parseInt(document.getElementById('numOne').value)
    var TwoNumber=parseInt(document.getElementById('numTwo').value)
    var subtraction = OneNumber - TwoNumber
    var output=`Output is ${subtraction}`
    document.getElementById('result').innerHTML=output
}