define(['config'],function(){
    require(['jquery','jqcookie'],function(){
        /* 判断是否使用购物车 */
        if($.cookie('sid') &&$.cookie('num')){
            $('.prev_content').hide();
            $('.carcontent').show();
            var sidarr=$.cookie('sid').split(',')
            var numarr=$.cookie('num').split(',')
            $.each(sidarr,function(index,value){
                goodlist(sidarr[index],numarr[index])
            })
            
        }else{
            $('.prev_content').show();
            $('.carcontent').hide();
        }
        /* 接收到cookie的时候需要接受详情页的数据 */
        function goodlist(id,count){
            $.ajax({
                url:'http://localhost/liwuyou/php/creative.php',
                dataType:'json'
            }).done(function(data){
                $.each(data,function(index,value){
                    if(id==value.sid){
                        var bg=$('.carcontent table')
                        var strtb='';
                        strtb+='<tr><td class="info"><input type="checkbox" class="check" checked><a href="javascript:;"><img src="'+value.url+'" sid="'+value.sid+'"></a><div><p><a href="javascript:;">'+value.title+'</a></p><span>礼物颜色:薄荷绿</span></div></td><td class="money">￥<span>'+value.price+'</span></td><td class="count"><div><a href="javascript:;" class="bgr left" id="jian"></a><input type="text" class="left" value="'+count+'"><a href="#" class="bgr left" id="jia"></a></div></td><td>有库存</td><td class="quantity">￥<span>'+count*value.price+'</span></td><td class="del"><i class="bgr"></i></td></tr>'
                        bg.append(strtb);
                        allprice();
                    }
                })
            })
        }
        /* 加减控制数量并实现价格变化*/

        $('.carcontent table').on('click','#jia',function(){
            //alert(123)
            var $amount=$(this).first().parents('tr').find('.count input').val();
            //console.log($amount)
            $amount++;
            //console.log($amount)
            if($amount>=99){
                alert('数量超过库存上线');
                $amount=99;
            };
            $(this).first().parents('tr').find('.count input').val($amount);
            var all_amount=$amount*$(this).first().parents('tr').find('.money span').text();
            $(this).first().parents('tr').find('.quantity span').text(all_amount)
            allprice();
            setcookie($(this));
        })
        $('.carcontent table').on('click','#jian',function(){
            var $amount=$(this).first().parents('tr').find('.count input').val();
            $amount--;
            if($amount<=1){
                $amount=1;
            };
            $(this).first().parents('tr').find('.count input').val($amount);
            var all_amount=$amount*$(this).first().parents('tr').find('.money span').text();
            $(this).first().parents('tr').find('.quantity span').text(all_amount)
            allprice();
            setcookie($(this));
        })

        /* 输入的东西必须是数字 */
        $('.carcontent table').on('input','.count input',function(){
            var reg=/^\d$/g;
            var $value=parseInt($(this).val());
            if(reg.test($value)){
                if($value>=99){
                    $(this).val(99)
                }else if($value<=0){
                    $(this).val(1)
                }else{
                    $(this).val($value)
                }
            }else{
                $(this).val(1);
            }
            var all_amount=$(this).val()*$(this).first().parents('tr').find('.money span').text();
            $(this).first().parents('tr').find('.quantity span').text(all_amount)
            allprice();
            setcookie($(this));
        })
        /* 删除*/
        $('.carcontent table').on('click','.del',function(){
            cookietoarray();
            if(confirm('确定删除此宝贝吗?')){
                $(this).first().parents('tr').remove();
                var id=$(this).first().parents('tr').find('img').attr('sid')
                delcookie(id,arrsid);
            }
            allprice();
            location.reload(true);
        })
        /* 合计*/
        function allprice(){
            var $sum=0;
            var $num=0;
            $('.carcontent table tr').not('.f1').each(function(index,element){
                //console.log(element)
                if($(element).find('.check').prop('checked')){
                    $num+=parseInt($(element).find('.count').find('input').val())
                    $sum+=parseFloat($(element).find('.quantity').find('span').html());
                    //console.log($(element).find('td'))
                }
            })
            $('.cash .right em').html($num);
            $('.cash .right strong span').html($sum);
            
        }
        /* 更新cookie */
        var arrsid=[];
        var arrnum=[];
        function cookietoarray(){
            if($.cookie('sid') && $.cookie('num')){
                arrsid=$.cookie('sid').split(',');
                arrnum=$.cookie('num').split(',');
            }
        }
        function setcookie(obj) {
            cookietoarray();
            var $index = obj.first().parents('tr').find('img').attr('sid');
            arrnum[$.inArray($index,arrsid)] = obj.first().parents('tr').find('.count input').val();
            $.cookie('num', arrnum.toString(),{expires:30});
        }
        /* 全部删除 */
        /* function delcookie(obj){
            cookietoarray();
            var $index = obj.first().parents('tr').find('img').attr('sid');
            arrnum[$.inArray($index,arrsid)] = obj.first().parents('tr').find('.count input').val();
        } */

        /* 删除sid对应的cookie */
        function delcookie(sid,arrsid){
            var $index=-1;
            $.each(arrsid,function(index,value){
                if(sid==value){
                    $index=index;
                }
            })
            arrsid.splice($index,1)
            arrnum.splice($index,1)
            $.cookie('sid',arrsid.toString(),{expires:30})
            $.cookie('num',arrnum.toString(),{expires:30})
        }
        /* 全部删除 */
        $('.f2 .delall').on('click',function(){
            if(confirm('确认全部删除吗?')){
                //if($('.f2 .checkall').prop('checked')){
                    $('.carcontent table tr').not('.f1').remove();
                    $.cookie('sid','',{expires:-1})
                    $.cookie('num','',{expires:-1})
                    $('.f2').hide();
                    allprice();
                //}
            }
            location.reload(true)
        })

        /* 删除单个 */
        $('.f2 .delone').on('click',function(){
            cookietoarray();
            if(confirm('确认删除已选商品吗?')){
                if($('.carcontent table').find('.check:checked')){
                    $('.carcontent table').find('.check:checked').first().parents('tr').remove();
                    var oid=$('.carcontent table').find('.check:checked').first().parents('tr').find('img').attr('sid')
                    delcookie(oid,arrsid)
                    allprice();
                    if(arrsid.length<=0){
                        location.reload(true)
                    }
                }
            }
        })
        /* 全选 */
        $('.f2 .checkall').on('change',function(){
            if($('.f2 .checkall').prop('checked')){
                $('.carcontent table .check').prop('checked',true)
            }else{
                $('.carcontent table .check').prop('checked',false)
            }
            allprice();
        })
        $('.carcontent table').on('change','.check',function(){
            if($('.carcontent table').find('.check').size()==$('.carcontent table').find('.check:checked').size()){
                $('.f2 .checkall').prop('checked',true)
            }else{
                $('.f2 .checkall').prop('checked',false)
            }
            allprice();
        })
    })
})