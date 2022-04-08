document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('#burger-menu');
    const menu = document.querySelector('.sidebar-menu');
    const close = document.querySelector('.sidebar-close');
    const sidebar_items = document.querySelectorAll('.sidebar-items');

    burger.addEventListener('click', function () {
        menu.classList.toggle('hidden');
    });
    close.addEventListener('click', function () {
        menu.classList.toggle('hidden');
    });
    for (let i = 0; i < sidebar_items.length; i++) {
        const item = sidebar_items[i];
        item.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });
    }

    const nav_items = document.querySelectorAll('.nav-items');
    for (let i = 0; i < nav_items.length; i++) {
        const item = nav_items[i];
        item.addEventListener('click', function () {
            removeActive()
            item.classList.add('nav-active')
        })
    }

    function removeActive() {
        for (let i = 0; i < nav_items.length; i++) {
            const item = nav_items[i];
            if (item.classList.contains('nav-active')) {
                item.classList.remove('nav-active');
            }
        }
    }

    let scrollpos = window.scrollY
    const header = document.querySelector("nav")
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("fade-in")
    const remove_class_on_scroll = () => header.classList.remove("fade-in")

    window.addEventListener('scroll', function () {
        scrollpos = window.scrollY;

        if (scrollpos >= header_height) {
            add_class_on_scroll()
        } else {
            remove_class_on_scroll()
        }

        console.log(scrollpos)
    })

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
    dropdown.querySelector('.dropdown-button').addEventListener("click", () => {
        dropdown.querySelector('ul').classList.toggle('hidden');
    });
    });
});