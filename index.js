/*
 * This file is part of the @cowtech/tslint-config npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

module.exports = {
  extends: ['tslint-config-standard'],
  rules: {
    curly: true,
    quotemark: [true, 'single', 'jsx-double', 'avoid-template', 'avoid-escape'],
    'space-before-function-paren': false,
    typedef: [
      true,
      'call-signature',
      'parameter',
      'arrow-parameter',
      'property-declaration',
      'member-variable-declaration'
    ]
  }
}
