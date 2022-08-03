# reactjs_course_fh

# Dependencies

    "@babel/core": "^7.18.9",
    "@babel/preset-env": "^7.18.9",
    "@babel/preset-react": "^7.18.6",
    "@babel/preset-typescript": "^7.18.6",
    "@testing-library/jest-dom",
    "@testing-library/react": "^13.3.0",
    "@types/jest": "^28.1.6",
    "babel-jest": "^28.1.3",
    "cross-fetch": "^3.1.5",
    "jest": "^28.1.3",
    "jest-environment-jsdom": "^28.1.3",
    "ts-jest": "^28.0.7",

```console
npm i --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @testing-library/react @testing-library/jest-dom @types/jest babel-jest cross-fetch jest jest-environment-jsdom ts-jest
```

jest.config.cjs

```json
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  //roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};


```

FILE IN ROOT : .babelrc

```json
{
  "presets": [
    [
      "@babel/preset-typescript", // <---
      {
        "preset-env": {
          "modules": "commonjs"
        }
      }
    ],
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```
