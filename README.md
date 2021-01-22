## next, typescript, eslint, husky, jest setup from scratch

Based on the blog post by Paulin Trognon: https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js 


/package.json

```
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "type-check": "tsc --project tsconfig.json --pretty --noEmit",
    "lint": "eslint --ext js,jsx,ts,tsx --fix"
  },
```

```
  "dependencies": {
    "next": "^10.0.5",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "devDependencies": {
    "@babel/core": "^7.12.10",
    "@types/jest": "^26.0.20",
    "@types/node": "^14.14.22",
    "@types/react": "^17.0.0",
    "@types/react-test-renderer": "^17.0.0",
    "@typescript-eslint/eslint-plugin": "^4.14.0",
    "@typescript-eslint/parser": "^4.14.0",
    "babel-jest": "^26.6.3",
    "eslint": "^7.18.0",
    "eslint-config-prettier": "^7.2.0",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "husky": "^4.3.8",
    "identity-obj-proxy": "^3.0.0",
    "install": "^0.13.0",
    "jest": "^26.6.3",
    "jest-watch-typeahead": "^0.6.1",
    "lint-staged": "^10.5.3",
    "prettier": "^2.2.1",
    "react-test-renderer": "^17.0.1",
    "typescript": "^4.1.3"
  }
```

Add:
tsconfig.json (next will create next-env.d.ts automatically)  
.babelrc  
.eslintrc.js  
.prettierrc.js  
.jest.config.js  
lint-staged.config.js  

