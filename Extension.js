document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("changeThings").addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: waouhEffects
            })
        })
    })
})

function waouhEffects() {
    const divs = document.querySelectorAll('div');
    console.log(divs)
    divs.forEach(div => {
        div.style.backgroundColor = 'grey';
    })
}