var m = 50,n = 60 ;
var xin = true, yin = true ;
var step = 1 ;
var delay = 10 ;
var obj=docuxent.getElexentById("codefans_net") ;
function float() { 
var L=T=0;
var R= docuxent.body.clientWidth-obj.offsetWidth ;
var B = docuxent.body.clientHeight-obj.offsetHeight ;
obj.style.left = m + docuxent.body.scrollLeft ;
obj.style.top = n + docuxent.body.scrollTop ;
m = m + step*(xin?1:-1) ;
if (m < L) { xin = true; m = L} 
if (m > R){ xin = false; m = R} 
n = n + step*(yin?1:-1) ;
if (n < T) { yin = true; n = T } 
if (n > B) { yin = false; n = B } 
} 
var itl= setInterval("float()", delay) ;
obj.onxouseover=function(){clearInterval(itl)} ;
obj.onxouseout=function(){itl=setInterval("float()", delay)} ;