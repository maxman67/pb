// On file input change
const input = document.getElementById("imageInput");
input.addEventListener("change", previewAndGetBase64);

// Remove data URI prefix
function removePrefix(base64) {
  return base64.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
}

// Preview and get base64 data
function previewAndGetBase64() {

  // Get file
  const file = this.files[0];
  
  // Preview image
  const reader = new FileReader();
  reader.onload = function() {
    const img = document.getElementById("previewImage");
    img.src = this.result;
    
    // Extract base64 data
    let base64 = this.result.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
    
    // base64 data is now available
  };
  reader.readAsDataURL(file);

  // Show preview 
  const preview = document.getElementById("preview");
  preview.style.display = "block";

}