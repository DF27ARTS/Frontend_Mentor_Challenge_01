const summaryBoldNumbers = document.querySelectorAll(".summary-bold-number");
const summaryOptionTexts = document.querySelectorAll(".summary-option-text");
const summaryOptionIcons = document.querySelectorAll(".summary-option-icon");

(async () => {
  const response = await fetch("../data.json");
  const data = await response.json();

  summaryBoldNumbers.length &&
    summaryOptionTexts.length &&
    summaryOptionIcons.length &&
    summaryBoldNumbers.forEach((item, index) => {
      item.innerText = data[index].score;
      summaryOptionTexts[index].innerText = data[index].category;
      summaryOptionIcons[index].src = data[index].icon;
    });
})();
