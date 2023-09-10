document.getElementById("offer1").addEventListener("click", function () {
  var x = document.getElementById("offerpara1");
  if (x.style.display === "none") {
    x.style.display = "block";
    //document.getElementById("offerpara2").style.display = "none";
    document.getElementById("icondown1").style.display = "none";
    document.getElementById("iconup1").style.display = "block";


  } else {
    x.style.display = "none";
    //document.getElementById("hr").style.display = "none";
    document.getElementById("icondown1").style.display = "block";
    document.getElementById("iconup1").style.display = "none";
  }
});


document.getElementById("offer2").addEventListener("click", function () {
  var y = document.getElementById("offerpara2");
  if (y.style.display === "none") {
    y.style.display = "block";
    //document.getElementById("offerpara1").style.display = "none";
    document.getElementById("icondown2").style.display = "none";
    document.getElementById("iconup2").style.display = "block";
  } else {
    y.style.display = "none";
    document.getElementById("icondown2").style.display = "block";
    document.getElementById("iconup2").style.display = "none";
  }
});



const textElement = document.querySelector("#text");

const popupElement = document.querySelector("#popup");

textElement.addEventListener("click", function () {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(textElement);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();

  popupElement.style.left = textElement.offsetLeft + "px";
  popupElement.style.top = textElement.offsetTop + textElement.offsetHeight + "px";
  popupElement.style.display = "block";
  setTimeout(function () {
    popupElement.style.display = "none";
  }, 1500);

});


const textElement2 = document.querySelector("#text2");
const popupElement2 = document.querySelector("#popup2");

textElement2.addEventListener("click", function () {
  const selection2 = window.getSelection();
  const range2 = document.createRange();
  range2.selectNodeContents(textElement2);
  selection2.removeAllRanges();
  selection2.addRange(range2);
  document.execCommand("copy");
  selection2.removeAllRanges();

  popupElement2.style.left = textElement2.offsetLeft + "px";
  popupElement2.style.top = textElement2.offsetTop + textElement2.offsetHeight + "px";
  popupElement2.style.display = "block";
  setTimeout(function () {
    popupElement2.style.display = "none";
  }, 1500);

});


const textElement3 = document.querySelector("#anchorinsta");
const popupElement3 = document.querySelector("#popup3");

textElement3.addEventListener("click", function () {
  const selection3 = window.getSelection();
  const range3 = document.createRange();
  range3.selectNodeContents(textElement3);
  selection3.removeAllRanges();
  selection3.addRange(range3);
  document.execCommand("copy");
  selection3.removeAllRanges();

  popupElement3.style.left = textElement3.offsetLeft + "px";
  popupElement3.style.top = textElement3.offsetTop + textElement3.offsetHeight + "px";
  popupElement3.style.display = "block";
  setTimeout(function () {
    popupElement3.style.display = "none";
  }, 1500);

});



$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    var message = $("textarea[name='message']").val();

    if (!name || !email || !message) {
      alert("All fields are required.");
      return;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Invalid email address.");
      return;
    }

    var formData = {
      name: name,
      email: email,
      message: message
    };

    $.ajax({
      type: "POST",
      url: "form-processor.php",
      data: formData,
      success: function () {
        alert("Form submitted successfully.");
      }
    });
  });
});