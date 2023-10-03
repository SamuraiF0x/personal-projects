import alea from "alea";
import { createNoise2D } from "simplex-noise";
import { createPoints } from "../buttons/blobButton/createPoints";
import { clamp } from "@shopify/react-native-skia";

function noise(x, y) {
	const prng = alea("seed");
	const noise2D = createNoise2D(prng);
	return noise2D(x, y);
}
function mapPosition(noise, max) {
	return max / 2 + 300 * noise;
}

function noiseControl(position, max) {
	const pushPosition = position <= 0.2 * max;
	const pullPosition = position >= 0.8 * max;
	return pushPosition || pullPosition ? 0.0005 : 0.0001;
}

const points = createPoints(1, 70);

export function wordWorm(width, height) {
	points.forEach((point) => {
		// return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
		const nX = noise(point.noiseOffsetX, point.noiseOffsetX).toFixed(2);
		const nY = noise(point.noiseOffsetY, point.noiseOffsetY).toFixed(2);

		const wall = 50;

		// map this noise value to a new value, somewhere inside screen
		const x = clamp(wall, mapPosition(nX, width), width - wall);
		const y = clamp(wall, mapPosition(nY, height), height - wall);

		// update the point's current coordinates
		point.x = x;
		point.y = y;

		// progress the point's x, y values through "time"
		point.noiseOffsetX += noiseControl(x, width);
		point.noiseOffsetY += noiseControl(y, height);
	});

	return { x: points[0].x, y: points[0].y };
}
