import antfu from "@antfu/eslint-config"

export default antfu({
  astro: true,
  formatters: true,

  react: true,

  stylistic: {
    indent: 2,
    quotes: "double",
    semi: false,
  },
  type: "app",
}, {
  rules: {
    "perfectionist/sort-array-includes": "error",
    "perfectionist/sort-imports": "error",
    "perfectionist/sort-maps": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-objects": ["error", { order: "asc", type: "alphabetical" }],
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: ["README.md"],
      },
    ],
  },
})
