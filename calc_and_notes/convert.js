function convert2binary() {
  let decimal = document.getElementById("decimalInput").value;
  let decimalNo = parseInt(decimal);
  let binary = (decimalNo >>> 0).toString(2);

  if (decimal == "") {
    document.getElementById("answer-for-binary").innerHTML =
      "Input a Decimal number";
  } else {
    document.getElementById("answer-for-binary").innerHTML =
      "The Binary value is " + binary;
  }
}

function convert2decimal() {
  let binaryInput = document.getElementById("binaryInput").value;

  let decimalNumber = parseInt(binaryInput, 2);

  if (binaryInput == "") {
    document.getElementById("answer-for-decimal").innerHTML =
      "Input a Binary number";
  } else {
    document.getElementById("answer-for-decimal").innerHTML =
      "The Decimal value is " + decimalNumber;
  }
}

function convert2hexadecimal() {
  let decimalInput = document.getElementById("decimalInput-hexa").value;
  let decimalNumber = parseInt(decimalInput, 10);
  let hexadecimalNumber = decimalNumber.toString(16).toUpperCase();

  if (decimalInput == "") {
    document.getElementById("answer-for-hexadecimal").innerHTML =
      "Input a Decimal number";
  } else {
    document.getElementById("answer-for-hexadecimal").innerHTML =
      "The Hexadecimal value is " + hexadecimalNumber;
  }
}

function convert2decimalHex() {
    let hexadecimalInput = document.getElementById("hexadecimalInput").value;   
    let decimalNumber = parseInt(hexadecimalInput, 16);

    if (hexadecimalInput == "") {
        document.getElementById("answer-for-decimalHex").innerHTML =
          "Input a Decimal number";
      } else {
        document.getElementById("answer-for-decimalHex").innerHTML =
          "The Decimal value is " + decimalNumber;
      }
}