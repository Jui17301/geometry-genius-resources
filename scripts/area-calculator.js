
// use Normal Function for Triangle:
function calculateTriangleArea(){
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value ;
  const base = parseFloat(baseValueText);

  const heightField = document.getElementById("triangle-height");
  const heightValueText =heightField.value ;
  const height = parseFloat(heightValueText);

  // validation Input
if(isNaN(base) || isNaN(height)){
  alert("Please insert Number");
  return;
}

  const area = 0.5*base*height;

  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;
   //add to calculation Entry
      addToCalculationEntry('Triangle',area)
}

// use Normal function for rectangle:
function calculateRectangleArea(){
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText =lengthField.value ;
  const length = parseFloat(lengthValueText);

   // validation Input
if(isNaN(width) || isNaN(length)){
  alert("Please insert Number");
  return;
}
  const area =width*length;
  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText = area;
  addToCalculationEntry('Rectangle',area);
}

// use reuseable function for parallelogram:

function calculateParallelogramArea(){
  const base = getInputValue('parallelogram-base');
  const height = getInputValue('parallelogram-height');
  
// validation Input
if(isNaN(base) || isNaN(height)){
 alert("Please insert Number");
 return;
}
  const area = base*height;
 setElementInnerText('parallelogram-area',area);
 //add to calculation Entry
 addToCalculationEntry('Parallelogram',area)
}
// reuseable Function for Rhombus
function calculateRhombusArea(){
  const d1 = getInputValue('rhombus-d1');
  const d2 = getInputValue('rhombus-d2');
    
// validation Input
if(isNaN(d1) || isNaN(d2)){
  alert("Please insert Number");
  return;
 }
  const area = 0.5 * d1 * d2;
  setElementInnerText('rhombus-area',area);
  addToCalculationEntry('Rhombus',area);
}

// reuseable Function for Pentagon
function calculatePentagonArea(){
  const perimeter = getInputValue('pentagon-perimeter');
  const side = getInputValue('pentagon-side');
    
// validation Input
if(isNaN(perimeter) || isNaN(side)){
  alert("Please insert Number");
  return;
 }
  const area = 0.5 * perimeter * side;
  setElementInnerText('pentagon-area',area);
  addToCalculationEntry('Pentagon',area);
}

// use reuseable function for Ellipse
function calculateEllipseArea(){
  const majorRadius = getInputValue('ellipse-first-radius');
  const minorRadius = getInputValue('ellipse-second-radius');
    
// validation Input
if(isNaN(majorRadius) || isNaN(minorRadius)){
  alert("Please insert Number");
  return;
 }
  const area =(Math.PI*majorRadius*minorRadius).toFixed(2);
  setElementInnerText('ellipse-area',area);
  addToCalculationEntry('Ellipse',area);
}




// reuseable get input value field in number
function getInputValue(fieldId){
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value ;
  const value = parseFloat(inputValueText);
  return value;
}

// reuseable set span,p,div
function setElementInnerText(elementId,area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}
// add to calculation Entry
function addToCalculationEntry(areaType,area){

  const calculationEntry = document.getElementById('calculation-entry');
  const count = calculationEntry.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-4','mx-10');
  p.innerHTML=`${count+1}.
  ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success">Convert</button>
  
  `;
  calculationEntry.appendChild(p);
}

















