define(['config'],function(){
    /* 创意礼物数据 && 放大镜 */
    require(['jquery'],function(){
        /* 后端接受前面点击选择的sid并从数据库中选择出对应的资料传给详情页 */
        var picid=location.search.substring(1).split('=')[1]
        $.ajax({
            url:'http://localhost/liwuyou/php/get.php',
            data:{
                sid:picid
            },
            dataType:'json'
    }).done(function(datas){
        $('.upper #detail_title').html(datas.detail_title);
        $('.content .detail h3').html(datas.detail_title);
        $('.content .detail p').html(datas.detail_content);
        $('.content .price .price_left').html(datas.price);
        $('.content .df').attr('sid',datas.sid)
        $('.content .detail .buy img').attr('src',datas.url);
        //console.log(datas.urls);
        var arr=datas.urls.split(',');
        var $str=''; 
        $.each(arr,function(index,value){
            $str+='<li><img src="'+value+'"></li>'
        })
        $('.content .glass .glass_left').html($str);
        $('.content .glass .scale img').attr('src',arr[0]);
    })

        /* 放大镜 */
        var $pic=$('.content .glass .left');
        $pic.on('mouseover',function(event){
            var ele=$(event.target);
                /* console.log(ele) */
                /* alert(1) */
                /* alert(ev.target.nodeName) */
               /*  console.log($(this)); */
            ele.parent().css("border-color","#d93732").siblings().css("border-color","#e6e6e6")
            var ele_stc=ele.attr('src');
            /* console.log(ele_stc) */
            $('.glass .scale img').attr('src',ele_stc);
        });

        
        var $scale=$('.scale');
        var $sf=$('.scale .sf');
        var $st=$('.scale .st');
        var $df=$('.scale .df');
        var $dt=$('.scale .dt');
        $st.on('mouseover',function(){
            $sf.css('visibility','visible')
            $df.css('visibility','visible');
            $st.on('mousemove',function(event){
                /* var ev=event||window.event */
                var $sf_width=$st.width()*$df.width()/$dt.width();
                var $sf_height=$st.height()*$df.height()/$dt.height();
                var $sf_top=event.pageY-$scale.offset().top-$sf.height()/2;
                var $sf_left=event.pageX-$scale.offset().left-$sf.width()/2;
                var $bili=$dt.outerWidth()/$st.outerWidth();
                $sf.css({
                    'width':$sf_width,
                    'height':$sf_height,
                    'top':$sf_top,
                    'left':$sf_left
                })
                if($sf_top<0){
                    $sf.css('top',0);
                    $sf_top=0
                }else if ($sf_top>($st.height()-$sf.height())){
                    $sf.css('top',($st.height()-$sf.height()))
                    $sf_top=$st.height()-$sf.height()
                }
                if($sf_left<0){
                    $sf.css('left',0)
                    $sf_left=0
                }else if($sf_left>($st.width()-$sf.width())){
                    $sf.css('left',($st.width()-$sf.width()))
                    $sf_left=$st.width()-$sf.width()
                }
                $dt.css({
                    'top':-($sf_top)*$bili,
                    'left':-($sf_left)*$bili
                })
            })
        })
        $st.on('mouseout',function(){
            $sf.css('visibility','hidden');
            $df.css('visibility','hidden');
        })
        
    });
    /*加入购物车 */
    require(['jquery','jqcookie'],function(){
        var picid=location.search.substring(1).split('=')[1]
        var arrsid=[];
        var arrnum=[];
        function cookietoarray(){
            if($.cookie('sid') && $.cookie('num')){
                arrsid=$.cookie('sid').split(',');
                arrnum=$.cookie('num').split(',');
            }
        }

        $('.content .detail .buy').on('click',function(){
            location.reload(true)
            //var id=$(this).parents('.content').find('.dt').attr('sid');
            //console.log(id);
            cookietoarray();
            if($.cookie('user')){
                if($.inArray(picid,arrsid)!=-1){//判断是否存在这个id值;存在的话只加载对应的数量
                    var num=parseInt(arrnum[$.inArray(picid,arrsid)])+1;
                    arrnum[$.inArray(picid,arrsid)]=num;
                    $.cookie('num',arrnum.toString(),{expires:30})
                }else{//不存在就在原本的cookie数据中加入一对新的数据
                    arrsid.push(picid);
                    $.cookie('sid',arrsid.toString(),{expires:30});
                    arrnum.push(1);
                    $.cookie('num',arrnum.toString(),{expires:30});
                }
            }else{
                alert('请先登录')
            }
        })
    })
})