/**
 * Fix this code, so that it returns 0,1,2
 *
 */

const f = () => {
  for (i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    });
  }
};

module.exports = f;
