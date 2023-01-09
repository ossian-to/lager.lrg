var spark = function() {
	if (!window.addEventListener) {
		return;
	}
	var canvas = document.getElementById('J-sparks'),
		ctx = canvas.getContext('2d'),
		canvasWidth = canvas.width,
		canvasHeight = canvas.height,
		sparkles = [],
		timer;

	function draw() {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		sparkles.forEach(function(p, i) {
			ctx.fillStyle = i % 2 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)';
			ctx.beginPath();
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		});
		update();
	}

	function update() {
		sparkles.forEach(function(p, i) {
			p.y -= Math.cos(1 + p.d) + 0.5 + p.r / 2;
			p.x -= Math.sin(1) * 2;

			if (p.x < -5 || p.y < 0) {
				if (i % 3 > 0) {
					sparkles[i] = {
						x: Math.random() * canvasWidth,
						y: canvasHeight - 10,
						r: p.r,
						d: p.d
					};
				} else {
					sparkles[i] = {
						x: -5,
						y: Math.random() * canvasHeight,
						r: p.r,
						d: p.d
					};
				}
			}
		});
	}

	// function clear() {
	// 	if (timer) {
	// 		clearInterval(timer);
	// 	}
	// 	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	// 	reset();
	// }

	function start() {
		timer = setInterval(draw, 33);
	}

	function reset() {
		var max = 40;
		for (var i = 0; i < max; i++) {
			sparkles[i] = {
				x: Math.random() * canvasWidth,
				y: Math.random() * canvasHeight,
				r: Math.random() * 3 + 0.75,
				d: Math.random() * max
			};
		}
	}

	function init() {
		reset();
		start();
	}

	return {
		init: init
	};
}();

spark && spark.init();