
function main() {
    document.getElementById('react-root').addEventListener('DOMNodeInserted', function () {
        var elements = document.querySelector("div[data-testid=\"sidebarColumn\"]");
        if (elements !== null) {
            elements.remove();
            console.info('delete <div data-testid=\"sidebarColumn\"></div>')
        } 
    })
}

main()
