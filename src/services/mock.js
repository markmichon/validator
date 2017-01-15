let htmlMessages = [
  {
      "type"   : "info",
      "subtype": "warning",
      "lastLine"   : 20,
      "lastColumn" : 15,
      "url"    : "http://example.com/",
      "message": "Trailing slash for void element",
      "extract": "<br/>",
      "hiliteStart" : 3,
      "hiliteLength" : 1
  },
  {
      "type"   : "info",
      "subtype": "warning",
      "lastLine"   : 20,
      "lastColumn" : 15,
      "url"    : "http://example.com/",
      "message": "Trailing slash for void element",
      "extract": "<br/>",
      "hiliteStart" : 3,
      "hiliteLength" : 1
  },
  {
      "type"   : "info",
      "subtype": "warning",
      "lastLine"   : 20,
      "lastColumn" : 15,
      "url"    : "http://example.com/",
      "message": "Trailing slash for void element",
      "extract": "<br/>",
      "hiliteStart" : 3,
      "hiliteLength" : 1
  },
  {
      "type"   : "error",
      "subtype": "fatal",
      "lastLine"   : 42,
      "lastColumn" : 17,
      "url"    : "http://example.com/",
      "message": "Missing end tag for the “foo” element"
  },
  {
      "type"   : "error",
      "subtype": "fatal",
      "lastLine"   : null,
      "lastColumn" : 17,
      "url"    : "http://example.com/",
      "message": "Missing end tag for the “foo” element"
  },
  {
      "type"   : "error",
      "subtype": "fatal",
      "lastLine"   : 42,
      "lastColumn" : 17,
      "url"    : "http://example.com/",
      "message": "Missing end tag for the “foo” element"
  }
];

export const validateHTML = () => new Promise((resolve, reject) => {
  resolve(htmlMessages);
});
