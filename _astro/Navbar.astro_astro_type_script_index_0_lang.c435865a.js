(function(e,s,d,t,c){e[t]=e[t]||[],e[t].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var i=s.getElementsByTagName(d)[0],a=s.createElement(d),m=t!="dataLayer"?"&l="+t:"";a.async=!0,a.src="https://www.googletagmanager.com/gtm.js?id="+c+m,i.parentNode.insertBefore(a,i)})(window,document,"script","dataLayer","GTM-WC94GBC");const o=document.getElementById("menuBtn"),n=document.getElementById("menu");o.addEventListener("click",()=>{setTimeout(()=>{n.classList.remove("hidden"),n.classList.add("flex")},10)});document.addEventListener("click",e=>{n.contains(e.target)||(n.classList.remove("flex"),n.classList.add("hidden"))});