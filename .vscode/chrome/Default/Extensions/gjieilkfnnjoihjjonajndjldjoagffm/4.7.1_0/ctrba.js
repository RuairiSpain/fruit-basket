// History Eraser for Google Chrome - HOTCLEANER.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
window.addEventListener("load",initCtrb,!1);
function initCtrb(){function f(){var a="https://appn.center/apiv1/ctrb?a="+b("ppPrice").value;e?e.makeCode(a):e=new QRCode(b("qr"),a)}function b(a){return document.getElementById(a)}var c,d=b("rng"),g=b("amnt");c=b("paypal");var h=b("bitpay"),k=b("ppPrice"),l=b("bpPrice"),e;c.setAttribute("action","https://www.paypal.com/cgi-bin/webscr");h.setAttribute("action","https://bitpay.com/checkout");b("ppItemName").value=b("bpItemDesc").value="Donation for History Eraser";b("ppBusiness").value="webmaster@mixesoft.com";
b("bpData").value="QssHQDbRWfw8q4ZrIXbQo39IRne2n99dmkMZHZ5U30pSjGO7mKX1oewbiLiSkZZ/mGmWzLvaYuMrDax7AZNkZg/3mLE2npzjwC0mUH+rwp+cScWvicGSP0ZnXXiAsFjClAJtBZ5C3Y5NgMS3TM4AUP+5v7WRXGDnMsNdxjuPIYao/vi8ici0swhr4lXPpmZAehzTcDKd5jqiCm1cx0Fjd/orQchtC44wHDamnN/JVpLQrLuZahb8NP10wkQXo7sefDInqAmVgSjNpaOGjcpd2g==";g.textContent="$ "+d.value;d.addEventListener("change",function(a){g.textContent="$ "+d.value;k.value=l.value=d.value;f();a.stopPropagation()},!1);c.addEventListener("submit",function(){var a=k.value;
return isNaN(a)||2>a||100<a?!1:!0},!1);h.addEventListener("submit",function(){var a=l.value;return isNaN(a)||2>a||100<a?!1:!0},!1);c=document.createElement("script");c.onload=function(){f()};c.src="qr.js";document.head.appendChild(c)};