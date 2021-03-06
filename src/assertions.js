import {isDefAndNotNull, isNull, isFunction, isObject, isString} from 'metal';

/**
 * Asserts value is defined and not null.
 * @param  {Object} value
 * @param  {string} errorMessage Error message
 */
export function assertDefAndNotNull(value, errorMessage) {
  if (!isDefAndNotNull(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Asserts value is a function.
 * @param  {Function} value
 * @param  {string} errorMessage Error message
 */
export function assertFunction(value, errorMessage) {
  if (!isFunction(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Asserts value is not null.
 * @param  {Object} value
 * @param  {string} errorMessage Error message
 */
export function assertNotNull(value, errorMessage) {
  if (isNull(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Asserts value is an object.
 * @param  {Object} value
 * @param  {string} errorMessage Error message
 */
export function assertObject(value, errorMessage) {
  if (!isObject(value)) {
    throw new Error(errorMessage);
  }
}

/**
 * Asserts value is a string.
 * @param  {String} value
 * @param  {string} errorMessage Error message
 */
export function assertString(value, errorMessage) {
  if (!isString(value)) {
    throw new Error(errorMessage);
  }
}
