# reactjs_course_fh

## Create VITE PROJECT

https://vitejs.dev/guide/#trying-vite-online

```console
npm create vite@latest
```

## HOOKS DOCUMENTATION

https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect

# Dependencies

    "react-router-dom": "^6.3.0"

```console
npm i react-router-dom
npm install react-router-dom@6
npm install @reduxjs/toolkit react-redux
```

# Dev Dependencies

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

FILE IN ROOT : babel.config.ts

```javascript
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "@babel/react",
  ],
};
```

FILE IN ROOT : jest.config.cjs

```javascript
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  // roots: ["<rootDir>/src"],

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

import fetch

```code
import 'cross-fetch/polyfill';
```

change TEST SCRIPT

```json
"test": "jest --watch --detectOpenHandles"
"testall": "jest --watchAll --detectOpenHandles"
```

# TESTING NOTES

https://github.com/alonzoftware/reactjs_course_fh/blob/master/04-GifExpertApp/gif-expert-lon/tests/components/GifGrid.test.tsx

# BOOTSTRAP

https://getbootstrap.com/docs/5.2/getting-started/download/

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
  crossorigin="anonymous"
></script>
```

# MATERIAL UI

https://mui.com/

```console
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

```

Add to index.html

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

# REDUX

https://redux-toolkit.js.org/tutorials/quick-start

```console
npm install @reduxjs/toolkit react-redux
```

Create file src/store/types.ts

```javascript
// This is required to fix redux thunk errors introduced with react-redux version 8
// ThunkAction is not assignable to parameter of type 'AnyAction'
import { ThunkAction } from '@reduxjs/toolkit'
import 'redux'

declare module 'redux' {
    /**
     * Overload for bindActionCreators redux function, returns expects responses
     * from thunk actions
     */
    function bindActionCreators<
        ActionCreators extends ActionCreatorsMapObject<any>
    >(
        actionCreators: ActionCreators,
        dispatch: Dispatch
    ): {
            [ActionCreatorName in keyof ActionCreators]: ReturnType<
                ActionCreators[ActionCreatorName]
            > extends ThunkAction<any, any, any, any>
            ? (
                ...args: Parameters<ActionCreators[ActionCreatorName]>
            ) => ReturnType<ReturnType<ActionCreators[ActionCreatorName]>>
            : ActionCreators[ActionCreatorName]
        }

    /*
     * Overload to add thunk support to Redux's dispatch() function.
     * Useful for react-redux or any other library which could use this type.
     */
    export interface Dispatch<A extends Action = AnyAction> {
        <ReturnType = any, State = any, ExtraThunkArg = any>(
            thunkAction: ThunkAction<ReturnType, State, ExtraThunkArg, A>
        ): ReturnType
    }
}
```
