(function () {

	var _func = function () {
		// left

		var left = document.getElementById('content_left');
		var as = left.getElementsByTagName('a');

		var ads = [];
		for(i in as) {
			var a = as[i];
			if('广告' == a.innerText) {
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
		// var ad = document.getElementById('ec_im_container').parentNode;
		// ad.className += ' adless';
		// ad.parentNode.removeChild(ad);
	}

	setInterval(_func, 500);
	_func();
})();