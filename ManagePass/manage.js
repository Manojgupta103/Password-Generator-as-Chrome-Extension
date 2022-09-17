const details = document.querySelector(".pass-details");
const popup_wrap = document.querySelector('.popup-wrapper');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');
const Delete_All = document.querySelector('.btn1');
const cancel = document.querySelector('.btn2');
const popbtn = document.querySelector('.del-all'); // popup button
let all_pass = document.querySelectorAll(".saved-pass");
const theme = document.querySelector('#manage-style');
const btn_dark = document.querySelector("#dark-mode");
let delete_id = null;

// toogle dark mode

btn_dark.addEventListener("click", ()=> {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "style.css") {
      // ... then switch it to "dark-theme.css"
      theme.href = "darkmode.css";
      btn_dark.innerText = "Light mode";
      localStorage.setItem("theme" , "dark");
    // Otherwise...
    } else {
      // ... switch it to "light-theme.css"
      theme.href = "style.css";
      btn_dark.innerText = "Dark mode";
      localStorage.setItem("theme" , "light");
    }
  });


let array_all_pass = Array.from(all_pass); 

let alldata = []

window.onload = function () {
    chrome.storage.local.get(function (items) {
        alldata = items.data;
        console.log(alldata);
        getPassword();
        all_pass = document.querySelectorAll(".saved-pass"); 
        array_all_pass = Array.from(all_pass); 
        console.log(array_all_pass);
        delete_element();
        set_theme();
    });
}

function set_theme(){
    let get_theme_value = localStorage.getItem("theme");
    console.log(get_theme_value);
    if(get_theme_value == "null" || get_theme_value == "dark")
    {
        document.querySelector('#manage-style').href = "darkmode.css";
      document.querySelector("#dark-mode").innerText = "Light mode";
    }
    else if(get_theme_value == "light")
    {
        document.querySelector('#manage-style').href = "style.css";
      document.querySelector("#dark-mode").innerText = "Dark mode";
    }
}

function getPassword() {
    for (var i = 0; i < alldata.length; i++) {
        const html = `
        <div class="saved-pass">
            <div class="data">
                <p class="mtext4">URL : ${alldata[i].url}</p>
                <p class="mtext5">USER : ${alldata[i].user}</p>
                <p class="mtext1">TITLE : ${alldata[i].title}</p>
                <p class="mtext2">DESCRIPTION : ${alldata[i].desc}</p>
                <p class="mtext3">PASSWORD : ${alldata[i].pass}</p>
            </div>
            <div class = "vertical_line"></div>
            <div class="delete tooltip1"><img src="delete.png" alt=""></div>
        </div>
        `
        details.innerHTML += html;
    }
}

Delete_All.addEventListener('click',()=>{
    details.innerHTML = '';
    chrome.storage.local.clear(obj => {
        console.log("cleared");
    })
    chrome.storage.local.get(items => {
        console.log(items);
    })
    popup_wrap.style.display = 'none';
})

function delete_element(){
    array_all_pass.forEach((pass , index)=>{
        pass.addEventListener('click',e=>{
            if(e.target.parentElement.classList.contains('delete')){
                pass.remove();
                console.log("hi");
                delete_id = index;
                delete_particular_element(index);
            }
        })
    })
}

function delete_particular_element(index){
    chrome.storage.local.get(function(items) {
        if(items.data.length == 1)
        {
            items.data.pop();
        }
        else
        {
            items.data.splice(index,1);
        }
        chrome.storage.local.set(items ,function() {
            console.log(items);
        })
    })
}

popbtn.addEventListener('click', e => {
    popup_wrap.style.display = 'block';

})


cancel.addEventListener('click', () => {
    popup_wrap.style.display = 'none';
})

close.addEventListener('click', () => {
    popup_wrap.style.display = 'none';
});

popup_wrap.addEventListener('click', () => {
    popup_wrap.style.display = 'none';
});
popup.addEventListener('click', (e) => {
    popup.style.display = 'block';
    e.stopPropagation();
});