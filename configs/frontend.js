module.exports = {
    "extends": [
        "./common.js",
        "airbnb",
        "airbnb/hooks",
    ],
    "globals": {
        "__": true
    },
    "env": {
        "browser": true,
    },
    "rules": {
        "react/destructuring-assignment": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-quotes": ["off", "prefer-single"],
        "react/no-array-index-key": "off",
        "no-alert": "off",
        "react/button-has-type": "off",
        "react/jsx-max-props-per-line": ["error", { "when": "always" }],
        "react/jsx-key": ["error"],
        "react/require-default-props": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.ts", "**/*.test.tsx"]}],
        "react-hooks/exhaustive-deps": ["warn", {
            "additionalHooks": "^use(Async|AsyncFn|AsyncRetry|Debounce|UpdateEffect|IsomorphicLayoutEffect|DeepCompareEffect|ShallowCompareEffect)$"
        }],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "@angular-eslint/no-empty-lifecycle-method": "off",
    },
};
