/**
 * Given [key: string]: string[] object,
 * render it into array of [key]: string
 * Example:
 * {
 * username: ['cannot be empty, minimal length is 3'],
 * password: ['must contain letters']
 * }
 */

/** a bit simpler solution */
const f = (error) => {
  let errors = [];
  let keys = Object.keys(error);
  for (let key of keys) {
    errors.push(...error[key].map((error) => key + " " + error));
  }
  return errors;
};

/* 14 08 2024 */
const f = (errors) => {
  const keys = Object.keys(errors);
  const result = [];
  keys.forEach((key) =>
    errors[key].forEach((error) => result.push(`${key} ${error}`)),
  );
  return result;
};

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
