//prevent input of negative values or the "e" exponential as it is
//not needed in a grade calculator
document.onkeypress = function(e){
  e=e||window.event;
  var charCode = e.which || e.keyCode;
  var charStr = String.fromCharCode(charCode);
  if (charStr == "-" || charStr == "e")
  {
    return false;
  }
}

function a1CalculateTotal(){
  var a1mark = document.getElementById("A1mark").value;
  var a1total = document.getElementById("A1total").value;
  var a1output = document.getElementById("a1");
  var a1grade = document.getElementById("a1grade");
  if (a1total > 0)
  {
    var percent = ((a1mark/a1total)*100);
    a1output.innerHTML = percent.toFixed(2) + "%";
    a1grade.innerHTML = giveGrade(percent);
    return percent;
  }
  //removes old percentage when changing values
  clearOldTotal(a1total, a1output, a1grade);
}

function a2CalculateTotal(){
  var a2mark = document.getElementById("A2mark").value;
  var a2total = document.getElementById("A2total").value;
  var a2output = document.getElementById("a2");
  var a2grade = document.getElementById("a2grade");
  if (a2total > 0)
  {
    var percent = ((a2mark/a2total)*100);
    a2output.innerHTML = percent.toFixed(2) + "%";
    a2grade.innerHTML = giveGrade(percent);
    return percent;
  }
  //removes old percentage when changing values
  clearOldTotal(a2total, a2output, a2grade);
}

function a3CalculateTotal(){
  var a3mark = document.getElementById("A3mark").value;
  var a3total = document.getElementById("A3total").value;
  var a3output = document.getElementById("a3");
  var a3grade = document.getElementById("a3grade");

  if (a3total > 0)
  {
    var percent = ((a3mark/a3total)*100);
    a3output.innerHTML = percent.toFixed(2) + "%";
    a3grade.innerHTML = giveGrade(percent);
    return percent
  }
  //removes old percentage when changing values
  clearOldTotal(a3total, a3output, a3grade);
}

function a4CalculateTotal(){
  var a4mark = document.getElementById("A4mark").value;
  var a4total = document.getElementById("A4total").value;
  var a4output = document.getElementById("a4");
  var a4grade = document.getElementById("a4grade");
  if (a4total > 0)
  {
    var percent = ((a4mark/a4total)*100);
    a4output.innerHTML = percent.toFixed(2) + "%";
    a4grade.innerHTML = giveGrade(percent);
    return percent;
  }
  //removes old percentage when changing values
  clearOldTotal(a4total, a4output, a4grade);
}

function calculateMean(){
  var total = parseInt(a1CalculateTotal(), 10) + parseInt(a2CalculateTotal(), 10)
  + parseInt(a3CalculateTotal(), 10) + parseInt(a4CalculateTotal(), 10);
  var output = document.getElementById("button-output");
  var grade = document.getElementById("total-grade");
  if (checkForBlanks())
  {
    output.innerHTML = "Mean: " + (total/4).toFixed(2) + "%";
    grade.innerHTML = giveGrade((total/4).toFixed(2));
  }
}

function calculateAverage(){
  var a1mark = document.getElementById("A1mark").value;
  var a2mark = document.getElementById("A2mark").value;
  var a3mark = document.getElementById("A3mark").value;
  var a4mark = document.getElementById("A4mark").value;
  var a1total = document.getElementById("A1total").value;
  var a2total = document.getElementById("A2total").value;
  var a3total = document.getElementById("A3total").value;
  var a4total = document.getElementById("A4total").value;
  var output = document.getElementById("button-output");
  var grade = document.getElementById("total-grade");
  var marks = a1mark+a2mark+a3mark+a4mark;
  var totals = a1total+a2total+a3total+a4total;
  if (checkForBlanks())
  {
    output.innerHTML = "Average: " + ((marks/totals)*100).toFixed(2) + "%";
    grade.innerHTML = giveGrade(((marks/totals)*100).toFixed(2));
  }
}

//manages warning message and dictates whether or not to make a calculation
//depending on if valid input is present
function checkForBlanks(){
  var warning = document.getElementById("warning");
  var output = document.getElementById("button-output");
  var grade = document.getElementById("total-grade");
  if (document.getElementById("A1mark").value == "" ||
      document.getElementById("A1total").value == "" ||
      document.getElementById("A2mark").value == "" ||
      document.getElementById("A2total").value == "" ||
      document.getElementById("A3mark").value == "" ||
      document.getElementById("A3total").value == "" ||
      document.getElementById("A4mark").value == "" ||
      document.getElementById("A4total").value == "" ||
      document.getElementById("A1total").value == 0 ||
      document.getElementById("A2total").value == 0 ||
      document.getElementById("A3total").value == 0 ||
      document.getElementById("A4total").value == 0)
  {
    //warning message is already present and button is pressed again
    if(warning.className=="warningActive" || warning.className == "warningFlash")
    {
      warning.className="warningActive";
      setTimeout(function()
      {
        warning.className=("warningFlash");
      }, 10)
      output.innerHTML = "";
      grade.innerHTML = "";
      return false;
    }
    else
    {
      warning.className = "warningActive";
      output.innerHTML = "";
      grade.innerHTML = "";
      return false;
    }
  }
  else
  {
    warning.className = "warning"
    return true;
  }
}

//removed old calculated percentage when input fields change
function clearOldTotal(flag, output, grade){
  if (flag == "" && output.innerHTML != "")
  {
    output.innerHTML = "";
    grade.innerHTML = "";
  }
}

function giveGrade(prct){
  var p = parseInt(prct, 10);
  if (p >= 90){
    return "A+";}
  else if (p < 90 && p >= 85){
    return "A";}
  else if (p < 85 && p >= 80){
    return "A-";}
  else if (p < 80 && p >= 77){
    return "B+";}
  else if (p < 77 && p >= 73){
    return "B";}
  else if (p < 73 && p >= 70){
    return "B-";}
  else  if (p < 70 && p >= 67){
    return "C+";}
  else if (p < 67 && p >= 63){
    return "C";}
  else if (p < 63 && p >= 60){
    return "C-";}
  else if (p < 60 && p >= 57){
    return "D+";}
  else if (p < 57 && p >= 53){
    return "D";}
  else if (p < 53 && p >= 50){
    return "D-";}
  else if (p < 50){
    return "F";}
}
