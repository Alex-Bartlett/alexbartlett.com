if (document.getElementById("rotateObject")) {
	let object = document.getElementById("rotateObject").animate(
		[{ transform: "translate(-50%, -50%)" },
		{ transform: "translate(-50%, 150%)" },
		{ transform: "translate(-50%, -50%)" }],
		{
			duration: 1000,
			iterations: Infinity,
			easing: "ease-in-out"
		}
	);
}
if (document.getElementById("rotateText")) {
	let text = document.getElementById("rotateText").animate(
		[{ transform: "rotate(0deg)" },
		{ transform: "rotate(360deg)" }],
		{
			duration: 2000,
			iterations: Infinity
		}
	)
}
if (document.getElementById("growText")) {
	document.getElementById("growText").animate(
		[{ fontsize: "1em" },
		{ fontsize: "4em" },
		{ fontsize: "1em;" }],
		{
			duration: 2000,
			iterations: Infinity
		}
	)
}