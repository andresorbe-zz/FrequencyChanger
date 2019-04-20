// var app = chrome.runtime.getBackgroundPage();

function do_exec() {
    chrome.tabs.executeScript({
        file: 'content.js'
    });
}

let deez = document.getElementById('exec');
if(deez != null) {
    deez.addEventListener('click', do_exec);
} else {
    console.log(errorCallback());
}
