window.addEventListener('load',function(){
    var lbt=document.querySelector('.lbt');
    var ul=lbt.querySelector('ul');
    var ol=lbt.querySelector('ol');
    var zb=document.querySelector('.zuo');
    var yb=document.querySelector('.you');
    var flag=true;
    lbt.addEventListener('mouseover',function(){
        zb.style.display='block';
        yb.style.display='block';
        clearInterval(times);
        times=null;
        
    })
    lbt.addEventListener('mouseout',function(){
        zb.style.display='none';
        yb.style.display='none';
       times=setInterval(function(){
            yb.click();
        },3000)
    })
    // 左右箭头模块结束
    for(var i=0;i<ul.children.length;i++){
        var li=document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        ol.children[0].style.backgroundColor='#fff';
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].style.backgroundColor='#333';
            }
            this.style.backgroundColor='#fff';
            var index=this.getAttribute('index');
            sum=index;
            num=index;
            animate(ul,-index*lbt.offsetWidth);
        })
    }
    // 自动生成小圆圈以及轮播图跟随小圆圈来变化模块结束
    var num=0;
    var sum=0;
    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);
    yb.addEventListener('click',function(){
       if(flag){
        flag=false;
        if(num==ul.children.length-1){
            num=0;
            ul.style.left=0;
        }
        num++;
        animate(ul,-num*lbt.offsetWidth,function(){
            flag=true;
        })
        sum++;
        if(sum==ol.children.length){
            sum=0;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].style.backgroundColor='#333';
        }
        ol.children[sum].style.backgroundColor='#fff';
       }
    })
// 右箭头模块结束
zb.addEventListener('click',function(){
   if(flag){
    flag=false;
    if(num==0){
        num=ul.children.length-1;
        ul.style.left=(ul.children.length-1)*lbt.offsetWidth;
    }
    num--;
    animate(ul,-num*lbt.offsetWidth,function(){
        flag=true;
    })
    sum--;
    if(sum<0){
        sum=ol.children.length-1    ;
    }
    for(var i=0;i<ol.children.length;i++){
        ol.children[i].style.backgroundColor='#333';
    }
    ol.children[sum].style.backgroundColor='#fff';
   }
})
// 左箭头模块结束
    var times=setInterval(function(){
        yb.click();

      },3000)
   
    //   轮播图模块基本结束
    var dd=document.querySelector('.dd');
    var dt=document.querySelector('.dt');
    dt.addEventListener('mouseover',function(){
        dd.style.display='block';
    })
    dt.addEventListener('mouseout',function(){
        dd.style.display='none';
    })
    // 显示与隐藏导航栏模块结束
    var ss=document.querySelector('.sousuo')
    var ipt=ss.querySelector('input');
    ipt.addEventListener('focus',function(){
        if(this.value=='油烟机'){
            this.value='';
        }
        this.style.color='#000';

    })
    ipt.addEventListener('blur',function(){
        if(this.value==''){
            this.value='油烟机';
        }
        this.style.color='#ccc';

    })
    // 搜索框模块结束
    var gd=document.querySelector('.gd');
    var two=document.querySelector('.two')
    var li=gd.querySelectorAll('li');
    var mr=document.querySelector('.mrbk');
    document.addEventListener('scroll',function(){
        if(window.pageYOffset>=two.offsetTop){
            li[2].style.display='block';
           gd.className='dw';

           
        }
        
        else{
            li[2].style.display='none';
            gd.className='gd';
            li[0].style.backgroundColor='pink';
        }


       
    })
    li[0].addEventListener('click',function(){
        window.scroll(0,two.offsetTop)
    })
    li[1].addEventListener('click',function(){
        window.scroll(0,mr.offsetTop)
    })
    li[2].addEventListener('click',function(){
        window.scroll(0,0)
    })

})