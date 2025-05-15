import functions from '@rohitkr/jss-plugin-rule-value-function'
import observable from '@rohitkr/jss-plugin-rule-value-observable'
import template from '@rohitkr/jss-plugin-template'
import global from '@rohitkr/jss-plugin-global'
import extend from '@rohitkr/jss-plugin-extend'
import nested from '@rohitkr/jss-plugin-nested'
import compose from '@rohitkr/jss-plugin-compose'
import camelCase from '@rohitkr/jss-plugin-camel-case'
import defaultUnit from '@rohitkr/jss-plugin-default-unit'
import expand from '@rohitkr/jss-plugin-expand'
import vendorPrefixer from '@rohitkr/jss-plugin-vendor-prefixer'
import propsSort from '@rohitkr/jss-plugin-props-sort'

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
