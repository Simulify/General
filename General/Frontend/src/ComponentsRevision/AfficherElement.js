
export default function AfficherElement() {

    var element = document.getElementById("monElement");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }

  }

  