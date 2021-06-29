// ==UserScript==
// @name         NAH - No Ads Hulu
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Skips ads the second they appear and isn't detectable by hulu ad-blocker blocker.
// @author       GSRHackZ
// @match        https://www.hulu.com/*
// @icon         https://i.ibb.co/fQp4LHT/Capture.png
// @grant        none
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==
let ogVolume=1;

setInterval(function(){
    if(document.getElementById("ad-video-player")!==undefined){
        ogVolume=document.getElementById("content-video-player").volume;
        document.getElementById("ad-video-player").style.display="none"
        document.getElementById("ad-video-player").volume=0
        document.getElementById("ad-video-player").playbackRate=16
    }
    else{
        if(document.getElementById("content-video-player")!==undefined){
            document.getElementById("content-video-player").volume=ogVolume;
            document.getElementById("ad-video-player").volume=ogVolume;
            document.getElementById("ad-video-player").playbackRate=1
        }
    }
    if(document.getElementsByClassName("PauseAdAsset")!==undefined){
        let ads=document.getElementsByClassName("PauseAdAsset")
        for(let i=0;i<ads.length;i++){
            document.getElementsByClassName("PauseAdCreative-disclaimer")[i].href="https://github.com/GSRHackZ"
            if(ads[i].style.backgroundImage!=="url(' https://i.ibb.co/fQp4LHT/Capture.png')"){
                ads[i].style.backgroundImage="url(' https://i.ibb.co/fQp4LHT/Capture.png')"
            }
        }
    }
},100)
