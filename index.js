const emoji_regex = require("emoji-regex")();
//const emoji_data = require('emoji-datasource/emoji_pretty.json');
const emoji_data = require('./emoji.json');

module.exports = (text) => {
  let replacements = {};
  while (match = emoji_regex.exec(text)) {
    if (replacements[match[0]]) {
      continue;
    }
    let emoji_slack = emoji_data.find((el) => {
      return match[0] === String.fromCodePoint(parseInt(el.unified, 16));
    });
    replacements[match[0]] = emoji_slack ? `:${emoji_slack.short_name}:` : '';
  }

  for (let key in Object.assign(replacements, {})) {
    const re = new RegExp(key, "g");
    text = text.replace(re, replacements[key]);
  }
  return text;
}
