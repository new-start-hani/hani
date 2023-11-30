function login() {
  const listuser = [
    {
      ID: 1,
      Email: "admin1@gmail.com",
      Pass: "12345678",
    },
    {
      ID: 2,
      Email: "admin2@gmail.com",
      Pass: "12345678",
    },
    {
      ID: 3,
      Email: "admin3@gmail.com",
      Pass: "12345678",
    },
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;

    if (password.length < 8) {
      alert("The password must be at least 8 characters long!");
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("The email must be in a valid email format!");
      return;
    }
    for (var i = 0; i < listuser.length; i++) {
      var idlist = listuser[i].ID;
      var emaillist = listuser[i].Email;
      var ePasslist = listuser[i].Pass;
      console.log(email);
      console.log(password);
      console.log(emaillist);
      if (email === emaillist && password === ePasslist) {
        alert("Login is success!");
        return;
      } else {
        alert("Please check your username and password again!");
        return;
      }
    }
  };
  var username = document.querySelector("#userLogin").innerHTML;
  var password = document.querySelector("#passwordLogin").innerHTML;

  //<input type="email" id="userlogin" placeholder="Email" />
  //<input type="password" id="passlogin" placeholder="Password" />
  //var remember = document.getElementById("remember");
}
