# CSLP PREACT WP Site
This approach was born from the pace that the resource sites need features built for, the ever-changing nature of the content, and a look towards the future with React / Preact and the WP Gutenberg API.

The idea is to use the WP REST api and custom endpoints to build a highly scalable, and very fast front-end decoupled from the WP backend. The decision to go with WordPress for the resources sites was the right one - I'll still maintain that. Yet the level of polish and interactivity required of the sites and designs is simply too heavy to implement via PHP on a server.

The componetized nature of the site, the designs and the excecution of this project will serve to make this code more portable to other similar projects, and perhaps beyond.

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).


## Credits

* [Preact](https://github.com/developit/preact-cli/)
* Michael Hemingway, CSLP
