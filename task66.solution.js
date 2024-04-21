/**
 * Given [key: string]: string[] object,
 * render it into array of [key]: string
 * Example:
 * {
 * username: ['cannot be empty, minimal length is 3'],
 * password: ['must contain letters']
 * }
 */

const f = (errors) => {
  /*  return Object.entries(errors)
    .map((entry) => entry[1].map((validator) => entry[0] + " " + validator))
    .flat(); */

  return Object.entries(errors)
    .map((entry) => entry[1].map((validator) => entry[0] + " " + validator))
    .flat();
};

module.exports = f;
