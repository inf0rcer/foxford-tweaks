// ==UserScript==
// @name         Messages
// @namespace    https://github.com/skhrvg/foxford-tweaks
// @version      1.1
// @description  Шаблоны сообщений для быстрой отправки
// @author       skhrvg
// @match        https://*.webinar.netology-group.services/*
// @grant        none
// @updateURL    https://github.com/skhrvg/foxford-tweaks/raw/main/Messages.user.js
// @downloadURL  https://github.com/skhrvg/foxford-tweaks/raw/main/Messages.user.js
// ==/UserScript==

(function () {
    'use strict';

    let msglist = [
        "Добрый день, дорогие учащиеся!",
        "попробуйте обновить страницу, должно помочь.",
        "ваши сообщения не связаны с темой урока. Это нарушение правил чата, за которое можно получить бан.",
        "убедительная просьба сменить свой никнейм на настоящие Имя и Фамилию. У нас запрещена фальсификация личности на занятиях! Подобное нарушение может послужить причиной бана.",
        "пожалуйста, проверьте настройки на вашем компьютере, после чего обновите страницу. Если проблема не пропала, воспользуйтесь кнопкой \"Техническая помощь\" или напишите о своей проблеме на: ask@foxford.ru"
    ]


    unlockMessages();

    function unlockMessages() {
        if (document.querySelector("ulms-im") == null) {
            setTimeout(function () {
                unlockMessages();
            }, 3000);
            return
        }

        let inp = document.querySelector("ulms-im").shadowRoot.querySelector("wc-chat-input").shadowRoot.querySelector("iron-autogrow-textarea");

        let tweak = document.createElement("div");
        let header = document.createElement("div");
        let messages = document.createElement("div");
        tweak.id = "messages-tweak";
        tweak.setAttribute("class", "draggable");
        header.innerHTML = "Messages v1.1"
        header.setAttribute("class", "header");
        tweak.appendChild(header);
        messages.setAttribute("class", "messages");

        msglist.forEach((msg) => {
            let m = document.createElement("div");
            m.setAttribute("class", "message");
            m.innerText = msg;
            m.onclick = function () {
                inp.value = inp.value + m.innerText;
                inp.shadowRoot.querySelector("textarea").focus();
            }
            messages.appendChild(m);
        })

        tweak.appendChild(messages);
        document.getElementsByTagName("body")[0].appendChild(tweak);

        dragElement(document.querySelector("#messages-tweak"));
    }

    // draggable messages box
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.querySelector("#" + elmnt.id + " .header")) {
            /* if present, the header is where you move the DIV from:*/
            document.querySelector("#" + elmnt.id + " .header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }


    // activated tweaks list
    if (document.querySelector("#foxtweaks") == null) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://skhr.vg/foxford/tweaks/style.css';
        link.media = 'all';
        document.getElementsByTagName('head')[0].appendChild(link);

        var container = document.createElement("div");
        container.id = "foxtweaks";
        container.setAttribute("class", "top right");
        document.getElementsByTagName("body")[0].appendChild(container);
    } else {
        container = document.querySelector("#foxtweaks");
    }
})();