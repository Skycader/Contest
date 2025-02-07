/* Given text, such as
 * Follow us on https://twitter.com/123
 * and https://instagram.com/user/123
 *
 * Transform the instances of urls into
 * <a href="https://twitter.com/123">instagram</a>
 */

/**
 * A lot of struggle on 7th february 2025
 */
const f = (text) => {
  const r = /(https?:\/\/)([\w]+)(\.[\w]+)((\/[\w]+)*\w*)/g;
  return text.replace(r, '<a href="$1$2$3$4">$2</a>');
};

/**
 * 20 january 2025
 */
const f = (text) => {
  const r = /(https?:\/\/)(.*?)(\.com)([\/\w*]*)/g;
  return text.replace(r, '<a href="$1$2$3$4">$2</a>');
};

/**
 * January 06 2025
 */
const f = (text) => {
  const r = /(https?:\/\/)(.*?)(\.com)((\/\w*)*)/g;
  return text.replace(r, '<a href="$1$2$3$4">$2</a>');
};

/**
 * 13 November 2024 15:35
 */
const f = (text) => {
  const r = /(https?:\/\/)(.*?)(\.com)(\/[\w+\/]+\w+)/g;
  return text.replace(r, `<a href="$1$2$3$4">$2</a>`);
};

/** 02 september 2024
 * YouTube is working fine and I'm using Memork for italian and japanese, memos is now fully cleared
 */
const r = /(https?:\/\/)(.*?)(\.com)((\/\w+)+)/g;

const f = (text) => {
  return text.replace(r, '<a href="$1$2$3$4">$2</a>');
};

/* 14 august 2024 11:24, today going for autodrom
 * btw youtube is restored by me using spoof dpi and byedpi
 * */
const f = (text) => {
  const r = /(https?:\/\/)(\w+)(\.com)((\/\w+)+)/g;
  return text.replace(r, `<a href="$1$2$3$4">$2</a>`);
};

/* 05 august 2024 01:35
 * Comment: youtube is being slowed... damn fuck */
const f = (text) => {
  const r = /(https:?\/\/)(.*?)(\.com)((\/\w+)+)/g;
  return text.replace(r, '<a href="$1$2$3$4">$2</a>');
};

/** 22.05.2024 07:23 */
const r = /(\w+)*\s(https:.*\.com[\/\w]+)/gi;
const f = (text) => {
  return text.replace(r, '<a href="$2">$1</a>');
};

const r = /(\w+)\s(https?:\/\/[\w\.\/.]+)/g;
const f = (text) => {
  return text.replace(r, '<a href="$2">$1</a>');
};

const r = /(\w+)\s(https?:\/\/\w+\.com[\/\w]+)/g;
const f = (text) => {
  return text.replace(r, '<a href="$2">$1</a>');
};

module.exports = f;
