For Learning purpose only

package.json file

{
  "name": "agenda-manager",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@popperjs/core": "^2.11.0",
    "@testing-library/jest-dom": "^5.15.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "bootstrap": "^5.1.3",
    "jest-junit": "^13.0.0",
    "jquery": "^3.6.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "^4.0.3",
    "web-vitals": "^1.1.2",
    "xml-js": "^1.6.11",
    "xml2js": "^0.4.23"
  },
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts build",
    "test": "react-scripts test --testResultsProcessor=\"jest-junit\" --watchAll=false",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
