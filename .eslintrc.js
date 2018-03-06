module.exports = {
    extends: ["airbnb"],
    rules: {
      "import/core-modules": [
        "react",
        "prop-types"
      ],
      "import/no-unresolved" : "off",
      "import/extensions" : ["error", { "jsx": "never" } ],
      "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": 0,
        "react/jsx-filename-extension": 0,
        "react/prop-types": [
            0
        ],
        "react/no-unescaped-entities": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/anchor-has-content": "off",
        "react/jsx-first-prop-new-line": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-closing-tag-location": "off",
        "react/require-default-props": "off",
        "declaration": "parens-new-line",
    }
};
