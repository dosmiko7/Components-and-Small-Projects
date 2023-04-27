var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Ball object
var ball = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	radius: 10,
	speed: 5,
	dx: 5,
	dy: -5,
	color: "red",
	draw: function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	},
};

// Paddle object
var paddle = {
	width: 20,
	height: 100,
	x: 20,
	y: canvas.height / 2 - 50,
	color: "blue",
	draw: function () {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	},
};

// Keyboard controls
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", function (event) {
	if (event.keyCode === 38) {
		upPressed = true;
	} else if (event.keyCode === 40) {
		downPressed = true;
	}
});

document.addEventListener("keyup", function (event) {
	if (event.keyCode === 38) {
		upPressed = false;
	} else if (event.keyCode === 40) {
		downPressed = false;
	}
});

// Move paddle
function movePaddle() {
	if (upPressed && paddle.y > 0) {
		paddle.y -= 7;
	} else if (downPressed && paddle.y < canvas.height - paddle.height) {
		paddle.y += 7;
	}
}

// Collision detection
function collisionDetection() {
	// Wall collision
	if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
		ball.dx = -ball.dx;
	}
	if (ball.y + ball.dy < ball.radius || ball.y + ball.dy > canvas.height - ball.radius) {
		ball.dy = -ball.dy;
	}
	// Paddle collision
	if (ball.x - ball.radius < paddle.x + paddle.width && ball.y > paddle.y && ball.y < paddle.y + paddle.height) {
		ball.dx = -ball.dx;
	} else if (ball.x - ball.radius < paddle.x) {
		// Game over
		clearInterval(interval);
		alert("Game over!");
		document.location.reload();
	}
}

// Draw everything
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball.draw();
	paddle.draw();
	movePaddle();
	collisionDetection();
	ball.x += ball.dx;
	ball.y += ball.dy;
}

// Start game loop
var interval = setInterval(draw, 10);
