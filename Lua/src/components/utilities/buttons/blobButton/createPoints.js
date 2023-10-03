// 60° Gradient Morphing Blob
// https://codepen.io/georgedoescode/pen/oNzamjV

export function createPoints(numPoints = 6, circleRadius = 75) {
	const points = [];

	// used to equally space each point around the circle
	const angleStep = (Math.PI * 2) / numPoints;

	for (let i = 1; i <= numPoints; i++) {
		// x & y coordinates of the current point
		const theta = i * angleStep;

		const x = 100 + Math.cos(theta) * circleRadius;
		const y = 100 + Math.sin(theta) * circleRadius;

		// store the point's position
		points.push({
			x: x,
			y: y,
			// we need to keep a reference to the point's original point for when we modulate the values later
			originX: x,
			originY: y,
			noiseOffsetX: Math.random() * 1000,
			noiseOffsetY: Math.random() * 1000,
		});
	}

	return points;
}
