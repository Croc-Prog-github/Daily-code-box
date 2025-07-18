/*
  Need to this html for work:
  <button for="load_file" onclick="LoadFile();">
    <label for="load_file">continue</label>
    <input id="load_file" type="file" accept="" hidden>
  </button>
*/
const button = document.querySelector('button[for="load_file"]');
const input = button.querySelector('input#load_file');
input.onchange = function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const content = e.target.result;
      console.log(content); //output
    };
    reader.readAsText(file);
  }
};