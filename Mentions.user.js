// ==UserScript==
// @name         Mentions
// @namespace    https://github.com/skhrvg/foxford-tweaks
// @version      1.3
// @description  Упоминания пользователей в чате Фоксфорда
// @author       skhrvg
// @match        https://*.webinar.netology-group.services/*
// @grant        none
// @updateURL    https://github.com/skhrvg/foxford-tweaks/raw/main/Mentions.user.js
// @downloadURL  https://github.com/skhrvg/foxford-tweaks/raw/main/Mentions.user.js
// ==/UserScript==

(function() {
    'use strict';

    unlockMentions();
    function unlockMentions() {
        if (document.querySelector("ulms-im") == null) {
            setTimeout(function(){
                unlockMentions();
            }, 3000);
            return
        }

        let msgs = document.querySelector("ulms-im").shadowRoot.querySelector("wc-chat-scrollable").querySelector("wc-chat-messages").shadowRoot.querySelectorAll(".message");
        let inp = document.querySelector("ulms-im").shadowRoot.querySelector("wc-chat-input").shadowRoot.querySelector("iron-autogrow-textarea");

        document.querySelector("ulms-im").shadowRoot.querySelector("wc-chat-scrollable").querySelector("wc-chat-messages").onmouseenter = function() {
            msgs = document.querySelector("ulms-im").shadowRoot.querySelector("wc-chat-scrollable").querySelector("wc-chat-messages").shadowRoot.querySelectorAll(".message");
            for (let i = 0; i < msgs.length; i++) {
                if (msgs[i].shadowRoot.querySelector(".author") != null) {
                    msgs[i].shadowRoot.querySelector(".author").style.cursor = "pointer";
                    msgs[i].shadowRoot.querySelector(".author").onclick = function() {
                        inp.value = "**" + msgs[i].username.trim() + "**, " + inp.value;
                        inp.shadowRoot.querySelector("textarea").focus();
                    }
                }
            }
        }

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

        var tweak = document.createElement("a");
        tweak.id = "mentions";
        tweak.setAttribute("class", "tweak");
        tweak.setAttribute("href", "https://github.com/skhrvg/foxford-tweaks");
        tweak.setAttribute("target", "_blank");
        tweak.setAttribute("title", "Подключен скрипт Tampermonkey для упоминания пользователей в чате Фоксфорда.");
        tweak.innerHTML = "Mentions v1.3";
        container.appendChild(tweak);
    }
})();