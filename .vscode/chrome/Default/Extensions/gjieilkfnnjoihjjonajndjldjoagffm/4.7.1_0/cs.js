// History Eraser for Google Chrome - HOTCLEANER.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
var cr=0;isReady();function isReady(){"complete"==document.readyState?init():120==cr?document.location.href=chrome.runtime.getURL("history.html"):setTimeout(isReady,100);cr++}
function init(){var b,a;(a=document.querySelector(".get"))||(a=document.getElementById("get"));a&&0<a.offsetHeight&&(a.style.display="none",b="/clear-browsing-history.html"==location.pathname?"history.html":"about:blank",document.body.hasAttribute("frm")||(document.body.setAttribute("frm",!0),a=document.createElement("iframe"),a.id="frm",a.className="frm",a.setAttribute("scrolling","no"),a.setAttribute("frameborder","0"),a.src=chrome.runtime.getURL(b),(b=document.querySelector(".txt"))||(b=document.getElementById("txt")),
b&&b.appendChild(a)))};