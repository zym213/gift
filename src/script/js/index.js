define(['config'],function(){
    require(['jquery','jqcookie'],function(){
        var wz='http://localhost/liwuyou/src/'
        /* ---引入头部和尾部---- */
        $('.header').load(wz+'header.html',function(){
            /* 头部logo的划入 */
            var $logo=$('.h_top .logo');
            $logo.hover(function(){
                $(this).find('h1').stop(true).animate({
                    'background-position-x':'-57px'
                })
            },function(){
                $(this).find('h1').stop(true).animate({
                    'background-position-x':'0px'
                })
            })
            $logo.on('click',function(){
                location.href=wz+'index.html'
            })

            /* 头部登录的划入 */
            var $user=$('.user .user_login');
            $user.hover(function(){
                $(this)>$('.user_login i').stop(true).animate({
                    'background-position-y':'-14px'
                })
            },function(){
                $(this)>$('.user_login i').stop(true).animate({
                    'background-position-y':'0px'
                })
            }).on('mouseover',function(){
                $('.user .userbox').show()
                
            }).on('mouseout',function(){
                $('.user .userbox').hide()
            })

            /* 头部购物车的划入 */
            var $car=$('.user .user_car');
            $car.hover(function(){
                $(this)>$('.user_car i').stop(true).animate({
                    'background-position-y':'-14px'
                })
            },function(){
                $(this)>$('.user_car i').stop(true).animate({
                    'background-position-y':'0px'
                })
            })

            /* subnav里面的tab切换  */
            var $who=$('.subnav .who a');
            var $why=$('.subnav .why p');
            $who.on('click',function(){
                $(this).addClass('add').siblings().removeClass('add');
                $why.eq($(this).index()).show().siblings().hide();
            })

            var $who_p=$('.subnav .who p');
            var $why_a=$('.subnav .why a');
            $why_a.on('click',function(){
                $(this).addClass('add').siblings().removeClass('add');
                $who_p.eq($(this).index()).show().siblings().hide();
            })

            /* cookie保存 */
            if($.cookie('user') && $.cookie('password')){
                $('.user .user_login .username').text($.cookie('user')).show();
                $('.user .user_login .back').show();
                $('.user .user_login p').hide();
            }

            $('.user_login .back').on('click',function(){
                $.cookie('user','',{expires:-1});
                $.cookie('password','',{expires:-1});
                $('.user .user_login .back').hide();
                $('.user .user_login p').show();
                $('.user .user_login .username').hide().text('');
            })

            $('.user .user_login').on('click',function(){
                location.href=wz+'login.html'
            })

        });
        $('.footer').load(wz+'footer.html');
        $('.footers').load(wz+'footer.html .f_top,.middle');

        /* ---轮播图---- */
        var $pics=$('.banner .pics li');
        var $btns=$('.banner .btns i');

        $btns.hover(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $pics.eq($(this).index()).stop(true).animate({
                opacity:1,
                filter:'alpha(opacity='+100+')'
            }).siblings().animate({
                opacity:0,
                filter:'alpha(opacity='+0+')'
            })
        });
        

        /* 滚动条距离超过98px出现侧边栏 */

        $(window).on('scroll',function(){
            var $top=$(window).scrollTop();
            if($top>98){
                $('.aside').show();
                /* console.log($top) */
            }else{
                $('.aside').hide();
            }
        })

        /* 侧边栏返回顶部 */
        var $bt=$('.aside .bt')
        $bt.on('click',function(){
            $('body,html').animate({
                scrollTop:0
            })
        })

        /* 侧边栏楼梯 */
        $('.aside .louti').on('click',function(){
            var $goodstop=$('.section .goods .louceng').eq($(this).index('.louti')).offset().top-20;
            $('body,html').animate({
                scrollTop:$goodstop
            })
        })

        /* 移动热评 */
        $('.hot').hover(function(){
            $('.hot #left').show();
            $('.hot #right').show();
        },function(){
            $('.hot #left').hide();
            $('.hot #right').hide();
        })
        var count=4;
        $('.hot #right').on('click',function(){
            var list=$('.hot ul li')
            if(list.length>count){
                count++;
                $('.hot ul').stop(true).animate({
                    'left':-list.eq(1).outerWidth(true)*(count-4)
                })
            }
        })
        $('.hot #left').on('click',function(){
            var list=$('.hot ul li')
            if(count>4){
                count--;
                $('.hot ul').stop(true).animate({
                    'left':-list.eq(1).outerWidth(true)*(count-4)
                })
            }
            
        })
        
    })

    require(['jquery','jqlzload'],function(){
        /* 首页创意礼物部分获取数据库数据 */
        var wz='http://localhost/liwuyou/'
        var $oUl=$('.section .creative .b_bottom ul')
        var $aUl=$('.section .birthday .b_bottom ul')
        $.getJSON(wz+'php/creative.php',function(data){
            $.each(data,function(index,value){
                if(index<8){
                    if(index>3){
                        var $strhtml='<li class="left t15"><a target="_blank" href="'+wz+'src/details.html?sid='+value.sid+'"><img class="lazy" data-original="'+value.url+'"><span>'+value.title+'</span></a><span>￥'+value.price+'</span></li>'
                    }else{
                        var $strhtml='<li class="left"><a target="_blank"  href="'+wz+'src/details.html?sid='+value.sid+'"><img class="lazy" data-original="'+value.url+'"><span>'+value.title+'</span></a><span>￥'+value.price+'</span></li>'
                    }
                }
                $oUl.append($strhtml);
            });
            $.each(data,function(index,value){
                if(index>7){
                    if(index>11){
                        var $strhtml='<li class="left t15"><a target="_blank" href="'+wz+'src/details.html?sid='+value.sid+'"><img class="lazy" data-original="'+value.url+'"><span>'+value.title+'</span></a><span>￥'+value.price+'</span></li>'
                    }else{
                        var $strhtml='<li class="left"><a target="_blank"  href="'+wz+'src/details.html?sid='+value.sid+'"><img class="lazy" data-original="'+value.url+'"><span>'+value.title+'</span></a><span>￥'+value.price+'</span></li>'
                    }
                }
                $aUl.append($strhtml)
            })
            $(function(){
                $('.lazy').lazyload({
                    effect:"fadeIn"
                })
            })
        });
    
    });
})

