/**
 * Given [key: string]: string[] object,
 * render it into array of [key]: string
 * Example:
 * {
 * username: ['cannot be empty, minimal length is 3'],
 * password: ['must contain letters']
 * }
 */

/* 29 04 2024 */

const f = (errors) => {
  let response = [];
  let keys = Object.keys(errors);
  for (let key of keys) {
    let arrayOfErrors = errors[key];
    arrayOfErrors.forEach((error) => response.push(key + " " + error));
  }
  return response;
};

const f = (errors) => {
  /*  return Object.entries(errors)
    .map((entry) => entry[1].map((validator) => entry[0] + " " + validator))
    .flat(); */

  return Object.entries(errors)
    .map((entry) => entry[1].map((validator) => entry[0] + " " + validator))
    .flat();
};

module.exports = f;
