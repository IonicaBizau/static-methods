"use strict";

/**
 * staticMethods
 * Get the static methods of a JavaScript class.
 *
 * @name staticMethods
 * @function
 * @param {Class} input The input class.
 * @return {Array} The static methods of the class.
 */
module.exports = function staticMethods (input) {
    return input ? Object.getOwnPropertyNames(input).slice(3) : [];
};
