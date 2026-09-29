(function(){
  var c = window.SHOP || {};
  function fill(sel,fn){document.querySelectorAll(sel).forEach(fn)}
  fill("[data-price]",function(e){e.textContent=c.price||""});
  fill("[data-oldprice]",function(e){e.textContent=c.oldPrice||""});
  fill("[data-omni]",function(e){e.textContent=c.oldPrice?"Najniższa cena z 30 dni przed obniżką: "+(c.lowestPrice30d||c.oldPrice)+" (cena brutto, zawiera VAT)":"Cena brutto, zawiera VAT"});
  fill("[data-seller]",function(e){e.textContent="Sprzedawca: "+(c.sellerName||"")});
  fill("[data-mail]",function(e){e.href="mailto:"+(c.contactEmail||"")});

  var msg=document.getElementById("msg");
  function show(t){msg.textContent=t;msg.style.display="block"}
  document.getElementById("buy").addEventListener("click",function(){
    if(!document.getElementById("consent").checked||!document.getElementById("consent2").checked){show("Zaznacz obie zgody, aby przejść do płatności.");return}
    if(!c.checkoutUrl){show("Sprzedaż wystartuje wkrótce. Napisz: "+(c.contactEmail||""));return}
    window.location.href=c.checkoutUrl;
  });

  // Ilustracyjny wykres świecowy (dane poglądowe, nie rzeczywisty rynek)
  var svg=document.getElementById("hero-chart"), NS="http://www.w3.org/2000/svg";
  function el(n,a){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);svg.appendChild(e);return e}
  var d=[[150,138,152,132],[138,146,150,134],[146,128,148,124],[128,120,132,116],[120,126,130,116],[126,110,128,106],[110,116,120,104],[116,132,136,112],[132,140,146,128],[140,124,142,120],[124,104,126,100],[104,92,108,88],[92,84,96,78],[84,88,94,80],[88,70,90,66],[70,60,74,54],[60,44,62,40],[44,50,56,38],[50,32,52,28]]; // open, close, high, low (y)
  for(var g=1;g<5;g++)el("line",{x1:0,x2:400,y1:g*48,y2:g*48,stroke:"#1f2c3d","stroke-width":1});
  el("line",{x1:0,x2:400,y1:150,y2:150,stroke:"#4da3ff","stroke-width":1.5,"stroke-dasharray":"5 4"});
  var t=el("text",{x:8,y:166,fill:"#4da3ff","font-size":10,"font-family":"system-ui"});t.textContent="strefa Fresh";
  d.forEach(function(k,i){
    var x=16+i*20, up=k[1]<k[0], col=up?"#2fd39a":"#ff5d6c";
    el("line",{x1:x,x2:x,y1:k[2],y2:k[3],stroke:col,"stroke-width":1.5});
    el("rect",{x:x-5,y:Math.min(k[0],k[1]),width:10,height:Math.max(3,Math.abs(k[0]-k[1])),fill:col,rx:1});
  });
  var tp=el("line",{x1:250,x2:400,y1:30,y2:30,stroke:"#2fd39a","stroke-width":1.2,"stroke-dasharray":"4 4"});
  var tt=el("text",{x:322,y:24,fill:"#2fd39a","font-size":10,"font-family":"system-ui"});tt.textContent="Take Profit";
  var sl=el("line",{x1:250,x2:400,y1:150,y2:150,stroke:"#ff5d6c","stroke-width":1.2,"stroke-dasharray":"4 4",opacity:0});

  // Pojawianie się sekcji + pasek zakupu
  var io=("IntersectionObserver" in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12}):null;
  fill(".rv",function(e){io?io.observe(e):e.classList.add("in")});
  var st=document.getElementById("sticky"),hero=document.querySelector(".hero"),kup=document.getElementById("kup");
  function upd(){
    var y=window.scrollY, past=y>hero.offsetHeight-80, atBuy=kup.getBoundingClientRect().top<window.innerHeight*.7;
    st.classList.toggle("on",past&&!atBuy);
  }
  window.addEventListener("scroll",upd,{passive:true});upd();
})();
