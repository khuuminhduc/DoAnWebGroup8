var userpeople = [];
var ava = [];
// show();
// var ad = {
//     acc : "admin1",
//     user : "admin",
//     pass : "123",
//     tele : "0903332665",
//     status: true
// }
// userpeople.push(ad);
// localStorage.setItem("people", JSON.stringify(userpeople));
function createAdmin() {
  var ad = {
    acc: "admin1",
    user: "admin",
    pass: "123",
    tele: "0903332665",
    status: true,
  };
  userpeople.push(ad);
  // localStorage.setItem("people", JSON.stringify(userpeople));
}
createAdmin();
if (userpeople.length == 0) createAdmin();
// console.log(userpeople.length);

// document.getElementById("P").addEventListener("click", login);
// document.getElementById("K").addEventListener("click", signin);

function signin() {
  event.preventDefault();
  var userpeople = JSON.parse(localStorage.getItem("people"));
  var acc = document.getElementById("username").value;
  var user = document.getElementById("user1").value;
  var pass = document.getElementById("password1").value;
  var pass_again = document.getElementById("password_again").value;
  var tele = document.getElementById("telephone").value;
  while (true) {
    if (pass == pass_again) break;
    else {
      alert("Mat khau khong dung\nMoi nhap lai");
      return;
    }
  }
  if (tele.length < 10) {
    alert("Vui long nhap du 10 chu so dien thoai");
    // tele.select();
  }
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  const p = d + "/" + m + "/" + y;
  var mem = {
    ms_kh: `KH_00${userpeople.length}`,
    acc: acc,
    user: user,
    pass: pass,
    tele: tele,
    status: true,
    day: p,
  };
  userpeople.push(mem);
  var json = JSON.stringify(userpeople);
  localStorage.setItem("people", json);
  console.log(userpeople);
  alert("Dang ky thanh cong");
}

function login() {
  event.preventDefault();
  var username = document.getElementById("user").value;
  var pass = document.getElementById("password").value;
  var data = JSON.parse(localStorage.getItem("people"));

  console.log(data);

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (username == "") {
      alert("Vui long nhap tai khoan");
      return;
    } else if (pass == "") {
      alert("Vui long nhap mat khau");
      return;
    } else if (
      data[i].user == "admin" &&
      username == "admin" &&
      data[i].pass == pass
    ) {
      alert("Chao mung admin");
      window.location.href = "./code_admin/admin.html";
      return true;
    } else if (data[i].user == username && data[i].pass == pass) {
      if (data[i].status == true) {
        ava.push(data[i]);
        localStorage.setItem("ava", JSON.stringify(ava));
        alert("Chao mung " + data[i].acc + " den voi website");
        window.location.href = "../DoAnWebGroup8/index.html?";
        return true;
      } else {
        alert("Ban khong co quyen dang nhap");
        window.location.href = "../DoAnWebGroup8/index.html?";
      }
    }
  }
}
function display() {
  var url = window.location.href;
  var a = url.split("?");
  if (a[1] == "login") {
    document.getElementsByTagName("main")[1].innerHTML = `
        <div id="login">
        <form id="contain">
            <h2>ĐĂNG NHẬP</h2>
            <input type="text" id="user" placeholder="Tên đăng nhâp">
            <input type="password" id="password" placeholder="Mật khẩu">
            <div id="signin">
                <span>Quên mật khẩu</span>
                <span>
                    <a href="/Bai tap/Login-logout/DoAnWebGroup8/index.html?signin">Đăng ký</a>
                </span>
            </div>
            <div>
                <button type="submit">Đăng ký</button>
            </div>
        </form>
    </div>
    <img class = "imgLogin" src="/DoAnWebGroup8/img_admin/anhtrangchu.jpg">`;
    for (var i = 2; i < 11; i++) {
      document.getElementsByTagName("main")[i].innerHTML = ``;
    }
  } else if (a[1] == "signin") {
    document.getElementsByTagName("main")[1].innerHTML = `
        <div id="login">
        <form id="contain">
            <h2>ĐĂNG NHẬP</h2>
            <input type="text" id="username" placeholder="Tên tài khoản">
            <input type="text" id="user" placeholder="Tên đăng nhâp">
            <div id="ps">
                <input type="password" id="password1" placeholder="Mật khẩu">
                <input type="password" id="password_again" placeholder="Nhập lại mật khẩu">
            </div>
            <input type="tel" id="telephone" placeholder="Số điện thoại">
            <div>
                <button type="submit">Đăng nhập</button>
            </div>
        </form>
    </div>
    <img class = "imgLogin" src="/DoAnWebGroup8/img_admin/anhtrangchu.jpg">`;
    for (var i = 2; i < 11; i++) {
      document.getElementsByTagName("main")[i].innerHTML = ``;
    }
  } else {
    var a = JSON.parse(localStorage.getItem("ava"));
    document.getElementsByClassName("user")[0].innerHTML = `<div id='hello'>
        <div id='a'>${a[0].acc}</div>
        <button type='button' id='bye' onclick='logout()'>Dang suat</button>
        <button type='button' id='bye1' onclick='view()'>Xem thong tin</button>
        </div>`;
  }
}

function view() {
  document.getElementsByTagName("main")[1].innerHTML = `<div>
        <form>
            <label for="acc">Ten dang nhap</label>
            <input type="text" id="acc">
            <br>
            <label for="user">Ten</label>
            <input type="text" id="user">
            <br>
            <label for="telephone">Dien thoai</label>
            <input type="tel" id="telephone">
            <button type="button" onclick="exit()">Thoat</button>
        </form>
    </div>`;
  for (var i = 2; i < 11; i++) {
    document.getElementsByTagName("main")[i].innerHTML = ``;
  }
  show();
}

function show() {
  var a = JSON.parse(localStorage.getItem("ava"));
  document.getElementById("acc").value = a[0].user;
  document.getElementById("user").value = a[0].acc;
  document.getElementById("telephone").value = a[0].tele;
}

function logout() {
  localStorage.removeItem("ava");
  window.location.href = "../DoAnWebGroup8/index.html?";
}

function exit() {
  window.location.href = "../DoAnWebGroup8/index.html?";
}

window.onload = function () {
  display();
};
