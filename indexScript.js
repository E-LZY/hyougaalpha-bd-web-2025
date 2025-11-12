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

function SaveMessage(link) {
  const hName = document.getElementById("name").value.trim();
  const hText = document.getElementById("text").value.trim();
  if (selectedValue && hName && hText ) {
    fetch("message.json", {
      method: "POST",
      body: JSON.stringify({ hName, hText, selectedValue }),
    }).then(() => {
      document.getElementById("name").value = "";
      document.getElementById("text").value = "";
      window.location.href = link;
    });
  }
}
