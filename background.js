let generated_passwords = [];
let password = [
    {title : "eruieui" , description : "www.google.com" , password: "abcde"},
    {title : "fgjhierj" , description : "www.google.com" , password: "abcde"},
    {title : "gfgetuit" , description : "www.google.com" , password: "abcde"}
  ];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "save_pwd_details") {
        // request.data to be saved to the chrome store
        chrome.storage.local.get(function(items) {
            if(Object.keys(items).length > 0 && items.data) {
                items.data.push(request.data);
            }
            else {
                items.data = [request.data];
            }
            chrome.storage.local.set(items , function(){
              chrome.extension.getBackgroundPage().console.log(items);
            });
        });
        sendResponse("Saved");
        return true;
    }
})