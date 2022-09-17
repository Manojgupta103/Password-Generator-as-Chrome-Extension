const custom = document.querySelector('#custom');
const check = document.querySelector('#check');
const form = document.querySelector('.pass-type');
const passGen = document.querySelector('#passGen');
const generate = document.querySelector("#generate");
const hidden = document.querySelector(".hidden");
const copy = document.querySelector("#copyit");
const save_password = document.querySelector("#save");
const showError = document.querySelector("#show_error");
let allpassword = [];

window.onload = function(){
  theme_value = localStorage.getItem("theme");
  if(theme_value == "null" || theme_value == "dark")
  {
    document.querySelector('#manage-cssstyle').href = "dark_mode.css";
  }
  else if(theme_value == "light")
  {
    document.querySelector('#manage-cssstyle').href = "style.css";
  }
}


check.addEventListener('click', () => {
  custom.classList.toggle('d-none');
  if (custom.classList.contains('d-none')) {
    form.reset();
  }
  if((e.target.checked==false)&&(hidden.classList.contains("d-none")==false)){
    hidden.classList.add("d-none");
  }else if(e.target.checked==true&&hidden.classList.contains("d-none")==false){
    hidden.classList.add("d-none");
  }
});

const slider = document.getElementById("slider");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}


// custum password options

const upper = document.querySelector("input[name=uppercase]");
const lower = document.querySelector("input[name=lowercase]");
const number = document.querySelector("input[name=number]");
const special_char = document.querySelector("input[name=special_char]");


upper.addEventListener('change', e => sessionStorage.setItem("xs", e.target.checked));

lower.addEventListener('change', e => sessionStorage.setItem("ys", e.target.checked));

number.addEventListener('change', e => sessionStorage.setItem("zs", e.target.checked));

special_char.addEventListener('change', e => sessionStorage.setItem("ts", e.target.checked));


generate.addEventListener('click', (e) => {
  //check whether url or username are empty or not
  e.preventDefault();
  if(($("#url").val() == "") || ($("#user").val() == ""))
  {
    hidden.classList.add('d-none');
    showError.style.display = "inline";
    showError.innerHTML = "Enter valid URL and Username";
  }
  //Error if no checkbox is selected in custom password but custom password is selected
  else if((check.checked) && (!upper.checked) && (!lower.checked) && (!number.checked) && (!special_char.checked))
  {
    hidden.classList.add('d-none');
    showError.style.display = "inline";
    showError.innerHTML = "Check at least one checkbox";
  }
  else
  {
    showError.style.display = "none";
    showError.innerHTML = "";
    myfunction1();
  }
});

function myfunction1() {

  copy.innerHTML = "COPY TO CLIPBOARD";
  save_password.innerHTML = "SAVE PASSWORD";
  
  // To generate password
  if (check.checked) {
    const hasBA = sessionStorage.getItem("xs") == "true";
    const hasNBA = sessionStorage.getItem("ys") == "true";
    const spCh = sessionStorage.getItem("ts") == "true";
    const num = sessionStorage.getItem("zs") == "true";
    const len = slider.value;
    passGen.value = customPassword(hasBA, hasNBA, spCh, num, len);
  }
  else
    passGen.value = defaultPassword(24);

  if (hidden.classList.contains('d-none')) {
    hidden.classList.remove('d-none');
  }
}

// copy password


copy.addEventListener('click', (e) => {

  /* Select the text field */
  e.preventDefault();
  passGen.select();
  passGen.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  copy.innerHTML = "COPIED";
});

// ------------------------------------------------------

// To get the active tab and get its URL
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { action: "get_url" }, response => {
    // console.log(response.url, response.user);
    $("#url").val(response.url);
    $("#user").val(response.user);
  })
})

// To save a password
$("#save").click(($e) => {
  $e.preventDefault();
  save_password.innerHTML = "SAVED";
  let pwd_details = {
    url: $("#url").val(),
    user: $("#user").val(),
    title: $("#title").val(),
    desc: $("#description").val(),
    pass: $("#passGen").val()
  };
  chrome.runtime.sendMessage(
    {
      action: "save_pwd_details",
      data: pwd_details
    },
    response => console.log(response));
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id,
      {
        action: "set_user_data",
        user: $("#user").val().trim(),
        password: $("#passGen").val().trim()
      });
  })
});

// Manage passwords
$("#manage").click(() => {
  chrome.tabs.create({ url: "../managePass/index.html" });
});