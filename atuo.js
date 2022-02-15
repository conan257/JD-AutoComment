var content = '材质很好，质量也不错，到货也很快物流满分，包装快递满分，配送员态度满分，好评';  
function a(){
var close=document.getElementsByClassName('btn-9 fail-close');
if(close.length>0){close[0].click()}
var assess=document.getElementsByClassName('btn-9')[0];
if(assess!=null){for(var i=0;i<2;i++){
assess.click();
var area=document.getElementsByClassName('area area01')[0];
area.value=content;area.setAttribute('id','id'+0);
$('#id'+0).blur();
var star=document.getElementsByClassName('star5')[0];star.click()}
var submit=document.getElementsByClassName('btn-5 mr10 setcomment')[0];
submit.click();
setTimeout('a()',5000)}};
a();
