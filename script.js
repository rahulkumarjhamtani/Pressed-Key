const output = document.getElementById("key");
const input = document.getElementById("text");

input.addEventListener("keydown", e => {
    const keyname = e.key;
    const msg = `${keyname} is pressed`;
    output.style.color = "green";
    output.innerText = msg;
})

function downloadFile(filename, content) {
    const element = document.createElement('a');
    const blob = new Blob([content], { type: 'plain/text' });
  
    const fileUrl = URL.createObjectURL(blob);
    
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    
    document.body.appendChild(element);
    element.click();
    
    document.body.removeChild(element);
  };
  
  window.onload = () => {
    document.getElementById('download').
    addEventListener('click', e => {
      
      const filename = document.getElementById('filename').value;
      
      const content = document.getElementById('text').value;
      
      
      if (filename && content) {
        downloadFile(filename, content);
      }
    });
  };