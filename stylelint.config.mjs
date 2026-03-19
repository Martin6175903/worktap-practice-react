export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-css-modules"
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "alpha-value-notation": null,
    "scss/at-rule-no-unknown": true,
    "scss/double-slash-comment-empty-line-before": null,
    "scss/dollar-variable-empty-line-before": null,
    "scss/no-global-function-names": null,
    "scss/operator-no-newline-after": null,
    "shorthand-property-no-redundant-values": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "color-no-invalid-hex": true,
    "color-function-notation": null,
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\\\[.+\\\\])?$",
    "max-empty-lines": 1,
    "no-descending-specificity": null,
    "value-keyword-case": [
      "lower",
      {
        ignoreProperties: ["font-family"],
        ignoreKeywords: ["currentColor"]
      }
    ]
  }
};

