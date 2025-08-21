/**
 * Write regex, that checks if password is trong enough
 * - has at least one upper case letter
 * - has at least one lowercase letter
 * - has at least 3 digits
 * - has special character
 * - has no whitespaces
 * - has length from 12 to 24 symbols
 */

module.exports =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]{3,})(?=.*[\p{S}\p{P}])(?!.*\s)[A-Za-z0-9\p{S}\p{P}]{24,256}/u;
