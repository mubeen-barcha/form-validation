function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid FullName";
      error_message.innerHTML = text;
      return false;
    }
    
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter  valid 10 digit Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 20){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }


  function saveData()
   {
    let name,phone,email,message;
    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;



    localStorage.setItem("name",name);
    localStorage.setItem("phone",phone);
    localStorage.setItem("email",email);
    localStorage.setItem("message",message);
    // alert("your data is submitted")

    const person = [];
    person.push(name,phone,email,message)
    console.log(person)
    

    // localStorage.setItem(person)
  }