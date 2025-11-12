const buttons = document.querySelectorAll(".gift-option");
const p = document.getElementById("gift-text");
const nextBtn1 = document.getElementById("nextBtn1");
const nextBtn2 = document.getElementById("nextBtn2");
let selectedValue = 1;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.remove("selected");
      b.classList.add("unselected");
    });
    btn.classList.add("selected");
    btn.classList.remove("unselected");
    selectedValue = btn.dataset.value;

    console.log(selectedValue);

    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const message =
          data[selectedValue].msg || "No message for this selection.";
        p.innerHTML = message;
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        messageDiv.textContent = "Could not load data.";
      });
  });
});

nextBtn1.addEventListener("click", () => {
  SaveMessage("entry.html");
});

nextBtn2.addEventListener("click", () => {
  SaveMessage("list.html");
});

const apiUrl =
  "https://script.google.com/macros/s/AKfycbxmO5pltIcM83wctml1f7KHeJvrhK59_q-vOCNVfEazpFVUWoCfLvhKa66_knQhAHeEUA/exec";

function SaveMessage(link) {
  const hName = document.getElementById("name").value.trim();
  const hText = document.getElementById("text").value.trim();
  if (selectedValue && hName && hText) {
    const data = { hName, hText, selectedValue };
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((result) => {
        console.log("Saved:", result);
        // window.location.href = link;
      })
      .catch((err) => console.error("Error:", err));
  } else {
    alert("กรอกข้อความก่อนนะเหมียว !");
  }
}
