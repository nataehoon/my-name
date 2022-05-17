$(function(){
    var loc = []
    var len = $('body>div').length;
    var flag = true;
    var a = 4;
    var mainme = $('.main.main01 .me .image');
    var down = $('.mainWrap .main.main03 .menu .outli .mnRight .btn .image');
    var downtxt = $('.mainWrap .main.main03 .btn h4');
    var cursorGroup = $('.mainWrap .main.main03 .menu .outli .mnRight .riTop .txtGroup');
    var cursor = $('.mainWrap .main.main03 .alert');
    var curimg = $('.mainWrap .main.main03 .alert .image');
    var curtxt = $('.mainWrap .main.main03 .alert p');
    var per = $('.mainWrap .main.main03 .txtGroup>.image .per');
    var pertxt = $('.mainWrap .main.main03 .txtGroup h5 span');
    var up = $('.mainWrap .main.main04 .infofir .btn');
    var uptxt = $('.mainWrap .main.main04 .btn h4');
    var chip = $('.mainWrap.mainWrap05 .main.main05 .gameRight .image');
    var gamema = $('.mainWrap.mainWrap05 .main.main05 .gameLeft .gameview');
    var logo = $('.logo');
    var atr = 0, curind =0, tyt =0, drop =0;
    var posX = 0 , posY = 0;
    var pernum = 0, pereach = 0;

    for(var i = 0; i<len; i++){
        loc[i]= $('body>div').eq(i).offset().top;
    }

    function moveover(move){
        // 마우스오버했을 때 창 뜨는거
        curind = $(this).index();
        console.log(curind)
        atr = curimg.attr('data-img'+curind);
        curimg.css({backgroundImage:atr});

        if(curind == 0){
            curtxt.text('웹 표준을 준수하고 일관성 있는 문서작업이 가능');
        }else if(curind == 1){
            curtxt.text('미정');
        }else if(curind == 2){
            curtxt.text('미디어쿼리를 이용한 다양한 반응형 웹을 제작, 선택자를 명확히 가져오고, hover,keyframes를 사용하여 동적인 요소 사용가능, include, mixin, for, if를 사용 가능');
        }else if(curind == 3){
            curtxt.text('돔탐색을 명확히 할 수 있고 원하는 동적인 요소를 하드코딩 가능');
        }else if(curind == 4){
            curtxt.text('grid system을 사용하여 웹사이트 시안이 가능하며 이미지 보정, 배경에서 제품 분리 등의 가공이 가능');
        }else if(curind == 5){
            curtxt.text('다양한 스타일의 아이콘을 제작 가능');
        }
        
        posX = move.clientX;
        posY = move.clientY;
        cursor.css({
            top:posY,
            left:posX,
            opacity:'1'
        });


    }

    function jump(){
        mainme.eq(0).addClass('on',function(){
            mainme.eq(1).addClass('onn');
        });
    }

    function mouse(w){
        // 마우스휠효과
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
                $('.maintop').css({opacity:1});
                $('.mainleft').css({opacity:1});
                $('.mainright').css({opacity:1});
                $('.mainbottom').css({opacity:1});
            }else if(a == 6){
                $('.gametop').css({opacity:'1'});
                $('.gameleft').css({opacity:'1'});
                $('.gameright').css({opacity:'1'});
                $('.gamebottom').css({opacity:'1'});
                pertxt.each(function(width){
                    // 그래프
                    pereach = $(this).attr('data-num');
                    $({percent:0}).animate({percent:pereach},{
                        duration:2000,
                        progress:function(){
                            pernum = this.percent;
                            console.log(pereach)
                            pertxt.eq(width).text(parseInt(pernum));
                            per.eq(width).css({width:parseInt(pernum)+'%'});
                        }
                    });
                });
            }

             if(a == 7){
                function good(){
                    for(t=0; t<3; t++){
                        setTimeout(function(){
                            tyt++;
                            $('.mainWrap04 .infLeft span').eq(tyt-1).css({display:'inline-block'});
                        },t*800);
                    }
                }
            }else{
                
                tyt = 0 ;
                $('.mainWrap04 .infLeft span').css({display:'none'});
            }
            setTimeout(good,1300);
        }
        ind = a;
    }
    
    function logoclick(){
        $('html').animate({scrollTop:loc[4]},1250,'swing',function(){
            a = 4;
            $('.gametop').css({opacity:'1'});
            $('.gameleft').css({opacity:'1'});
            $('.gameright').css({opacity:'1'});
            $('.gamebottom').css({opacity:'1'});
        });
    }
    function downclick(){
        $('html').animate({scrollTop:loc[7]},1250,'swing',function(){
            a = 7;
        });
        function good(){
            for(t=0; t<3; t++){
                setTimeout(function(){
                    tyt++;
                    $('.mainWrap04 .infLeft span').eq(tyt-1).css({display:'inline-block'});
                },t*800);
            }
        }
        setTimeout(good,1300);
    }

    function upclick(){
        $('html').animate({scrollTop:loc[6]},1250,'swing',function(){
            a = 6;
        });
    }
    chip.draggable({
        revert:true,
        drag:function(){
            drop = $(this).attr('data-img');
            gamema.css({
                animationName:'none',
            });
        }
    });

    gamema.droppable({
        drop:function(){
            gamema.css({
                backgroundImage:drop,
                animationName:'imgtb',
                animationDuration:'10s'
            });
        }
    })

    logo.click(logoclick);
    cursorGroup.mousemove(moveover);
    down.click(downclick);
    downtxt.click(downclick);
    up.click(upclick);
    uptxt.click(upclick)
    $('body').on('mousewheel',mouse);
    setTimeout(jump,3400);
    
});