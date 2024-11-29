// This is to find the Nth Term of an AP

function calculateNthTerm() {
  let a = document.getElementById("firstTerm").value;
  let d = document.getElementById("commonDifference").value;
  let n = document.getElementById("nthValue").value;

  let firstTerm = parseFloat(a);
  let commonDifference = parseFloat(d);
  let termNumber = parseInt(n);
  let nthTerm = firstTerm + (termNumber - 1) * commonDifference;

  if (a === "" && d === "" && n === "") {
    document.getElementById("answer").innerHTML =
      "The three parameters are empty";
  } else if (a === "" && d === "") {
    document.getElementById("answer").innerHTML =
      "The First Term and Common Difference parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("answer").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (d === "" && n === "") {
    document.getElementById("answer").innerHTML =
      "The Common Difference and The Number of Terms parameters are empty";
  } else if (a === "") {
    document.getElementById("answer").innerHTML =
      "The First Term parameter is empty";
  } else if (d === "") {
    document.getElementById("answer").innerHTML =
      "The Common Difference parameter is empty";
  } else if (n === "") {
    document.getElementById("answer").innerHTML =
      "The Number of Terms parameter is empty";
  } else if (n == 2) {
    document.getElementById("answer").innerHTML =
      "The " + n + "nd term of the geometric progression is: " + nthTerm;
  } else if (n == 1) {
    document.getElementById("answer").innerHTML =
      "The " + n + "st term of the arithmetic progression is: " + nthTerm;
  } else if (n == 3) {
    document.getElementById("answer").innerHTML =
      "The " + n + "rd term of the geometric progression is: " + nthTerm;
  } else if (n == 3) {
    document.getElementById("answer").innerHTML =
      "The " + n + "rd term of the arithmetic progression is: " + nthTerm;
  } else if (n == 2) {
    document.getElementById("answer").innerHTML =
      "The " + n + "nd term of the arithmetic progression is: " + nthTerm;
  } else if (n == 1) {
    document.getElementById("answer").innerHTML =
      "The " + n + "st term of the arithmetic progression is: " + nthTerm;
  } else {
    document.getElementById("answer").innerHTML =
      "The " + n + "th term of the arithmetic progression is: " + nthTerm;
  }
}

//To show working for nth term
function showNthTermWorking() {
  let a = document.getElementById("firstTerm").value;
  let d = document.getElementById("commonDifference").value;
  let n = document.getElementById("nthValue").value;

  let firstTerm = parseFloat(a);
  let commonDifference = parseFloat(d);
  let termNumber = parseInt(n);
  let nthTerm = firstTerm + (termNumber - 1) * commonDifference;

  termNumber_minus_one = n - 1;
  termNumber_minus_one_times_d = termNumber_minus_one * d;

  if (a === "" && d === "" && n === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The three parameters are empty";
  } else if (a === "" && d === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The First Term and Common Difference parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (d === "" && n === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The Common Difference and The Number of Terms parameters are empty";
  } else if (a === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The First Term parameter is empty";
  } else if (d === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The Common Difference parameter is empty";
  } else if (n === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The Number of Terms parameter is empty";
  } else if (n == 2) {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The " + n + "nd term of the geometric progression is: " + nthTerm;
  } else if (n == 1) {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The " + n + "st term of the arithmetic progression is: " + nthTerm;
  } else if (n == 3) {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The " + n + "rd term of the geometric progression is: " + nthTerm;
  } else if (n == 3) {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The " + n + "rd term of the arithmetic progression is: " + nthTerm;
  } else if (n == 2) {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The " + n + "nd term of the arithmetic progression is: " + nthTerm;
  } else if (n == 1) {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The " + n + "st term of the arithmetic progression is: " + nthTerm;
  } else {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "You provided the following parameters: <br>The First Term (a) =  " +
      a +
      "<br>The Common Difference (d) = " +
      d +
      "<br>The Number of Terms (n) = " +
      n +
      "<br>The Formula is Tn = a + (n - 1)d... Note: Nth = Tn <br>" +
      "T" +
      "<sub>" +
      n +
      "</sub>" +
      " = " +
      a +
      " + " +
      "(" +
      n +
      " - 1)" +
      d +
      "<br>" +
      "T" +
      "<sub>" +
      n +
      "</sub>" +
      " = " +
      a +
      " + " +
      termNumber_minus_one +
      " X " +
      d +
      "<br>" +
      "T" +
      "<sub>" +
      n +
      "</sub>" +
      " = " +
      a +
      " + " +
      termNumber_minus_one_times_d +
      "<br>" +
      "T" +
      "<sub>" +
      n +
      "</sub>" +
      " = " +
      nthTerm;
  }
}

// This is to find the first term of an AP

function calculateA() {
  let nth = document.getElementById("nthTerm").value;
  let d = document.getElementById("a-commonDifference").value;
  let n = document.getElementById("nValue").value;

  let nthTerm = parseInt(nth);
  let commonDifference = parseFloat(d);
  let termNumber = parseInt(n);
  let a = nthTerm - (termNumber - 1) * commonDifference;
  if (nth === "" && d === "" && n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && d === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Nth Term and Common Difference parameters are empty";
  } else if (d === "" && n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Common Difference and Number of Terms parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Nth Term and Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The nth term parameter is empty";
  } else if (d === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Common Difference parameter is empty";
  } else if (n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Number of Terms parameter is empty";
  } else {
    document.getElementById("answer-for-a").innerHTML =
      "The first term for the given parameters is: " + a;
  }
}

//To show working for the first term

function showFirstTermWorking() {
  let nth = document.getElementById("nthTerm").value;
  let d = document.getElementById("a-commonDifference").value;
  let n = document.getElementById("nValue").value;

  let nthTerm = parseInt(nth);
  let commonDifference = parseFloat(d);
  let termNumber = parseInt(n);
  let a = nthTerm - (termNumber - 1) * commonDifference;

  termNumber_minus_one = n - 1;
  termNumber_minus_one_times_d = termNumber_minus_one * d;

  if (nth === "" && d === "" && n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && d === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Nth Term and Common Difference parameters are empty";
  } else if (d === "" && n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Common Difference and Number of Terms parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Nth Term and Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The nth term parameter is empty";
  } else if (d === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Common Difference parameter is empty";
  } else if (n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Number of Terms parameter is empty";
  } else {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "You provided the following parameters: <br>The Nth Term (Nth) =  " +
      nth +
      "<br>The Common Difference (d) = " +
      d +
      "<br>The Number of Terms (n) = " +
      n +
      "<br>The General Formula of AP is Tn = a + (n - 1)d... Note: Nth = Tn <br> " +
      nth +
      " = a" +
      " + " +
      "(" +
      n +
      " - 1)" +
      d +
      "<br>" +
      nth +
      " = a" +
      " + " +
      termNumber_minus_one +
      " X " +
      d +
      "<br>" +
      nth +
      " = a" +
      " + " +
      termNumber_minus_one_times_d +
      "<br>" +
      nth +
      " - " +
      termNumber_minus_one_times_d +
      " = a <br>" +
      "So, a = " +
      a;
  }
}

// This is to find the common difference of an AP

function calculateD() {
  const nth = document.getElementById("nthTerm-d").value;
  const a = document.getElementById("firstTerm-d").value;
  const n = document.getElementById("nValue-d").value;

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let termNumber = parseInt(n);

  const commonDifference = (nthTerm - firstTerm) / (termNumber - 1);
  if (nth === "" && a === "" && n === "") {
    document.getElementById("answer-for-d").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("answer-for-d").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("answer-for-d").innerHTML =
      "The Nth Term and The Number of Terms parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("answer-for-d").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("answer-for-d").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("answer-for-d").innerHTML =
      "The First Term parameter is empty";
  } else if (n === "") {
    document.getElementById("answer-for-d").innerHTML =
      "The Number of Terms parameter is empty";
  } else if (n < 2) {
    document.getElementById("answer-for-d").innerHTML =
      "Number of terms must be at least 2.";
  } else {
    document.getElementById("answer-for-d").innerHTML =
      "The Common Difference of the AP is: " + commonDifference;
  }
}

//To show working for the common difference

function showCommonDifferenceWorking() {
  let nth = document.getElementById("nthTerm-d").value;
  let a = document.getElementById("firstTerm-d").value;
  let n = document.getElementById("nValue-d").value;

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let termNumber = parseInt(n);

  let commonDifference = (nthTerm - firstTerm) / (termNumber - 1);

  termNumber_minus_one = n - 1;
  termNumber_minus_one_times_d = termNumber_minus_one * d;
  nth_minus_a = nth - a;

  if (nth === "" && a === "" && n === "") {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "The Nth Term and The Number of Terms parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "The First Term parameter is empty";
  } else if (n === "") {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "The Number of Terms parameter is empty";
  } else if (n < 2) {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "Number of terms must be at least 2.";
  } else {
    document.getElementById("showWorking-Common-difference").innerHTML =
      "You provided the following parameters: <br>The First Term (a) =  " +
      a +
      "<br>The Nth Term (Nth) = " +
      nth +
      "<br>The Number of Terms (n) = " +
      n +
      "<br>The General Formula of AP is Tn = a + (n - 1)d... Note: Nth = Tn <br>" +
      nth +
      " = " +
      a +
      "+ (" +
      n +
      " - 1)d <br>" +
      nth +
      " = " +
      a +
      termNumber_minus_one +
      "d <br>" +
      nth +
      " - " +
      a +
      " = " +
      termNumber_minus_one +
      "d <br>" +
      nth_minus_a +
      " = " +
      termNumber_minus_one +
      "d <br> Divide Both Sides by " +
      termNumber_minus_one +
      "<br>" +
      nth_minus_a +
      "/" +
      termNumber_minus_one +
      " = " +
      termNumber_minus_one +
      "d/" +
      termNumber_minus_one +
      "<br> So, d = " +
      commonDifference;
  }
}

// This is to find the number of terms of AP

function calculateN() {
  const nth = parseInt(document.getElementById("nthTerm-n").value);
  const a = parseFloat(document.getElementById("firstTerm-n").value);
  const d = parseFloat(document.getElementById("commonDifference-n").value);

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let commonDifference = parseFloat(d);
  const n = (nthTerm - firstTerm + commonDifference) / commonDifference;

  if (nth === "" && a === "" && d === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && d === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Nth Term and Common Difference parameters are empty";
  } else if (a === "" && d === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The First Term and Common Difference parameters are empty";
  } else if (nth === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The First Term parameter is empty";
  } else if (d === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Common Difference parameter is empty";
  } else {
    document.getElementById("answer-for-n").innerHTML =
      "The Number of Term of the AP is: " + Math.floor(n);
  }
}

function showNumberOfTermWorking() {
  const nth = parseInt(document.getElementById("nthTerm-n").value);
  const a = parseFloat(document.getElementById("firstTerm-n").value);
  const d = parseFloat(document.getElementById("commonDifference-n").value);

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let commonDifference = parseFloat(d);
  const n = (nthTerm - firstTerm + commonDifference) / commonDifference;

  a_minus_d = a - d;

  if (nth === "" && a === "" && d === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && d === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Nth Term and Common Difference parameters are empty";
  } else if (a === "" && d === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The First Term and Common Difference parameters are empty";
  } else if (nth === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The First Term parameter is empty";
  } else if (d === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Common Difference parameter is empty";
  } else {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "You provided the following parameters: <br>The First Term (a) =  " +
      a +
      "<br>The Nth Term (Nth) = " +
      nth +
      "<br>The Commom Difference (d) = " +
      d +
      "<br>The General Formula of AP is Tn = a + (n - 1)d... Note: Nth = Tn <br>" +
      nth +
      " = " +
      a +
      " + (n - 1)" +
      d +
      "<br>" +
      nth +
      " = " +
      a +
      " +    " +
      d +
      " X n - " +
      d +
      " X 1 <br>" +
      nth +
      " = " +
      a +
      " + " +
      d +
      "n - " +
      d +
      "<br>" +
      nth +
      " = " +
      a +
      " - " +
      d +
      " + " +
      d +
      "n <br> " +
      nth +
      " = " +
      a_minus_d +
      " + " +
      d +
      "n <br> Collect like terms and simplify <br> So, n = " +
      n;
  }
}
