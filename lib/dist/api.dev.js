"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStrapiURL = getStrapiURL;
exports.fetchAPI = fetchAPI;

function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://portfolio-keymo.herokuapp.com/").concat(path);
} // Helper to make GET requests to Strapi


function fetchAPI(path) {
  var requestUrl, response, data;
  return regeneratorRuntime.async(function fetchAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          requestUrl = getStrapiURL(path);
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(requestUrl));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}