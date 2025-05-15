// Setup jss plugins.
import {create} from '@secure-jss/jss'
import extend from '@secure-jss/jss-plugin-extend'
import nested from '@secure-jss/jss-plugin-nested'
import camelCase from '@secure-jss/jss-plugin-camel-case'
import defaultUnit from '@secure-jss/jss-plugin-default-unit'
import vendorPrefixer from '@secure-jss/jss-plugin-vendor-prefixer'

const jss = create()

jss.use(extend())
jss.use(nested())
jss.use(camelCase())
jss.use(defaultUnit())
jss.use(vendorPrefixer())

export default jss
