define(['config'],function(){
    require(['jquery','jqvalidate','jqcookie'],function(){
        var wz='http://localhost/liwuyou/'
        $('#form1 input').not('.submit').on('focus',function(){
            $(this).attr('placeholder','')
        });
        $('#form1 .username').on('blur',function(){
            var use=$('#form1 .username').val();
            if(!use){
                $('#username-error').text('请输入用户名').css('color','#d93732')
            }
        })
        $('#form1 .password').on('blur',function(){
            var pass=$('#form1 .password').val();
            if(!pass){
                $('#password-error').text('请输入密码').css('color','#d93732')
            }
        })
        var obtn=$('#form1 .submit')
        obtn.on('click',function(){
            var use_value=$('#form1 .username').val();
            var pass_value=$('#form1 .password').val();
            var tel_value=$('#form1 .tel').val();
            /* if(!$('#form1 .tel').val()){
                $('#tel-error').text('手机号码/邮箱不能为空').css('color','#d93732')
            }
            if(!$('#form1 .password').val()){
                $('#password-error').text('密码不为空').css('color','#d93732')
            } */
            $.ajax({
                type:'post',
                url:wz+'php/login.php',
                data:{
                    user:use_value,
                    password:pass_value
                },
                success:function(data){
                    //var arr=JSON.parse(data)
                    if(!data){
                        alert('登录失败');
                        $('#form1 .username').val('');
                        $('#form1 .password').val('');
                    }else{
                        location.href=wz+'src/index.html';
                        if($("input[type='checkbox']").prop("checked")){
                            $.cookie('user',use_value,{expires:30})
                            $.cookie('password',pass_value,{expires:30})
                        }else{
                            $.cookie('user',use_value)
                            $.cookie('password',pass_value)
                        }
                    }
                }
            })
        })
        
    })
})