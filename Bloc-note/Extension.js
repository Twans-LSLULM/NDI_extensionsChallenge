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

function prendreInfos() {
    let monStockage = document.querySelector('textarea');
    while (!window.close()) {
        localStorage = monStockage;
        console.log(monStockage);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('bloc-note');

    const contentSave = localStorage.getItem('bloc-note');
    if (contentSave) {
        textarea.value = contentSave;
    }

    textarea.addEventListener('input', () => {
        localStorage.setItem('bloc-note', textarea.value);
    });
    
});