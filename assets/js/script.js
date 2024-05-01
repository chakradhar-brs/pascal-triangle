function generatePascalsTriangle(rows) {
    var triangle = [];
    for (var i = 0; i < rows; i++) {
      triangle[i] = [];
      for (var j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
    return triangle;
  }
  
  function displayTriangle() {
    var rowsInput = document.getElementById("rows");
    var rows = parseInt(rowsInput.value);
    if (rows <= 0 || isNaN(rows)) {
      alert("Please enter a valid positive integer for the number of rows.");
      return;
    }
  
    var triangle = generatePascalsTriangle(rows);
    var triangleDiv = document.getElementById("triangle");
    triangleDiv.innerHTML = "";
    for (var i = 0; i < rows; i++) {
      var rowDiv = document.createElement("div");
      rowDiv.className = "row";
      for (var j = 0; j <= i; j++) {
        var numberDiv = document.createElement("div");
        numberDiv.className = "number";
        numberDiv.textContent = triangle[i][j];
        rowDiv.appendChild(numberDiv);
      }
      triangleDiv.appendChild(rowDiv);
    }
  }