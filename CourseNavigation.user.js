// ==UserScript==
// @name         CourseNavigation
// @namespace    https://github.com/skhrvg/foxford-tweaks
// @version      0.5
// @description  Упрощенная навигация в админке курса
// @author       skhrvg
// @match        https://foxford.ru/admin/courses/*/groups
// @grant        none
// @updateURL    https://github.com/skhrvg/foxford-tweaks/raw/main/CourseNavigation.user.js
// @downloadURL  https://github.com/skhrvg/foxford-tweaks/raw/main/CourseNavigation.user.js
// ==/UserScript==

(function() {
    'use strict';

    var s = document.createElement("script");
    s.id = "coursenavigationscript";
    s.innerHTML =`
    function showOnlyPlanned() {
        let buttons = document.querySelectorAll(".col-sm-9 .btn-group.actions_btn .btn.btn-default:not(.dropdown-toggle)");
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].text != "Вебинар") {
                buttons[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.setAttribute("hidden", "");
            }
        }
    }

    function showAll() {
        let buttons = document.querySelectorAll(".col-sm-9 .btn-group.actions_btn .btn.btn-default:not(.dropdown-toggle)");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.removeAttribute("hidden");
        }
    }

    function jumpToFirst() {
        let buttons = document.querySelectorAll(".col-sm-9 .btn-group.actions_btn .btn.btn-default:not(.dropdown-toggle)");
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].text == "Вебинар") {
                buttons[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.scrollIntoView();
                break;
            }
        }
    }`
    document.getElementsByTagName("body")[0].appendChild(s);

    if (document.querySelector("#foxtweaks") == null) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://skhr.vg/foxford/tweaks/style.css';
        link.media = 'all';
        document.getElementsByTagName('head')[0].appendChild(link);

        var container = document.createElement("div");
        container.id = "foxtweaks";
        container.setAttribute("class", "bottom right");
        document.getElementsByTagName("body")[0].appendChild(container);
    } else {
        container = document.querySelector("#foxtweaks");
    }

    var tweak = document.createElement("div");
    tweak.id = "coursenavigation";
    tweak.setAttribute("class", "tweak");
    tweak.setAttribute("title", "Подключен скрипт Tampermonkey для упрощенной навигации админке курса.");
    tweak.innerHTML = `
<a href='https://github.com/skhrvg/foxford-tweaks' target='_blank' style='color:white'>CourseNavigation v0.5</a>
<br>
<button onclick='showAll()'>показать все вебинары</button>
<button onclick='showOnlyPlanned()'>показать только запланированные</button>
<button onclick='jumpToFirst()'>перейти к первому запланированному</button>
`;
    container.appendChild(tweak);
})();