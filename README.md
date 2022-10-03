# Url Utility

Url Utility is a simple library for parsing and comparing URLs.

## Installation

```bash
npm install urlsutility --save
yarn add urlsutility
```

## Importing

```javascript
// Using Node.js
const urlutility = require('urlsutility');

// Using ES6 imports
import urlutility from 'urlsutility';
```

## Usage

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility();

// Parse a URL
urlUtility.parse('https://www.google.com/search?q=url-utility');

// Compare 2 URLs
urlUtility.compare(
    'https://www.google.com/search?q=url-utility', 
    'https://www.google.com/search?q=url-utility'
);
```
## Params

The Constructor has one optional parameter which should be an object of type Params.
Params has the following keys.

- **ignoreProtocol** - *(optional)* - If true, protocol will be ignored while parsing URLs. Default value is false.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    ignoreProtocol: true
});

// Parse a URL
urlUtility.parse('https://www.google.com/search?q=url-utility');
// Output: www.google.com/search?q=url-utility
```

- **ignorePort** - *(optional)* - If true, port will be ignored while parsing URLs. Default value is true.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    ignorePort: false
});

// Parse a URL
urlUtility.parse('https://www.google.com:8080/search?q=url-utility');
// Output: https://www.google.com:8080/search?q=url-utility
```

- **ignorePath** - *(optional)* - If true, path will be ignored while parsing URLs. Default value is false.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    ignorePath: true
});

// Parse a URL
urlUtility.parse('https://www.google.com:8080/search?q=url-utility');
// Output: https://www.google.com
```

- **ignoreQuery** - *(optional)* - If true, query will be ignored while parsing URLs. Default value is true.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    ignoreQuery: false
});

// Parse a URL
urlUtility.parse('https://www.google.com:8080/search?q=url-utility');
// Output: https://www.google.com/search?q=url-utility
```

- **ignoreFragment** - *(optional)* - If true, fragment will be ignored while parsing URLs. Default value is true.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    ignoreFragment: false
});

// Parse a URL
urlUtility.parse('https://www.google.com/search?q=url-utility#frag');
// Output: https://www.google.com/search?q=url-utility#frag
```

- **ignoreUsernameAndPassword** - *(optional)* - If true, username and password will be ignored while parsing URLs. Default value is true.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    ignoreUsernameAndPassword: false
});

// Parse a URL
urlUtility.parse('https://username@google.com/search?q=url-utility#frag');
// Output: https://username@google.com/search?q=url-utility
```

- **ignoreTrailingSlash** - *(optional)* - If true, trailing slash will be ignored while parsing URLs. Default value is false.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    ignoreTrailingSlash: true
});

// Parse a URL
urlUtility.parse('https://www.google.com/search/');
// Output: https://www.google.com/search
```

- **toLowerCase** - *(optional)* - If true, all the characters will be converted to lower case while parsing URLs. Default value is true.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility({
    toLowerCase: false
});

// Parse a URL
urlUtility.parse('https://www.GOOGLE.com/search/');
// Output: https://www.GOOGLE.com/search/
```

## Methods

### parse(url: string): string

Parses a URL and returns a string.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility();

// Parse a URL
urlUtility.parse('https://www.google.com/search?q=url-utility');
// Output: https://www.google.com/search?q=url-utility
```

### compare(url1: string, url2: string): boolean

Compares 2 URLs and returns a boolean.

```javascript
const UrlUtility = require('urlsutility');
const urlUtility = new UrlUtility();

// Compare 2 URLs
urlUtility.compare(
    'https://www.google.com/search?q=url-utility', 
    'https://www.google.com/search?q=url-utility'
);
// Output: true
```
