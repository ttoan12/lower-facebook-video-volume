// ==UserScript==
// @name         Facebook Auto Low Volume
// @namespace    FBVolume
// @version      0.1
// @author       Toàn Trần
// @description  Auto set the volume from facebook's video to 20%
// @license      https://creativecommons.org/publicdomain/zero/1.0/
// @homepage     https://github.com/ttoan12/lower-facebook-video-volume/
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// @updateURL    https://github.com/ttoan12/lower-facebook-video-volume/raw/6e361ed1ab4d3193012e709ff1f84561263ef822/lower-facebook-video-volume.user.js
// @downloadURL  https://github.com/ttoan12/lower-facebook-video-volume/raw/6e361ed1ab4d3193012e709ff1f84561263ef822/lower-facebook-video-volume.user.js
// @supportURL   https://github.com/ttoan12/lower-facebook-video-volume/issues/
// @match        *.facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function setVolume() {
        let allVideos = document.querySelectorAll(":not(.a9ndjppc) video:not([volume-changed='1'])");
        for (let i = 0; i < allVideos.length; i++) {
            allVideos[i].volume = 0.2;
            allVideos[i].setAttribute('volume-changed', '1');
            allVideos[i].onvolumechange = setVolume;
        }

        let popUpVideo = document.querySelector(".a9ndjppc video:not([volume-changed='2'])");
        if (popUpVideo) {
            popUpVideo.volume = 0.2;
            popUpVideo.setAttribute('volume-changed', '2');
        }

        let allSliderOuterDiv = document.querySelectorAll(":not(.a9ndjppc) div[aria-label='Change volume'][role='slider']:not([volume-changed='1'])");
        for (let i = 0; i < allSliderOuterDiv.length; i++) {
            allSliderOuterDiv[i].querySelector(".bogkn74s").style.height = "20%";
            allSliderOuterDiv[i].setAttribute('volume-changed', '1');
        }

        let popUpSlider = document.querySelector(".a9ndjppc div[aria-label='Change volume'][role='slider']:not([volume-changed='2'])");
        if (popUpSlider) {
            popUpSlider.volume = 0.2;
            popUpSlider.setAttribute('volume-changed', '2');
        }
    }

    setInterval(setVolume, 1000);
})();
