module.exports = {
    extends: ["airbnb"],
    env: {
        "browser": true,
        "node": true
    },
    rules: {
      "import/core-modules": [
        "react",
        "prop-types"
      ],
      "import/no-unresolved" : "off",
      "import/extensions" : ["error", { "jsx": "never" } ],
        "no-underscore-dangle": 0,
        "react/jsx-filename-extension": 0,
        "react/prop-types": [
            0
        ],
        "no-use-before-define": "off",
        "no-return-await": "off",
        "react/no-unescaped-entities": "off",
        "class-methods-use-this": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/anchor-has-content": "off",
        "react/jsx-first-prop-new-line": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-closing-bracket-location": "off",
        "no-useless-escape": [0],
        "declaration": "parens-new-line",
    }
};
