module.exports = {
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      js: true
    }
  },
  plugins: ["prettier", "react"],
  extends: [
    "prettier",
    "prettier/babel",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
    "eslint:recommended", 
    "plugin:react/recommended"
  ],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2, { "SwitchCase": 1 }],
    "react/display-name": 0
  },
  globals: {
    process: "readonly",
    window: "readonly"
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.13.1"
    }
  }
};
