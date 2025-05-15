import jss from '@secure-jss/jss'
import preset from '@secure-jss/jss-preset-default'

console.warn(`The JSS Starter Kit is for learning and experimentation.  It's not optimized for production deployment.

If you'd like to use JSS in production, try including the "jss" and "jss-preset-default" modules directly.  See an example at https://github.com/cssinjs/jss#example`)

jss.setup(preset())

export {jss as default, preset}

export * from '@secure-jss/jss'
export * from '@secure-jss/react-jss'

export {default as withStyles} from '@secure-jss/react-jss'

export {default as functions} from '@secure-jss/jss-plugin-rule-value-function'
export {default as observable} from '@secure-jss/jss-plugin-rule-value-observable'
export {default as template} from '@secure-jss/jss-plugin-template'
export {default as global} from '@secure-jss/jss-plugin-global'
export {default as extend} from '@secure-jss/jss-plugin-extend'
export {default as nested} from '@secure-jss/jss-plugin-nested'
export {default as compose} from '@secure-jss/jss-plugin-compose'
export {default as camelCase} from '@secure-jss/jss-plugin-camel-case'
export {default as defaultUnit} from '@secure-jss/jss-plugin-default-unit'
export {default as expand} from '@secure-jss/jss-plugin-expand'
export {default as vendorPrefixer} from '@secure-jss/jss-plugin-vendor-prefixer'
export {default as propsSort} from '@secure-jss/jss-plugin-props-sort'
export {default as isolate} from '@secure-jss/jss-plugin-isolate'
export {default as cache} from '@secure-jss/jss-plugin-cache'
