  var field = document.getElementById('field1');
  var createdFields = [1, 2];
  // Selection of the field

  function setColor(color) {
    // Sets the color
    field.style.backgroundColor = color;
  }
  function setHeight(height) {
    // Set the height
    field.style.height = height + "px";
  }
  function setWidth(breedte) {
    // Set the with of a element
    field.style.width = breedte + "px";
  }
  function selectDiv(slected) {
    // This function selects a div that you want the change
    field.style.border = "";
    field = slected;
    field.style.border = "1px black solid";
    setInputToSelected(slected);
  }
  function changeAll() {
    // This change the both the divs
    var saveOriginal = field;
    for (var i = 1; i < createdFields.length + 1; i++) {
      field = document.getElementById('field' + i);
      changeField();
    }
    selectDiv(saveOriginal);
  }
  function createDiv() {
    // This function create a div dynamicly
    var div = document.createElement("div");
    var id = createdFields.length + 1;
    div.setAttribute('id', 'field' + id);
    div.setAttribute('onclick','selectDiv(this);');
    div.setAttribute('class', 'veld');
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.background = "blue";

    document.getElementById("main").appendChild(div);
    createdFields.push(createdFields.length);
  }
  function getInput() {
    // Gets the input from the form
  }
  function setInputToSelected(selected) {
    // This function sets the input field with the selectedDiv
    var width1 = selected.style.width;
    width1 = width1.slice(0, -2);
    // To remove the 'px' at the end we use slice

    var height1 = selected.style.height;
    height1 = height1.slice(0, -2);

    var color1 = selected.style.background;

    document.getElementById('wide').value = width1;
    document.getElementById('height').value = height1;
    document.getElementById('color').value = color1;
  }

  function changeField() {
    // Runs the functions
    var wide = document.getElementById('wide').value;
    var height = document.getElementById('height').value;
    var color = document.getElementById('color').value;

    setColor(color);
    setWidth(wide);
    setHeight(height);
  }
