(function () {
    const STORAGE_KEY = "popup-active-tab";

    function activateTab(tab) {
        if (!tab) return;
        const tabs = Array.from(document.querySelectorAll(".tab"));
        const panels = Array.from(document.querySelectorAll(".panel"));

        tabs.forEach((t) => {
            const selected = t === tab;
            t.setAttribute("aria-selected", selected ? "true" : "false");
            t.tabIndex = selected ? 0 : -1;
        });

        panels.forEach((p) => {
            p.hidden = p.id !== tab.getAttribute("aria-controls");
        });

        try {
            localStorage.setItem(STORAGE_KEY, tab.id);
        } catch (e) {}
        tab.focus();
    }

    function onTabClick(e) {
        activateTab(e.currentTarget);
    }

    function initTabs() {
        const tabs = Array.from(document.querySelectorAll(".tab"));
        if (!tabs.length) return;

        tabs.forEach((t) => {
            t.addEventListener("click", onTabClick);
        });

        let last = null;
        try {
            last = localStorage.getItem(STORAGE_KEY);
        } catch (e) {}
        const defaultTab = document.getElementById(last) || tabs[0];
        activateTab(defaultTab);
    }

    document.addEventListener("DOMContentLoaded", initTabs);
})();
