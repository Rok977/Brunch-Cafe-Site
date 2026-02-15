
    document.addEventListener('DOMContentLoaded', function() {
        const btnBrunch = document.getElementById('btn-brunch');
        const btnBoissons = document.getElementById('btn-boissons');
        const menuBrunch = document.querySelector('.menu-brunch');
        const menuBoissons = document.querySelector('.menu-boissons');

        function showMenu(menuToShow, menuToHide, activeBtn, inactiveBtn) {
            menuToShow.style.display = 'grid';
            menuToHide.style.display = 'none';
            activeBtn.classList.add('active');
            inactiveBtn.classList.remove('active');
        }

        btnBrunch.addEventListener('click', function() {
            showMenu(menuBrunch, menuBoissons, btnBrunch, btnBoissons);
        });

        btnBoissons.addEventListener('click', function() {
            showMenu(menuBoissons, menuBrunch, btnBoissons, btnBrunch);
        });

        // Initialisation : s'assurer que le brunch est actif et visible
        btnBrunch.classList.add('active');
        menuBrunch.style.display = 'grid';
        menuBoissons.style.display = 'none';
    });
