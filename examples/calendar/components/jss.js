// Setup jss plugins.
import {create} from '@rohitkr/jss'
import extend from '@rohitkr/jss-plugin-extend'
import nested from '@rohitkr/jss-plugin-nested'
import camelCase from '@rohitkr/jss-plugin-camel-case'
import defaultUnit from '@rohitkr/jss-plugin-default-unit'
import vendorPrefixer from '@rohitkr/jss-plugin-vendor-prefixer'

const jss = create()

jss.use(extend())
jss.use(nested())
jss.use(camelCase())
jss.use(defaultUnit())
jss.use(vendorPrefixer())

export default jss
