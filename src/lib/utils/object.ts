/**
 * Array or <otherValue>
 */
export type ArrayOr<OrValue, ArrayValue = OrValue> = OrValue | ArrayValue[];

/**
 * Interface of object utils
 */
export interface ObjectUtils {
	/**
	 * Convert to array
	 * @template {any} V
	 * @param {V} value - Current value
	 * @returns {V extends Array<any> ? V : [V]} - If is not array return array with first element `value`, else return this array
	 */
	convertToArray<V>(value: V): V extends Array<any> ? V : [V];
}

/**
 * Object utils
 * @type {ObjectUtils}
 */
export const ObjectUtils: ObjectUtils = {} as ObjectUtils;

/**
 * Convert to array
 * @template {any} V
 * @param {V} value - Current value
 * @returns {V extends Array<any> ? V : [V]} - If is not array return array with first element `value`, else return this array
 */
ObjectUtils.convertToArray = function convertToArray<V>(value: V): V extends Array<any> ? V : [V] {
	if (Array.isArray(value)) {
		return value as V extends Array<any> ? V : [V];
	} else {
		return [value] as V extends Array<any> ? V : [V];
	}
};
