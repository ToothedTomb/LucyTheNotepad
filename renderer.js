
const saveNote = async () => {
    const note = document.getElementById('note').value;
    const response = await window.electronAPI.saveFile(note);
    alert(response);
  };
  
  const loadNote = async () => {
    const content = await window.electronAPI.loadFile();
    if (content !== 'File load canceled') {
      document.getElementById('note').value = content;
    } else {
      alert(content);
    }
  };