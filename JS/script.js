document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const headerMenu = document.getElementById('header_menu');

    const buttons = document.querySelectorAll("button");

    const twitchBut = document.querySelector(".twitch");
    const robloxBut = document.querySelector(".roblox");
    const asusBut = document.querySelector(".asus");
    const canonBut = document.querySelector(".canon");
    const microsoftBut = document.querySelector(".microsoft");

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

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "error.html";
        });
    });

      
    if (twitchBut) {
        twitchBut.addEventListener("click", function() {
            window.location.href = "https://www.twitch.tv/";
        });
    }
    if (robloxBut) {
        robloxBut.addEventListener("click", function() {
            window.location.href = "https://www.roblox.com/";
        });
    }
    if (asusBut) {
        asusBut.addEventListener("click", function() {
            window.location.href = "https://www.asus.com/";
        });
    }
    if (canonBut) {
        canonBut.addEventListener("click", function() {
            window.location.href = "https://www.canon.com.by/";
        });
    }
    if (microsoftBut) {
        microsoftBut.addEventListener("click", function() {
            window.location.href = "https://www.microsoft.com/ru-ru";
        });
    }
});
