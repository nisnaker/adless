(function () {

	var _func = function () {
		// left

		var left = document.getElementById('content_left');
		var as = left.getElementsByTagName('a');

		var ad_links = [
			'http://e.baidu.com/?id=1',
			'http://e.baidu.com/?refer=666',
			'http://e.baidu.com/'
		];

		var ads = [];
		for(i in as) {
			var a = as[i];
			if(ad_links.indexOf(a.href) != -1) {
				ads.push(a)
			}
		}

		for(i in ads) {
			rm(ads[i])
		}

		function rm (dom) {
			while(true) {
				if(left == dom.parentNode) {
					break
				}
				dom = dom.parentNode;
			}

			dom.className += ' adless';
			// left.removeChild(dom);
		}

		// right
		var ad = document.getElementById('ec_im_container').parentNode;
		ad.className += ' adless';
		// ad.parentNode.removeChild(ad);
	}

	// setTimeout(_func, 1000);
	_func();
})();