/**
 * @param {string} text The text to be processed
 */
function AddBs(text) {
  const paras = text.split(/\r?\n/);
  const parasNew = [paras.length];
  paras.forEach((para, index) => {
    const list = para.split(" ");

    for (i = 0; i < list.length; i++) {
      let str = list[i];
      if (str.length >= 1) {
        console.log(str);
        str = "🅱" + str.substring(1);
        list[i] = str;
      }
    }

    parasNew[index] = list.join(" ");
  });

  return parasNew.join("<br>");
}

function submitForm() {
  const output = document.getElementById("output");
  const text = document.forms["form"]["text"].value;
  if (text.length > 0) {
    output.innerHTML = AddBs(text);
    output.hidden = false;
  } else {
    alert("You can't submit an empty text field!");
    output.hidden = true;
  }
}
