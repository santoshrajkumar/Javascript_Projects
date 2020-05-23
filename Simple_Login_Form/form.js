// defining no. of attempts
var attempt = 3;

//FUNCTION TO BE CALLED when login is pressed
function validate(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'chowbhai' && password === 'CCCP'){
    alert('Logged in successfully !');
    window.location = "https://www.eigen-solution.com"
    return false;
  } else {
    //DECRESEAES ATTEMPT
    attempt--;
    alert('You have ' + attempt + ' attempt/s left');
    if (attempt === 0){
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.getElementById('submit').disabled = true;
      return false;

    };
  };

}