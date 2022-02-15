var time;  
function a() {  
    var close = document.getElementsByClassName('btn-9');  
    if (close.length > 0) {  
        close[0].click()  
        var imgs = document.getElementsByName('imgs1')[0];  
        if (imgs != null) {  
            imgs.value = "//img30.360buyimg.com/shaidan/jfs/t1/6705/38/12113/103591/60c24cabEc36e6ca3/56382fbdaf284ee1.jpg";
//图片地址  
            var submit = document.getElementsByClassName('btn-5 mr10 setcomment')[0];  
            submit.click();  
            time = setTimeout('a()', 5000)  
        }  
    } else {  
        clearTimeout(time);  
    }  
};  
a();
