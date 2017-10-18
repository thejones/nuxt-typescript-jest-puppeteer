# typescript-nuxt-jest

> 

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

Check out the following for more about puppeteer.
https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#elementhandletostring

https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/

Running e2e requires two terminals. 
```
$ npm run dev
```

Then 
```
$npm run test
```

This is because we are testing localhost:3000 and not an external URL. 