/*
 * This file is part of the @cowtech/tslint-config npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

module.exports = {
  extends: ['tslint-config-standard'],
  rules: {
    curly: false,
    'no-unused-variable': false, // This can be removed once tslint-config-standard > 7.1.0 is released
    quotemark: [true, 'single', 'jsx-double', 'avoid-template', 'avoid-escape'],
    'space-before-function-paren': false
  }
}
