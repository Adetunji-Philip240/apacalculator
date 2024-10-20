// This is to find the Nth Term of a GP

function calculateNthTerm() {
  let a = document.getElementById("firstTerm").value;
  let r = document.getElementById("commonRatio").value;
  let n = document.getElementById("nthValue").value;

  let firstTerm = parseFloat(a);
  let commonRatio = parseFloat(r);
  let termNumber = parseInt(n);
  let nthTerm = firstTerm * Math.pow(commonRatio, termNumber - 1);

  if (a === "" && r === "" && n === "") {
    document.getElementById("answer").innerHTML =
      "The three parameters are empty";
  } else if (a === "" && r === "") {
    document.getElementById("answer").innerHTML =
      "The First Term and Common Ratio parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("answer").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (r === "" && n === "") {
    document.getElementById("answer").innerHTML =
      "The Common Ratio and The Number of Terms parameters are empty";
  } else if (a === "") {
    document.getElementById("answer").innerHTML =
      "The First Term parameter is empty";
  } else if (r === "") {
    document.getElementById("answer").innerHTML =
      "The Common Ratio parameter is empty";
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
  } else {
    document.getElementById("answer").innerHTML =
      "The " + n + "th term of the geometric progression is: " + nthTerm;
  }
}

//For Showing the workings for calculating the Nth Term
function showNthTermWorking() {
  let a = document.getElementById("firstTerm").value;
  let r = document.getElementById("commonRatio").value;
  let n = document.getElementById("nthValue").value;

  let firstTerm = parseFloat(a);
  let commonRatio = parseFloat(r);
  let termNumber = parseInt(n);
  let nthTerm = firstTerm * Math.pow(commonRatio, termNumber - 1);

  let power = n - 1;
  let powerAnswer = r ** power;

  if (a === "" && r === "" && n === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The three parameters are empty";
  } else if (a === "" && r === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The First Term and Common Ratio parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (r === "" && n === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The Common Ratio and The Number of Terms parameters are empty";
  } else if (a === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The First Term parameter is empty";
  } else if (r === "") {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "The Common Ratio parameter is empty";
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
  } else {
    document.getElementById("showworkingsNth-Term").innerHTML =
      "You provided the following parameters: <br>The First Term (a) =  " +
      a +
      "<br>The Common Ratio (r) = " +
      r +
      "<br>The Number of Terms (n) = " +
      n +
      "<br>The Formula is Tn = ar <sup>(n - 1)</sup> <br>Note; Nth Term = Tn <br> T" +
      "<sub>" +
      n +
      "</sub>" +
      "= " +
      a +
      " X " +
      r +
      "<sup>(" +
      n +
      "- 1) </sup> <br> T" +
      "<sub>" +
      n +
      "</sub>" +
      "= " +
      a +
      " X " +
      r +
      "<sup>" +
      power +
      "</sup>" +
      "<br>  T" +
      "<sub>" +
      n +
      "</sub>" +
      "= " +
      a +
      " X " +
      powerAnswer +
      "<br> So, T" +
      "<sub>" +
      n +
      "</sub>" +
      "= " +
      nthTerm;
  }
}

// This is to find the first term of a GP

function calculateA() {
  let nth = document.getElementById("nthTerm").value;
  let r = document.getElementById("a-commonRatio").value;
  let n = document.getElementById("nValue").value;

  let nthTerm = parseInt(nth);
  let commonRatio = parseFloat(r);
  let termNumber = parseInt(n);
  let a = nthTerm / Math.pow(commonRatio, termNumber - 1);

  if (nth === "" && r === "" && n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && r === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Nth Term and Common Ratio parameters are empty";
  } else if (r === "" && n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Common Ratio and Number of Terms parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Nth Term and Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The nth term parameter is empty";
  } else if (r === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Common Ratio parameter is empty";
  } else if (n === "") {
    document.getElementById("answer-for-a").innerHTML =
      "The Number of Terms parameter is empty";
  } else {
    document.getElementById("answer-for-a").innerHTML =
      "The first term for the given parameters is: " + a;
  }
}

//For Showing the workings for calculating the First Term
function showFirstTermWorking() {
  let nth = document.getElementById("nthTerm").value;
  let r = document.getElementById("a-commonRatio").value;
  let n = document.getElementById("nValue").value;

  let nthTerm = parseInt(nth);
  let commonRatio = parseFloat(r);
  let termNumber = parseInt(n);
  let a = nthTerm / Math.pow(commonRatio, termNumber - 1);

  let power = n - 1;
  let powerAnswer = r ** power;

  if (nth === "" && r === "" && n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && r === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Nth Term and Common Ratio parameters are empty";
  } else if (r === "" && n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Common Ratio and Number of Terms parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Nth Term and Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The nth term parameter is empty";
  } else if (r === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Common Ratio parameter is empty";
  } else if (n === "") {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "The Number of Terms parameter is empty";
  } else {
    document.getElementById("showworkingsFirst-Term").innerHTML =
      "You provided the following parameters: <br>The Nth Term (Nth) = " +
      nth +
      "<br>The Common Ratio (r) = " +
      r +
      "<br>The number of terms (n) = " +
      n +
      "<br>The Formula for the Nth Term of a GP is Tn = ar <sup>(n - 1)</sup> <br>So, to find the first term; <br> a = Tn / r <sup>(n -1)</sup>, Note; Nth Term = Tn <br> a = " +
      nth +
      "/" +
      r +
      "<sup>(" +
      n +
      "-1)</sup> <br> a = " +
      nth +
      "/" +
      r +
      "<sup>(" +
      n +
      "- 1) </sup>" +
      "<br> a = " +
      nth +
      "/" +
      r +
      "<sup>" +
      power +
      "</sup> <br> a = " +
      nth +
      "/" +
      powerAnswer +
      "<br> a = " +
      a;
  }
}

// This is to find the common ratio of a GP

function calculateR() {
  const nth = document.getElementById("nthTerm-r").value;
  const a = document.getElementById("firstTerm-r").value;
  const n = document.getElementById("nValue-r").value;

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let termNumber = parseInt(n);
  const ratio = Math.pow(nthTerm / firstTerm, 1 / (termNumber - 1));

  if (nth === "" && a === "" && n === "") {
    document.getElementById("answer-for-r").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("answer-for-r").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("answer-for-r").innerHTML =
      "The Nth Term and The Number of Terms parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("answer-for-r").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("answer-for-r").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("answer-for-r").innerHTML =
      "The First Term parameter is empty";
  } else if (n === "") {
    document.getElementById("answer-for-r").innerHTML =
      "The Number of Terms parameter is empty";
  } else if (n < 2) {
    document.getElementById("answer-for-r").innerHTML =
      "Number of terms must be at least 2.";
  } else {
    document.getElementById("answer-for-r").innerHTML =
      "The Common Ratio of the GP is: " + ratio;
  }
}

//For Showing the workings for calculating the Common Ratio
function showCommonRatioWorking() {
  const nth = document.getElementById("nthTerm-r").value;
  const a = document.getElementById("firstTerm-r").value;
  const n = document.getElementById("nValue-r").value;

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let termNumber = parseInt(n);
  const ratio = Math.pow(nthTerm / firstTerm, 1 / (termNumber - 1));

  let power = n - 1;
  Nth_divide_First_term = nth / a;

  if (nth === "" && a === "" && n === "") {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && n === "") {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "The Nth Term and The Number of Terms parameters are empty";
  } else if (a === "" && n === "") {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "The First Term and The Number of Terms parameters are empty";
  } else if (nth === "") {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "The First Term parameter is empty";
  } else if (n === "") {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "The Number of Terms parameter is empty";
  } else if (n < 2) {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "Number of terms must be at least 2.";
  } else {
    document.getElementById("showWorking-Common-ratio").innerHTML =
      "You provided the following parameters: <br>The Nth Term (Nth) =  " +
      nth +
      "<br>The First Term (a) = " +
      a +
      "<br>The Number of Terms (n) = " +
      n +
      "<br>The General Formula for the Nth term of a GP is Tn = ar <sup>(n - 1)</sup> <br>" +
      "T" +
      "<sub>" +
      n +
      "</sub>" +
      " = " +
      a +
      " X r" +
      "(" +
      "<sup>" +
      n +
      "- 1) <br>" +
      nth +
      " = " +
      a +
      " X r" +
      "<sup>" +
      power +
      "</sup> <br>" +
      nth +
      "/" +
      a +
      " = r" +
      "<sup>" +
      power +
      "</sup> <br>" +
      Nth_divide_First_term +
      " = r" +
      "<sup>" +
      power +
      "</sup> <br>" +
      "So, r = " +
      ratio;
  }
}
// This is to find the number of terms of GP

function calculateN() {
  const nth = document.getElementById("nthTerm-n").value;
  const a = document.getElementById("firstTerm-n").value;
  const r = document.getElementById("commonRatio-n").value;

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let commonRatio = parseFloat(r);

  const n = Math.log(nthTerm / firstTerm) / Math.log(commonRatio) + 1;

  if (nth === "" && a === "" && r === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && r === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Nth Term and Common Ratio parameters are empty";
  } else if (a === "" && r === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The First Term and Common Ratio parameters are empty";
  } else if (nth === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The First Term parameter is empty";
  } else if (r === "") {
    document.getElementById("answer-for-n").innerHTML =
      "The Common Ratio parameter is empty";
  } else {
    document.getElementById("answer-for-n").innerHTML =
      "The Number of Term of the GP is: " + Math.floor(n);
  }
}
//For Showing the workings for calculating the Number of Terms
function showNumberOfTermWorking() {
  const nth = document.getElementById("nthTerm-n").value;
  const a = document.getElementById("firstTerm-n").value;
  const r = document.getElementById("commonRatio-n").value;

  let nthTerm = parseInt(nth);
  let firstTerm = parseFloat(a);
  let commonRatio = parseFloat(r);

  const n = Math.log(nthTerm / firstTerm) / Math.log(commonRatio) + 1;

  Nth_divide_First_term = nth / a;

  if (nth === "" && a === "" && r === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The three parameters are empty";
  } else if (nth === "" && a === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Nth Term and First Term parameters are empty";
  } else if (nth === "" && r === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Nth Term and Common Ratio parameters are empty";
  } else if (a === "" && r === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The First Term and Common Ratio parameters are empty";
  } else if (nth === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Nth Term parameter is empty";
  } else if (a === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The First Term parameter is empty";
  } else if (r === "") {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "The Common Ratio parameter is empty";
  } else {
    document.getElementById("showWorking-number-of-term").innerHTML =
      "You provided the following parameters: <br>The First Term (a) =  " +
      a +
      "<br>The Common Ratio (r) = " +
      r +
      "<br>The The Nth Term (Nth) =  " +
      nth +
      "<br>The General Formula for the Nth term of a GP is Tn = ar <sup>(n - 1)</sup>... Note; Tn = Nth <br>" +
      "Tn = " +
      a +
      " X " +
      r +
      "<sup>(n - 1)" +
      "</sup> <br>" +
      nth +
      "/" +
      a +
      " = " +
      r +
      "<sup>(n - 1)" +
      "</sup> <br>" +
      Nth_divide_First_term +
      " = " +
      r +
      "<sup>(n - 1)" +
      "</sup> <br>" +
      "So, log " +
      Nth_divide_First_term +
      " = log " +
      r +
      "<sup>(n - 1)" +
      "</sup> <br>" +
      "log " +
      Nth_divide_First_term +
      " = (n - 1) log " +
      r +
      "<br>" +
      "log " +
      Nth_divide_First_term +
      "/ log " +
      r +
      " = n - 1 <br>" +
      "n = (log " +
      Nth_divide_First_term +
      " / log " +
      r +
      ") + 1 <br>" +
      "n = " +
      n;
  }
}
