document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const headerMenu = document.getElementById('header_menu');

    if (menu && headerMenu) {
        menu.addEventListener('click', function(event) {
            event.stopPropagation();
            headerMenu.classList.toggle('show');
        });

        document.addEventListener('click', function(event) {
            if (!headerMenu.contains(event.target) && event.target.id !== 'menu') {
                headerMenu.classList.remove('show');
            }
        });
    }
});
