$(function(){
    var loc = []
    var len = $('body>div').length;
    var flag = true;
    var a = 4;
    var chip = $('.mainWrap.mainWrap05 .image');
    var mainme = $('.main.main01 .me .image');

   mainme.eq(0).addClass('on',function(){
        mainme.eq(1).addClass('onn');
    });
    
    function slide(){}

    setInterval(slide,1000);

    for(var i = 0; i<len; i++){
        loc[i]= $('body>div').eq(i).offset().top;
    }

    function mouse(w){
        var wh = w.originalEvent.wheelDelta;

        if(flag){
            if(wh>0){
                a--;
                flag=false;
                if(a<=4){a=4;}
            }else{
                a++;
                flag=false;
                if(a>=9){a=9;}
            }
            console.log(a)
            $('html').animate({scrollTop:loc[a]},1250,'swing',function(){
                flag=true;
            });
            if(a>7){
                $('.gametop').css({opacity:'0'});
                $('.gameleft').css({opacity:'0'});
                $('.gameright').css({opacity:'0'});
                $('.gamebottom').css({opacity:'0'});
            }else if(a == 6){
                $('.gametop').css({opacity:'1'});
                $('.gameleft').css({opacity:'1'});
                $('.gameright').css({opacity:'1'});
                $('.gamebottom').css({opacity:'1'});

            }
        }
    }
    chip.draggable({
        revert:true,
        drag:function(){
        }
    });

    $('body').on('mousewheel',mouse);
    
});