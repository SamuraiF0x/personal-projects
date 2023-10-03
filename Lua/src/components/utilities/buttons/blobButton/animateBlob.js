// 60° Gradient Morphing Blob
// https://codepen.io/georgedoescode/pen/oNzamjV

import alea from "alea";
import { spline } from "./spline";
import { createNoise2D } from "simplex-noise";
import { createPoints } from "./createPoints";
import { darkTheme } from "../../../../assets/theme/theme";

function noise(x, y) {
	const prng = alea("seed");
	const noise2D = createNoise2D(prng);
	return noise2D(x, y);
}

function map(n, start1, end1, start2, end2) {
	return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

const points = createPoints(7, 70);

export function animateBlob(noiseStep) {
	points.forEach((point) => {
		// return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
		const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
		const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

		// map this noise value to a new value, somewhere between it's original location -15 and it's original location + 15
		const x = map(nX, -1, 1, point.originX - 15, point.originX + 15);
		const y = map(nY, -1, 1, point.originY - 15, point.originY + 15);

		// update the point's current coordinates
		point.x = x;
		point.y = y;

		// progress the point's x, y values through "time"
		point.noiseOffsetX += noiseStep;
		point.noiseOffsetY += noiseStep;
	});

	return {
		path: spline(points, 1.1, true),
		startColorBlue: darkTheme.colors.cardBg85,
		stopColorBlue: darkTheme.colors.shadowPassive,
		startColorRed: darkTheme.colors.red,
		stopColorRed: darkTheme.colors.purple,
	};
}
