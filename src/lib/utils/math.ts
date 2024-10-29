/**
 * Type of boolean number
 */
export type IBooleanNumber = 0 | 1;

/**
 * Interface of math utils
 */
export interface MathUtils {
	/**
	 * Radians to degrees
	 * @param {number} rad - Radians value
	 * @return {number} - Degrees value
	 */
	radToDeg(rad: number): number;

	/**
	 * Degrees to radians
	 * @param {number} deg - Degrees value
	 * @return {number} - Radians value
	 */
	degToRad(deg: number): number;

	/**
	 * Clamp value in range (Math.max(Math.min()))
	 * @param {number} value - Current value
	 * @param {number} min - Min of range
	 * @param {number} max - Max of range
	 * @returns {number} - Clamp value
	 */
	clamp(value: number, min: number, max: number): number;

	/**
	 * Value in range?
	 * @param {number} value - Current value
	 * @param {number} min - Min of range
	 * @param {number} max - Max of range
	 * @returns {boolean} - min <= value <= max
	 */
	clampInclude(value: number, min: number, max: number): boolean;
}

/**
 * Math utils
 * @type {MathUtils}
 */
export const MathUtils: MathUtils = {} as MathUtils;

/**
 * Radians to degrees
 * @param {number} rad - Radians value
 * @return {number} - Degrees value
 */
MathUtils.radToDeg = function (rad: number): number {
	return rad * (180 / Math.PI);
};

/**
 * Degrees to radians
 * @param {number} deg - Degrees value
 * @return {number} - Radians value
 */
MathUtils.degToRad = function (deg: number): number {
	return deg * (Math.PI / 180);
};

/**
 * Clamp value in range (Math.max(Math.min()))
 * @param {number} value - Current value
 * @param {number} min - Min of range
 * @param {number} max - Max of range
 * @returns {number} - Clamp value
 */
MathUtils.clamp = function clamp(value: number, min: number, max: number): number {
	return Math.max(Math.min(value, max), min);
};

/**
 * Value in range?
 * @param {number} value - Current value
 * @param {number} min - Min of range
 * @param {number} max - Max of range
 * @returns {boolean} - min <= value <= max
 */
MathUtils.clampInclude = function clampInclude(value: number, min: number, max: number): boolean {
	return value >= min && value <= max;
};
