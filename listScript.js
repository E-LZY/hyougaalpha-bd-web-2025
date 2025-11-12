const apiUrl = "https://script.google.com/macros/s/AKfycbxmO5pltIcM83wctml1f7KHeJvrhK59_q-vOCNVfEazpFVUWoCfLvhKa66_knQhAHeEUA/exec"

fetch(apiUrl)
  .then(res => res.json())
  .then(data => console.log(data));

// function loadMessages() {
//   fetch(apiUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       const container = document.getElementById("messages");
//       container.innerHTML = "";
//       data.reverse().forEach((entry) => {
//         const formattedText = entry.text.replace(/\n/g, '<br>&emsp;&emsp;');
//         container.innerHTML += `
//               <div class="msg">
//                 <div class="name"><strong>${entry.name}</strong></div>
//                 <div class="text">&emsp;&emsp;${formattedText}</div>                
//               </div>
//             `;
//       });
//     });
// }

// loadMessages();
// setInterval(loadMessages, 5000);