import polyline from '@mapbox/polyline';

/**
 * Decode a polyline string into an array of [lat, lng] pairs.
 * @param {string} encodedPolyline - The encoded polyline string.
 * @returns {Array} - An array of [lat, lng] pairs.
 */
export const decodePolyline = (encodedPolyline) => {
    return polyline.decode(encodedPolyline);
};

/**
 * Encode an array of [lat, lng] pairs into a polyline string.
 * @param {Array} path - An array of [lat, lng] pairs.
 * @returns {string} - The encoded polyline string.
 */
export const encodePolyline = (path) => {
    return polyline.encode(path);
};
