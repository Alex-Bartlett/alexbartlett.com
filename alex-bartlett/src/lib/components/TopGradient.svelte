<div class="scale-150 gradient-main -z-10">
	<div class="gradient-container">
		<div class="g g1"></div>
		<div class="g g2"></div>
		<div class="g g3"></div>
	</div>
</div>

<style>
	.gradient-main {
		position: absolute;
	}
	.gradient-container {
		transform: translate(-200px, -100px);
	}
	.g {
		position: absolute;
		height: 400px;
		width: 400px;
	}
	.g1 {
		background: radial-gradient(#8f498d8c, #712c8761, #fff0, #fff0);
	}
	.g2 {
		transform: translate(150px, -100px);
		background: radial-gradient(#fc466a79, #fc466a38, #fff0, #fff0);
	}
	.g3 {
		transform: translate(300px, -150px) scale(0.8, 0.8);
		background: radial-gradient(#fc7a4679, #fc7a4638, #fff0, #fff0);
	}
</style>
