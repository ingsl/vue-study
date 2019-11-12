  module.exports = {
    "processors": ["stylelint-processor-html"],
    "extends": "stylelint-config-standard",
    "syntax": "scss",
    "rules": {
      "no-empty-source": null,
      "color-hex-case": "lower",
      "declaration-colon-newline-after": null,
      "selector-pseudo-element-colon-notation": null,
      "no-descending-specificity": null,
      "value-list-comma-newline-after": null,
      "rule-empty-line-before": [
        "always",
        {
          "ignore": ["first-nested"]
        }
      ]
    }
  }