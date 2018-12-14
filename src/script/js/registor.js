define(['config'],function(){
    require(['jquery','jqvalidate'],function(){
        var wz='http://localhost/liwuyou/'
        var tel=$('#form .tel');
        var password=$('#form .password');
        var check=$('#form .check');
        var username=$('#form .username');

        function isMobile(t) {
            var reg = /^1[345789]\d{9}$/;
            return reg.test(t);
        }
        $('#form input').not('.submit').on('focus',function(){
            $(this).attr('placeholder','')
        });
        
        $('#form .tel').on('blur',function(){
            /* console.log(tel.val()) */
            var resulte=isMobile(tel.val());
            /* console.log(resulte) */
            /* if(resulte){
                $('#tel-error').text('√').css('color','green')
            }else{
                $('#tel-error').text('您输入的手机号码有误').css('color','#d93732')
            } */
            if(!resulte){
                $('#tel-error').text('您输入的手机号码有误').css('color','#d93732');
                tel.val('')
            }
            
        })
        $('#form .username').on('blur',function(){
            var user=username.val();
            if(!user){
                //console.log(user)
                $('#username-error').text('请输入用户名').css('color','#d93732')
            }
        })
        $('#form .password').on('blur',function(){
            var pass=password.val();
            if(!pass){
                //console.log(pass)
                $('#password-error').text('请输入密码').css('color','#d93732')
            }
        })
        $('#form .check').on('blur',function(){
            var r_check=check.val();
            if(!r_check){
                $('#check-error').text('请再次输入密码').css('color','#d93732')
            }
        })
        $(function(){
            $(function(){
                $('#form').validate({
                    rules:{
                        tel:{
                            required:true,
                            minlength:11,
                            maxlength:11,
                            remote:{
                                type:'post',
                                url:wz+'php/registor.php'
                            }
                        },
                        username:{
                            required:true,
                            rangelength:[2,10]
                        },
                        password:{
                            required:true,
                            maxlength:12,
                            minlength:6
                        },
                        check:{
                            required:true,
                            equalTo:".password"
                        }
                    },
                    messages:{
                            tel:{
                                required:'手机号码不能为空',
                                minlength:'不能小于11个字符',
                                maxlength:'不能多于11个字符',
                                remote:'此手机号已被占用'
                            },
                            username:{
                                required:'用户名不能为空',
                                rangelength:'用户名长度不符'
                            },
                            password:{
                                required:'密码不能为空',
                                maxlength:'密码位数过多',
                                minlength:'密码位数过少',
                            },
                            check:{
                                required:'密码重复不能为空',
                                equalTo:'密码不一致'
                            }
                    }
                })
            });
            $.validator.setDefaults({
                success: function(label){
                    label.text('√').css('color','green').addClass('valid');
                }
            });
        })
        
    })
})