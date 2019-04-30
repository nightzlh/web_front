function getVendorPrefix() {
	// 使用body是为了避免在还需要传入元素
        var body = document.body || document.documentElement,
            style = body.style,
            vendor = ['webkit', 'khtml', 'moz', 'ms', 'o'],
            i = 0;
	//console.log(style);
        while (i < vendor.length) {
            // 此处进行判断是否有对应的内核前缀
            if (typeof style[vendor[i] + 'Transition'] === 'string') {
                return vendor[i];
            }
            i++;
        }
}

function supportCss3(style) {
	var prefix = ['webkit', 'Moz', 'ms', 'o'],
	i,
	humpString = [],
	htmlStyle = document.documentElement.style,
	_toHumb = function (string) {
		return string.replace(/-(\w)/g, function ($0, $1) {
                    return $1.toUpperCase();
                });
	};

        for (i in prefix)
            humpString.push(_toHumb(prefix[i] + '-' + style));

        humpString.push(_toHumb(style));

        for (i in humpString)
            if (humpString[i] in htmlStyle) return true;

        return false;
}

function isCssValueValid(attr, val) {
	var element = document.createElement('div');
	if(attr in element.style) {
		element.style[attr] = val;
		return element.style[attr] === val;
	} else {
		return false;
	}
}
