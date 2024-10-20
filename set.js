//For Union
document
  .getElementById("calculateUnion")
  .addEventListener("click", function () {
    const setAInput = document.getElementById("setAu").value;
    const setBInput = document.getElementById("setBu").value;

    const setA = new Set(setAInput.split(",").map((num) => Number(num.trim())));
    const setB = new Set(setBInput.split(",").map((num) => Number(num.trim())));

    const union = new Set(setA);
    let stepsOutput = "Steps to calculate the union:\n\n";

    stepsOutput += `1. Set A: { ${Array.from(setA).join(", ")} }\n`;
    stepsOutput += `2. Set B: { ${Array.from(setB).join(", ")} }\n`;

    for (const item of setB) {
      stepsOutput += `Adding ${item} from Set B to the union.\n`;
      union.add(item);
    }
    if (setAInput == "" || setBInput == "") {
      document.getElementById("resultUnion").textContent =
        "Please enter values for both Set A and Set B.";
    } else {
      document.getElementById(
        "resultUnion"
      ).textContent = `Union: { ${Array.from(union).join(", ")} }`;
      document.getElementById("stepsUnion").textContent = stepsOutput;
    }
  });

//For Intersection
document
  .getElementById("calculateIntersect")
  .addEventListener("click", function () {
    const setAInput = document.getElementById("setAi").value;
    const setBInput = document.getElementById("setBi").value;

    const setA = new Set(setAInput.split(",").map((num) => Number(num.trim())));
    const setB = new Set(setBInput.split(",").map((num) => Number(num.trim())));

    const intersection = new Set();
    let stepsOutput = "Steps to calculate the intersection:\n\n";

    stepsOutput += `1. Set A: { ${Array.from(setA).join(", ")} }\n`;
    stepsOutput += `2. Set B: { ${Array.from(setB).join(", ")} }\n`;

    for (const item of setA) {
      stepsOutput += `Checking if ${item} is in Set B...\n`;
      if (setB.has(item)) {
        stepsOutput += `   - ${item} is in both sets. Adding to intersection.\n`;
        intersection.add(item);
      } else {
        stepsOutput += `   - ${item} is not in Set B. Not adding.\n`;
      }
    }

    if (setAInput == "" || setBInput == "") {
      document.getElementById("resultIntersect").textContent =
        "Please enter values for both Set A and Set B.";
    } else {
      document.getElementById(
        "resultIntersect"
      ).textContent = `Intersection: { ${Array.from(intersection).join(
        ", "
      )} }`;
      document.getElementById("stepsIntersect").textContent = stepsOutput;
    }
  });

//For Power Set
document
  .getElementById("calculatePowerset")
  .addEventListener("click", function () {
    const setInput = document.getElementById("setPowerset").value.trim();

    const set = setInput
      ? setInput.split(",").map((num) => Number(num.trim()))
      : [];
    const powerSet = [];
    let stepsOutput = "Steps to calculate the power set:\n\n";

    const totalSubsets = 1 << set.length; // 2^n
    stepsOutput += `. Total subsets = 2^${set.length} = ${totalSubsets}\n`;

    for (let i = 0; i < totalSubsets; i++) {
      const subset = [];
      stepsOutput += `. Generating subset for binary representation ${i
        .toString(2)
        .padStart(set.length, "0")}:\n`;
      for (let j = 0; j < set.length; j++) {
        if (i & (1 << j)) {
          subset.push(set[j]);
          stepsOutput += `   --> Include ${set[j]} (position ${j})\n`;
        } else {
          stepsOutput += `  --> Exclude ${set[j]} (position ${j})\n`;
        }
      }
      powerSet.push(subset);
      stepsOutput += `   --> Resulting subset: { ${subset.join(", ")} }\n`;
    }

    if (setInput == "") {
      document.getElementById("resultPowerset").textContent =
        "Please enter values for the Set.";
    } else {
      document.getElementById(
        "resultPowerset"
      ).textContent = `Power Set: { ${powerSet
        .map((subset) => `{ ${subset.join(", ")} }`)
        .join(", ")} }`;
      document.getElementById("stepsPowerset").textContent = stepsOutput;
    }
  });

//For Complement
document
  .getElementById("calculateComplemet")
  .addEventListener("click", function () {
    const universalSetInput = document
      .getElementById("universalSetInput")
      .value.trim();
    const setInput = document.getElementById("setInput").value.trim();

    const universalSet = new Set(
      universalSetInput.split(",").map((num) => Number(num.trim()))
    );
    const setA = new Set(setInput.split(",").map((num) => Number(num.trim())));

    const complement = new Set();
    let stepsOutput = "Steps to calculate the complement:\n\n";

    stepsOutput += `1. Universal Set: { ${Array.from(universalSet).join(
      ", "
    )} }\n`;
    stepsOutput += `2. Set A: { ${Array.from(setA).join(", ")} }\n`;
    stepsOutput += `3. Calculating complement...\n`;

    universalSet.forEach((item) => {
      if (!setA.has(item)) {
        complement.add(item);
        stepsOutput += `   - ${item} is not in Set A. Adding to complement.\n`;
      } else {
        stepsOutput += `   - ${item} is in Set A. Not adding.\n`;
      }
    });

    if (universalSetInput == "" || setInput == "") {
      document.getElementById("resultComplemet").textContent =
        "Please enter values for both Universal Set and Set A.";
    } else {
      document.getElementById(
        "resultComplemet"
      ).textContent = `Complement of Set A: { ${Array.from(complement).join(
        ", "
      )} }`;
      document.getElementById("stepsComplemet").textContent = stepsOutput;
    }
  });
