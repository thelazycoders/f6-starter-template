# Foundation 6 SASS starter Template

**Please open all issues [here](https://github.com/thelazycoders/f6-starter-template/issues).**

## Installation

```bash
git clone https://github.com/thelazycoders/f6-starter-template.git
```

Then open the project folder from Terminal/Command line and install the necessary dependencies by running these commands:

```bash
npm install
```
And for bower components

```bash
cd src
bower install
```
## Include components

* Uncomment necessary SCSS components.
* By default only `foundation.core.js` and `foundation.util.mediaQuery.js` are enabled. To enable other certain Plugins Uncomment them in gulpfile.js

## Run Task
### open the project folder from Terminal/Command line and run the command you need.

* `gulp` will Compile SASS. It wil also concat and minify all js files

##### Watch Files for Changes

* `gulp watch` will watch `src/scss` and `src/js` directory.
* `gulp sass` will watch `src/scss` directory.
* `gulp js` will watch `src/js` directory.

---
**For Documentation please visit the [Foundation Doc](http://foundation.zurb.com/sites/docs).**