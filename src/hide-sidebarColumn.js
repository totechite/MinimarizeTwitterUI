(function () {
    const remove_column = (function () {
        const elements = document.querySelector("div[data-testid=\"sidebarColumn\"]");
        if (elements !== null) {
            elements.remove();
            console.info('delete <div data-testid=\"sidebarColumn\"></div>')
        }
    })
    const observer = new MutationObserver(remove_column);
    observer.observe(document.getElementById('react-root'), {
        childList: true,
        subtree: true
    });
})()
