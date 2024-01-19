[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]
[![Test Coverage][coveralls-image]][coveralls-url]

# Project Final Exam Semester 3 STT NF

Pemrograman Back-end development architecture microservice `REST-API` untuk `Digital Media`.

#### Fitur REST-API :

- HTTP Methods : GET, POST, PUT, & DELETE
- Get all data
- Get data by Id
- Get data by search
- Get data by category
- Create data
- Edit data
- Delete data

## Quick Start

The quickest way to get started with express

Install dependencies:

```console
$ npm install
```

Configure port app:

```js
const express = require("express");
const app = express();

app.get("/", function (req, res) {
 res.send("Hello World");
});

app.listen(3000);
```

Start the server:

```console
$ npm start
```

View the website at: http://localhost:3000

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install express
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Docs & Community

- [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
- [#express](https://web.libera.chat/#express) on [Libera Chat](https://libera.chat) IRC
- [GitHub Organization](https://github.com/expressjs) for Official Middleware & Modules
- Visit the [Wiki](https://github.com/expressjs/express/wiki)
- [Google Group](https://groups.google.com/group/express-js) for discussion
- [Gitter](https://gitter.im/expressjs/express) for support and discussion

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

## License

[MIT](LICENSE)

[appveyor-image]: https://badgen.net/appveyor/ci/dougwilson/express/master?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://badgen.net/coveralls/c/github/expressjs/express/master
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
[github-actions-ci-image]: https://badgen.net/github/checks/expressjs/express/master?label=linux
[github-actions-ci-url]: https://github.com/expressjs/express/actions/workflows/ci.yml
[npm-downloads-image]: https://badgen.net/npm/dm/express
[npm-downloads-url]: https://npmcharts.com/compare/express?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/express
[npm-install-size-url]: https://packagephobia.com/result?p=express
[npm-url]: https://npmjs.org/package/express
[npm-version-image]: https://badgen.net/npm/v/express
