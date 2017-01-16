import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ResultsList from '../src/components/ResultsList';
import styles from '../src/styles/main.scss'
let cssResults = {
  "errors": [
    {
      "line": "202",
      "errorType": "parse-error",
      "context": "blockquote",
      "errorSubtype": "unrecognized",
      "skippedString": "*zoom: 1;",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "202",
      "errorType": "parse-error",
      "context": "blockquote",
      "errorSubtype": "skippedString",
      "skippedString": "}",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "239",
      "errorType": "parse-error",
      "errorSubtype": "skippedString",
      "skippedString": "[selection]",
      "type": "generator.unrecognize",
      "message": "Unknown pseudo-element or pseudo-class ::selection",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "254",
      "errorType": "parse-error",
      "context": ".mask",
      "errorSubtype": "exp",
      "skippedString": "url('../img/css/mask.png')",
      "type": "noexistence-at-all",
      "message": "Property mask-image doesn't exist :",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "383",
      "errorType": "parse-error",
      "context": ".global-head",
      "errorSubtype": "unrecognized",
      "skippedString": "*zoom: 1;",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "388",
      "errorType": "parse-error",
      "context": ".global-head:after",
      "errorSubtype": "unrecognized",
      "skippedString": "[: 0;\n  overflow: hidden;\n  -webkit-transition: top 0.2s ease-in-out;\n  transition: top 0.2s ease-in-out; }\n  .global-head:before]",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "501",
      "errorType": "parse-error",
      "context": ".footer-inner",
      "errorSubtype": "unrecognized",
      "skippedString": "*zoom: 1;",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "503",
      "errorType": "parse-error",
      "context": ".footer-inner:after",
      "errorSubtype": "unrecognized",
      "skippedString": "[: relative; }\n  .footer-inner:before]",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "559",
      "errorType": "parse-error",
      "context": ".main",
      "errorSubtype": "unrecognized",
      "skippedString": "*zoom: 1;",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "561",
      "errorType": "parse-error",
      "context": ".main:after",
      "errorSubtype": "unrecognized",
      "skippedString": "[: 24px; }\n  .main:before]",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "668",
      "errorType": "parse-error",
      "context": ".main-projects",
      "errorSubtype": "unrecognized",
      "skippedString": "*zoom: 1;",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "668",
      "errorType": "parse-error",
      "context": ".main-projects",
      "errorSubtype": "skippedString",
      "skippedString": "}",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "685",
      "errorType": "parse-error",
      "context": ".project-block",
      "errorSubtype": "unrecognized",
      "skippedString": "*zoom: 1;",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "688",
      "errorType": "parse-error",
      "context": ".project-block:after",
      "errorSubtype": "unrecognized",
      "skippedString": "[: relative;\n  overflow: hidden; }\n  .project-block:before]",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "756",
      "errorType": "parse-error",
      "context": ".article-body, .about-body",
      "errorSubtype": "unrecognized",
      "skippedString": "*zoom: 1;",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "756",
      "errorType": "parse-error",
      "context": ".article-body, .about-body",
      "errorSubtype": "skippedString",
      "skippedString": "}",
      "type": "generator.unrecognize",
      "message": "Parse Error",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "1020",
      "errorType": "invalidparam",
      "message": "Sorry, the at-rule @-webkit-keyframes is not implemented.",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    }
  ],
  "warnings": [
    {
      "line": "2",
      "level": "0",
      "message": "Property -moz-box-sizing is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "3",
      "level": "0",
      "message": "Property -ms-box-sizing is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "4",
      "level": "0",
      "message": "Property -o-box-sizing is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "60",
      "level": "0",
      "message": "Property -webkit-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "61",
      "level": "0",
      "message": "Property -moz-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "62",
      "level": "0",
      "message": "Property -moz-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "63",
      "level": "0",
      "message": "Property -ms-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "64",
      "level": "0",
      "message": "Property -o-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "71",
      "level": "0",
      "message": "Property -webkit-font-smoothing is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "78",
      "level": "0",
      "message": "Property -webkit-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "79",
      "level": "0",
      "message": "Property -moz-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "80",
      "level": "0",
      "message": "Property -moz-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "81",
      "level": "0",
      "message": "Property -ms-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "82",
      "level": "0",
      "message": "Property -o-font-feature-settings is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "90",
      "level": "0",
      "message": "Property -webkit-font-smoothing is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "187",
      "level": "0",
      "message": "Property -webkit-transition is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "235",
      "level": "0",
      "message": "::-moz-selection is an unknown vendor extended pseudo-element",
      "type": "vendor-ext-pseudo-element",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "243",
      "level": "0",
      "message": "::-moz-selection is an unknown vendor extended pseudo-element",
      "type": "vendor-ext-pseudo-element",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "250",
      "level": "0",
      "message": "Property -webkit-mask-image is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "251",
      "level": "0",
      "message": "Property -moz-mask-image is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "252",
      "level": "0",
      "message": "Property -ms-mask-image is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "253",
      "level": "0",
      "message": "Property -o-mask-image is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "341",
      "level": "0",
      "message": "Property -webkit-column-count is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "342",
      "level": "0",
      "message": "Property -moz-column-count is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "343",
      "level": "0",
      "message": "Property -ms-column-count is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "344",
      "level": "0",
      "message": "Property -o-column-count is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "346",
      "level": "0",
      "message": "Property -webkit-column-gap is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "347",
      "level": "0",
      "message": "Property -moz-column-gap is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "348",
      "level": "0",
      "message": "Property -ms-column-gap is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "349",
      "level": "0",
      "message": "Property -o-column-gap is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "474",
      "level": "0",
      "message": "Property -webkit-transition is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "628",
      "level": "0",
      "message": "Property -webkit-transition is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "639",
      "level": "0",
      "message": "Property -webkit-transition is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "707",
      "level": "0",
      "message": "Property -webkit-transition is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "718",
      "level": "0",
      "message": "Property -webkit-transition is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "1015",
      "level": "0",
      "message": "Property -webkit-animation-duration is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "1017",
      "level": "0",
      "message": "Property -webkit-animation-fill-mode is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "1032",
      "level": "0",
      "message": "Property -webkit-transform is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "1036",
      "level": "0",
      "message": "Property -webkit-transform is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "1040",
      "level": "0",
      "message": "Property -webkit-transform is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    },
    {
      "line": "1044",
      "level": "0",
      "message": "Property -webkit-animation-name is an unknown vendor extension",
      "type": "vendor-extension",
      "uri": "http://markmichon.com/assets/css/markmichon.css"
    }
  ],
  "resultType": "CSS"
}
let htmlResults = {
  "warnings": [],
  "errors": [
    {
      "type": "error",
      "url": "http://markmichon.com/",
      "message": "X-UA-Compatible HTTP header must have the value “IE=edge”, was “IE=Edge,chrome=1”."
    },
    {
      "type": "error",
      "lastLine": 5,
      "lastColumn": 67,
      "firstColumn": 5,
      "message": "A “meta” element with an “http-equiv” attribute whose value is “X-UA-Compatible” must have a “content” attribute with the value “IE=edge”.",
      "extract": "-8\"/>\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"/>\n    <",
      "hiliteStart": 10,
      "hiliteLength": 63
    },
    {
      "type": "error",
      "lastLine": 23,
      "lastColumn": 77,
      "firstColumn": 5,
      "message": "Bad value “”author”” for attribute “rel” on element “link”: The string “”author”” is not a registered keyword.",
      "extract": "n\">\n\n\n    <link rel=”author” href=”https://plus.google.com/103117307799452974340“/>\n    <",
      "hiliteStart": 10,
      "hiliteLength": 73
    }
  ],
  "resultType": "HTML"
}

storiesOf('Results List', module)
  .add('CSS Results', () => (
    <ResultsList results={cssResults} title="CSS" />
  ))
  .add('HTML Results', () => (
    <ResultsList results={htmlResults} title="HTML" />
  ))
