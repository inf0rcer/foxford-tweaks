// ==UserScript==
// @name         HideFAQ
// @namespace    https://github.com/skhrvg/foxford-tweaks
// @version      0.1
// @description  Шаблоны сообщений для быстрой отправки
// @author       skhrvg
// @match        https://foxford.ru/admin/courses/*/groups/*
// @grant        none
// @updateURL    https://github.com/skhrvg/foxford-tweaks/raw/main/Messages.user.js
// @downloadURL  https://github.com/skhrvg/foxford-tweaks/raw/main/Messages.user.js
// ==/UserScript==

(function() {
    'use strict';

    let messages = document.createElement("div");
    messages.id = "messages_tweak";
    messages.setAttribute("class", "top right");
    document.getElementsByTagName("body")[0].appendChild(messages);


})();