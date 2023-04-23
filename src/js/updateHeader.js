/**
 * Update index.html meta tags
 * @param {String} title Current pages title
 * @param {String} description  Description of pages content
 * @example updateHead("Home", "description")
 *
 * @Creator  Alexander Barrett (github: https://github.com/Anclagen)
 */
export const updateHead = function (title, description) {
 document.title = "Holidaize | " + title;
 document.querySelector('meta[name="description"]').content = description;
};
