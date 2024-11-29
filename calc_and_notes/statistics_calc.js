function calculateMean() {
  const dataInput = document.getElementById("dataInput-Mean").value;
  const data = dataInput.split(",").map(Number);
  const { mean, workings } = calculateMeanOfData(data);

  if (data.includes(NaN)) {
    document.getElementById("mean-result").textContent =
      "Error: Please enter numbers only and should be seperated by comma.";
  } else if (dataInput == "") {
    document.getElementById("mean-result").textContent =
      "You have not entered any numbers";
  } else {
    document.getElementById(
      "mean-result"
    ).textContent = `The mean of the data set is: ${mean.toFixed(2)}`;
    document.getElementById(
      "mean-workings"
    ).innerHTML = `<strong>Workings:</strong><br>${workings}`;
  }
}

function calculateMeanOfData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return {
      mean: "Invalid input. Please provide a non-empty array.",
      workings: "",
    };
  }

  let sum = 0;
  let workings = "";
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    workings += `Step ${i + 1}: Adding ${data[i]} to the sum (${sum})<br>`;
  }
  const mean = sum / data.length;
  workings += `<br>Total sum: ${sum}<br>Number of elements: ${
    data.length
  }<br>Mean = Total sum / Number of elements = ${sum} / ${
    data.length
  } = ${mean.toFixed(2)}`;
  return { mean, workings };
}

//For Median

function calculateMedian() {
  const dataInput = document.getElementById("data-input-median").value;
  const numbers = dataInput.trim().split(" ").map(Number);

  const { median, workings } = calculateMedianFromData(numbers);

  if (numbers.includes(NaN)) {
    document.getElementById("median-result").textContent =
      "Error: Please enter numbers only and should be seperated by space.";
  } else if (dataInput == "") {
    document.getElementById("median-result").textContent =
      "You have not entered any numbers";
  } else {
    document.getElementById(
      "median-result"
    ).textContent = `The median of the data set is: ${median}`;
    document.getElementById(
      "median-workings"
    ).innerHTML = `<h2>Workings:</h2>${workings}`;
  }
}

function calculateMedianFromData(data) {
  // Sort the data in ascending order
  data.sort((a, b) => a - b);

  const n = data.length;
  let workings = `The data set is: [${data.join(", ")}]<br>`;

  // If the length of the data set is odd, the median is the middle element
  if (n % 2 === 1) {
    const median = data[Math.floor(n / 2)];
    workings += `The length of the data set is odd (${n}), so the median is the middle element at index ${Math.floor(
      n / 2
    )}, which is ${median}.`;
    return { median, workings };
  }
  // If the length of the data set is even, the median is the average of the two middle elements
  else {
    const mid1 = data[n / 2 - 1];
    const mid2 = data[n / 2];
    const median = (mid1 + mid2) / 2;
    workings += `The length of the data set is even (${n}), so the median is the average of the two middle elements at indices ${
      n / 2 - 1
    } and ${
      n / 2
    }, which are ${mid1} and ${mid2}. The median is (${mid1} + ${mid2}) / 2 = ${median}.`;
    return { median, workings };
  }
}

//For Mode

function calculateMode() {
  const dataInput = document.getElementById("data-input-mode").value;
  const numbers = dataInput.trim().split(" ").map(Number);

  const { mode, workings } = calculateModeFromData(numbers);

  if (numbers.includes(NaN)) {
    document.getElementById("mode-result").textContent =
      "Error: Please enter numbers only and should be seperated by space.";
  } else if (dataInput == "") {
    document.getElementById("mode-result").textContent =
      "You have not entered any numbers";
  } else {
    document.getElementById(
      "mode-result"
    ).textContent = `The mode of the data set is: ${mode}`;
    document.getElementById(
      "mode-workings"
    ).innerHTML = `<h2>Workings:</h2>${workings}`;
  }
}

function calculateModeFromData(data) {
  // Count the frequency of each number
  const frequencyMap = data.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  let workings = `The data set is: [${data.join(", ")}]<br>`;
  workings += `Counting the frequency of each number:<br>`;

  // Find the number(s) with the highest frequency
  const modes = Object.entries(frequencyMap)
    .filter(([_, freq]) => freq === Math.max(...Object.values(frequencyMap)))
    .map(([num]) => Number(num));

  if (modes.length === 1) {
    workings += `The number ${modes[0]} appears ${
      frequencyMap[modes[0]]
    } times, which is the highest frequency. Therefore, the mode is ${
      modes[0]
    }.`;
  } else {
    workings += `The numbers [${modes.join(", ")}] all appear ${
      frequencyMap[modes[0]]
    } times, which is the highest frequency. Therefore, the mode is [${modes.join(
      ", "
    )}].`;
  }

  return {
    mode: modes.length === 1 ? modes[0] : `[${modes.join(", ")}]`,
    workings,
  };
}

// For Range

function calculateRange() {
  const dataInput = document.getElementById("data-input-range").value;
  const numbers = dataInput.trim().split(" ").map(Number);

  const { range, workings } = calculateRangeFromData(numbers);

  if (numbers.includes(NaN)) {
    document.getElementById("range-result").textContent =
      "Error: Please enter numbers only and should be seperated by space.";
  } else if (dataInput == "") {
    document.getElementById("range-result").textContent =
      "You have not entered any numbers";
  } else {
    document.getElementById(
      "range-result"
    ).textContent = `The range of the data set is: ${range}`;
    document.getElementById(
      "range-workings"
    ).innerHTML = `<h2>Workings:</h2>${workings}`;
  }
}

function calculateRangeFromData(data) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;

  let workings = `The data set is: [${data.join(", ")}]<br>`;
  workings += `The minimum value is ${min} and the maximum value is ${max}.<br>`;
  workings += `The range is calculated as the difference between the maximum and minimum values: ${max} - ${min} = ${range}.`;

  return { range, workings };
}

//Displaying the section for more calculator
const moreCalcBtn = document.getElementById("more-calculator-button");
const moreCalc = document.getElementById("more-calculator");

moreCalcBtn.addEventListener("click", () => {
  moreCalc.style.display = "block";
  moreCalcBtn.textContent = "OK";
});

//for Mean Deviation

function calculateMeanDeviation() {
  const dataInput = document.getElementById("data-input-MeanDeviation").value;
  const numbers = dataInput.trim().split(" ").map(Number);

  const { meanDeviation, workings } = calculateMeanDeviationFromData(numbers);

  if (numbers.includes(NaN)) {
    document.getElementById("meanDeviation-result").textContent =
      "Error: Please enter numbers only and should be seperated by space.";
  } else if (dataInput == "") {
    document.getElementById("meanDeviation-result").textContent =
      "You have not entered any numbers";
  } else {
    document.getElementById(
      "meanDeviation-result"
    ).textContent = `The mean deviation of the data set is: ${meanDeviation.toFixed(
      2
    )}`;
    document.getElementById(
      "meanDeviation-workings"
    ).innerHTML = `<h2>Workings:</h2>${workings}`;
  }
}

function calculateMeanDeviationFromData(data) {
  const mean = data.reduce((sum, num) => sum + num, 0) / data.length;
  const deviations = data.map((num) => Math.abs(num - mean));
  const meanDeviation =
    deviations.reduce((sum, dev) => sum + dev, 0) / data.length;

  let workings = `The data set is: [${data.join(", ")}]<br>`;
  workings += `The mean of the data set is: ${mean.toFixed(2)}<br>`;
  workings += `The deviations from the mean are: [${deviations
    .map((dev) => dev.toFixed(2))
    .join(", ")}]<br>`;
  workings += `The mean deviation is calculated as the average of the absolute deviations from the mean: (${deviations
    .map((dev) => dev.toFixed(2))
    .join(" + ")}) / ${data.length} = ${meanDeviation.toFixed(2)}`;

  return { meanDeviation, workings };
}

//for variance

function calculateVariance() {
  const dataInput = document.getElementById("data-input-Variance").value;
  const numbers = dataInput.trim().split(" ").map(Number);

  const { variance, workings } = calculateVarianceFromData(numbers);

  if (numbers.includes(NaN)) {
    document.getElementById("variance-result").textContent =
      "Error: Please enter numbers only and should be seperated by space.";
  } else if (dataInput == "") {
    document.getElementById("variance-result").textContent =
      "You have not entered any numbers";
  } else {
    document.getElementById(
      "variance-result"
    ).textContent = `The variance of the data set is: ${variance.toFixed(2)}`;
    document.getElementById(
      "variance-workings"
    ).innerHTML = `<h2>Workings:</h2>${workings}`;
  }
}

function calculateVarianceFromData(data) {
  const mean = data.reduce((sum, num) => sum + num, 0) / data.length;
  const deviations = data.map((num) => Math.pow(num - mean, 2));
  const variance = deviations.reduce((sum, dev) => sum + dev, 0) / data.length;

  let workings = `The data set is: [${data.join(", ")}]<br>`;
  workings += `The mean of the data set is: ${mean.toFixed(2)}<br>`;
  workings += `The deviations from the mean are: [${deviations
    .map((dev) => dev.toFixed(2))
    .join(", ")}]<br>`;
  workings += `The variance is calculated as the average of the squared deviations from the mean: (${deviations
    .map((dev) => dev.toFixed(2))
    .join(" + ")}) / ${data.length} = ${variance.toFixed(2)}`;

  return { variance, workings };
}

//for Standard Deviation

function calculateStandardDeviation() {
  const dataInput = document.getElementById(
    "data-input-StandardDeviation"
  ).value;
  const numbers = dataInput.trim().split(" ").map(Number);

  const { standardDeviation, workings } =
    calculateStandardDeviationFromData(numbers);

  document.getElementById(
    "standardDeviation-result"
  ).textContent = `The standard deviation of the data set is: ${standardDeviation.toFixed(
    2
  )}`;
  document.getElementById(
    "standardDeviation-workings"
  ).innerHTML = `<h2>Workings:</h2>${workings}`;
}

function calculateStandardDeviationFromData(data) {
  const mean = data.reduce((sum, num) => sum + num, 0) / data.length;
  const deviations = data.map((num) => Math.pow(num - mean, 2));
  const variance = deviations.reduce((sum, dev) => sum + dev, 0) / data.length;
  const standardDeviation = Math.sqrt(variance);

  let workings = `The data set is: [${data.join(", ")}]<br>`;
  workings += `The mean of the data set is: ${mean.toFixed(2)}<br>`;
  workings += `The deviations from the mean are: [${deviations
    .map((dev) => dev.toFixed(2))
    .join(", ")}]<br>`;
  workings += `The variance is calculated as the average of the squared deviations from the mean: (${deviations
    .map((dev) => dev.toFixed(2))
    .join(" + ")}) / ${data.length} = ${variance.toFixed(2)}<br>`;
  workings += `The standard deviation is the square root of the variance: √${variance.toFixed(
    2
  )} = ${standardDeviation.toFixed(2)}`;

  return { standardDeviation, workings };
}

//Displaying the section for Grouped Data
const gdMeanBtn = document.getElementById("grouped-data-calculator-button");
const gdMean = document.getElementById("grouped-data-calculator");

gdMeanBtn.addEventListener("click", () => {
  gdMean.style.display = "block";
  gdMeanBtn.textContent = "OK";
});

//for Calculating mean of grouped data

function calculateMeanGD() {
  const dataInput = document.getElementById("data-input-Mean-GD").value.trim();
  const groups = dataInput.split("\n").map((line) => {
    const [bounds, freq] = line.split(": ");
    const [lower, upper] = bounds.split(" - ").map(Number);
    const frequency = Number(freq);
    return { lower, upper, frequency };
  });

  const { mean, workings } = calculateMeanFromGroups(groups);

  document.getElementById(
    "mean-GD-result"
  ).textContent = `The mean of the grouped data is: ${mean.toFixed(2)}`;
  document.getElementById(
    "mean-GD-workings"
  ).innerHTML = `<h2>Workings:</h2>${workings}`;
}

function calculateMeanFromGroups(groups) {
  let totalFrequency = 0;
  let weightedSum = 0;

  for (const { lower, upper, frequency } of groups) {
    const midpoint = (lower + upper) / 2;
    totalFrequency += frequency;
    weightedSum += midpoint * frequency;
  }

  const mean = weightedSum / totalFrequency;

  let workings =
    "Note: Midpoint is also known as Classmark (x) = (lb + ub)/2 <br>";
  for (const { lower, upper, frequency } of groups) {
    const midpoint = (lower + upper) / 2;
    workings += `Group: [${lower} - ${upper}], Frequency: ${frequency}, Midpoint: ${midpoint.toFixed(
      2
    )}<br>`;
  }
  workings += `<br>Total frequency: ${totalFrequency}<br>`;
  workings += `Weighted sum: ${weightedSum.toFixed(2)}<br>`;
  workings += `Mean = Weighted sum / Total frequency = ${weightedSum.toFixed(
    2
  )} / ${totalFrequency} = ${mean.toFixed(2)}`;

  return { mean, workings };
}

