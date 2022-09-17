# Password-Generator-as-Chrome-Extension
It is an open-source Chrome Extension that allows people to generate and copy safe and secure passwords using an algorithm implemented in JavaScript.
A Chrome Extension implementing chrome API's. Proper Chrome Extension coding standards are maintained like background and content scripts.
Users have to do less as the extension is smart enough to auto-detect the user's username and URL and autofill them in the popup accordingly.
User don't have to manually copy the generated password in the required field as the extension does it for him as soon as he saves password.
The user can generate a password by customizing the length, characters, etc or choose to generate a password by default method with a very user-friendly UI.
He/She can choose to delete saved passwords as and when required. 
The user can choose to view the extension in light or dark mode as per convenience.

Who did we design this Extension for?

Everyone as all of us needs to store password and use them in future.
UI is designed in such a way that even a small child can use it efficiently without any confusion.
UX is designed for the users on go so that they can use it efficiently.

Inspiration for this Project
We decided to take part in a Hackathon by HackGujrat, a 30 hour long hackathon where we have to make something for the comminuity.
The four of us did a lot of brainstorming and then came up with the idea of a "Password Generator" chrome extension. We came up with quite a few challenges and learnt a lot solving them.

Installation Steps
Clone this repository
https://github.com/Manya103/Password-Generator-as-Chrome-Extension.git
Open google chrome
In adress bar just paste 👇👇
chrome://extensions
From top Right corner toggle Developer Mode
From top Left corner select Load Unpacked
Open Build folder from the cloned repository
Your chrome extension will be up and running

Project Structure
Build
    ├── 128.png
    ├── 16.png
    ├── 48.png
    ├── 64.png
    ├── background.js
    ├── Checkout.txt
    ├── content.js
    ├── jquery-3.5.1.min.js
    ├── managePass
    │   ├── darkmode.css
    │   ├── delete-bin.png
    │   ├── delete.png
    │   ├── index.html
    │   ├── manage.js
    │   ├── style.css
    │   └── three-dots.png
    ├── manifest.json
    ├── passwordGenerator
    │   └── passwordGenerator.js
    └── popup
        ├── dark_mode.css
        ├── icon.png
        ├── index.html
        ├── popup.js
        └── style.css
        
  Screenshots
Popup screen to generate and save default passwords
![image](https://user-images.githubusercontent.com/113758890/190871741-dfafacf3-0342-4b5f-903b-19655c0bc343.png)
![image](https://user-images.githubusercontent.com/113758890/190871746-19bed64d-3b5f-4785-a700-8f7605b1f0c1.png)
opup screen to generate and save custom passwords
![image](https://user-images.githubusercontent.com/113758890/190871797-0b4c4d40-e57c-4c61-ad0d-0c8ea3eef3d4.png)
![image](https://user-images.githubusercontent.com/113758890/190871803-bfebdea1-56f2-41b1-a0b4-933a461e6b02.png)
Manage password screen to view saved passwords
![image](https://user-images.githubusercontent.com/113758890/190871808-6647d553-12f0-40ee-bd4c-f5117a3efc83.png)
![image](https://user-images.githubusercontent.com/113758890/190871815-46ff6fe7-30c4-487e-bd03-cacb62dc9d82.png)




