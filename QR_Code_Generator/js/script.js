
// create first class function to generate qr code
var generateQRCode = (function() {
  var qrInput = document.getElementById('qrtext');
  var qrContainer = document.getElementById('qrcode');
  var qrCode = new QRCode(qrContainer, qrInput.value);

  function generateQRCode() {
      qrCode.clear();
      if (qrInput.value === '') {
          qrCode.makeCode('Please write something !')
      } else {
          qrCode.makeCode(qrInput.value)
      }; 
  }
  return generateQRCode;
}());


//function to clear input field
var  clearFields = function(){
var fields, fieldsArr;
fields = document.querySelector('#qrtext');
fields.onfocus();
};

// loads tp initial setting when reloaded
window.addEventListener('load', generateQRCode);

// when generate button is pressed
document.querySelector('.btn').addEventListener('click', generateQRCode);

//clearing input field when button is pressed
document.getElementById('cleartext').addEventListener('click', clearFields);