# amazon-book-title-copy

[![Lint, Format, Build](https://github.com/Takashicc/amazon-book-title-copy/actions/workflows/ci.yml/badge.svg)](https://github.com/Takashicc/amazon-book-title-copy/actions/workflows/ci.yml)

amazon-book-title-copy is a chrome browser extension that adds a button to readily copy a book title or search for a book title on multiple sites.

<img src="/docs/images/result.png" />

## Getting started

### Prerequisites

Install [Node](https://nodejs.org/en/).

### Build extension

Run the below commands to build the extension. `npm run build` will create a `dist` folder.

```sh
$ git clone https://github.com/Takashicc/amazon-book-title-copy
$ cd amazon-book-title-copy
$ npm install
$ npm run build
$ ls dist/
background.js   manifest.json
```

### Install extension to your chrome browser

- Go to `chrome://extensions` in your chrome browser.

- Set the Developer mode ON.

<img src="/docs/images/developer_mode.png" />

- Click `Load unpacked` and select `dist` folder.

- After installation, you will see the following image.

<img src="/docs/images/extension_install.png" />
