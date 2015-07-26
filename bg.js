chrome.webRequest.onBeforeRequest.addListener (
	function(details) {
		return {cancel: is_ad(details.url)};
	},
	{urls:[
		'*://*/*.js',
		'*://p.tanx.com/*',
		'*://*.yigao.com/*',
		]},
	["blocking"] 
)

function is_ad(url){
	var ad_list = [
		'cpro.baidu.com',
		'cpro.baidustatic.com',
		'cbjs.baidu.com',

		'j.77power.com',

		'images.sohu.com',

		'impservice.union.youdao.com',

		'pagead2.googlesyndication.com',

		'p.tanx.com',
		'cdn.tanx.com',

		'p.yigao.com',
		'monitor.yigao.com',

		'static.mediav.com',
	];

	for(i in ad_list)
	{
		if(url.indexOf(ad_list[i]) != -1) return true;
	}

	return false;
}
