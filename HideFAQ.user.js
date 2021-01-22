// ==UserScript==
// @name         HideFAQ
// @namespace    https://github.com/skhrvg/foxford-tweaks
// @version      1.0
// @description  Скрыть техническую помощь
// @author       skhrvg
// @match        https://foxford.ru/admin/courses/*/groups/*
// @grant        none
// @updateURL    https://github.com/skhrvg/foxford-tweaks/raw/main/HideFAQ.user.js
// @downloadURL  https://github.com/skhrvg/foxford-tweaks/raw/main/HideFAQ.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector(".tech_support").style.display = "none";
    document.querySelector(".full_screen").style.height = "100%";
})();