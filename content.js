function findElement(selectors) {
    let field;

    for (i = 0; i < selectors.length; i++) {
        field = $(selectors[i]);
        if (field.length) {
            return field;
        }
    }
    return {
        val: function(x) {
            return "";
        }
    };
}
function findUser() {
    let userSelectors = [
        "#Email",
        "#username",
        "#user",
        "#login_field",
        "[name*='email']",
        "[name='login']",
        "[name='login_form[username]']",
        "[name*='login_field']",
        "[name*='username']",
        "[name*='user']"
    ];
    return findElement(userSelectors);
}
function findPassword() {
    let passwordSelectors = [
        "[name*='password']",
        "[type='password']"
    ];
    return findElement(passwordSelectors);
}

// Callback to return user data and url from active tab
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === "get_url"){
        sendResponse({ 
            url: window.location.host,
            user: findUser().val(),
        });
    }
    if(request.action === "set_user_data"){
        findUser().val(request.user);
        findPassword().val(request.password);
    }
})
