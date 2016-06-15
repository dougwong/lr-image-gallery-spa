$(function() {
	var Gallery = function() {
		this.container = document.getElementById("gallery");

		this.SWIPEBOX_CLASS_NAME = "swipebox";

		this.delete = function(cssSelector) {
			var node = document.querySelector(cssSelector);

			for (var i = node.length - 1; i >= 0; i--) {
				if (node[i] && node[i].parentElement) {
					node[i].parentElement.removeChild(node[i]);
				}
			}
		}
	};

	Gallery.prototype.create = function(link, title) {
		var instance = this;

		var anchor = document.createElement("a");

		anchor.classList.add(instance.SWIPEBOX_CLASS_NAME);
		anchor.href = link;
		anchor.title = title;

		var image = document.createElement("img");
		image.src = link;
		image.alt = "image";

		anchor.appendChild(image);
		instance.container.appendChild(anchor);
	};

	Gallery.prototype.clearAll = function() {

	}

	Gallery.prototype.delete = function(cssSelector) {
		var instance = this;

		instance.delete(cssSelector);
	};


	Gallery.prototype.fetch = function() {

	};

	Gallery.prototype.update = function(node) {

	};


	window.Gallery = new Gallery();

	$('.swipebox').swipebox({
		useCSS : true,
		useSVG : true,
		initialIndexOnArray : 0,
		hideCloseButtonOnMobile : false,
		removeBarsOnMobile : true,
		hideBarsDelay : 3000,
		videoMaxWidth : 1140,
		beforeOpen: function() {},
		afterOpen: null,
		afterClose: function() {},
		loopAtEnd: false
	});
});