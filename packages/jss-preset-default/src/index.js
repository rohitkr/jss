import functions from '@secure-jss/jss-plugin-rule-value-function'
import observable from '@secure-jss/jss-plugin-rule-value-observable'
import template from '@secure-jss/jss-plugin-template'
import global from '@secure-jss/jss-plugin-global'
import extend from '@secure-jss/jss-plugin-extend'
import nested from '@secure-jss/jss-plugin-nested'
import compose from '@secure-jss/jss-plugin-compose'
import camelCase from '@secure-jss/jss-plugin-camel-case'
import defaultUnit from '@secure-jss/jss-plugin-default-unit'
import expand from '@secure-jss/jss-plugin-expand'
import vendorPrefixer from '@secure-jss/jss-plugin-vendor-prefixer'
import propsSort from '@secure-jss/jss-plugin-props-sort'

const create = (options = {}) => ({
  plugins: [
    functions(),
    observable(options.observable),
    template(),
    global(),
    extend(),
    nested(),
    compose(),
    camelCase(),
    defaultUnit(options.defaultUnit),
    expand(),
    vendorPrefixer(),
    propsSort()
  ]
})

export default create
