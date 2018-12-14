//require.config({  })   配置模块
//针对于第三方类库，插件。
//第三方的模块。
//配置的核心：路径问题。
require.config({
	baseUrl:'https://cdnjs.cloudflare.com/ajax/libs/',//基路径，共有的路径
	paths:{
		'jquery':'jquery/1.12.4/jquery.min', //不能带js扩展名，属性名只能叫jquery
		'jqcookie':'jquery-cookie/1.4.1/jquery.cookie.min',
		'jqvalidate':'jquery-validate/1.19.0/jquery.validate.min',
		'jqlzload':'jquery.lazyload/1.9.1/jquery.lazyload.min'
	},
	shim:{//让不支持AMD的模块支持。
        'jqlzload':{
        	exports:'jqlzload',
            deps:['jquery']
		},
		'jqvalidate':{
			exports:'jqvalidate',
            deps:['jquery']
		}
    }
	/* shim:{
		'jqvalidate':['jquery'],
		'jqlzload':['jquery'],
		'jqcookie':['jquery'],
	} */
});
