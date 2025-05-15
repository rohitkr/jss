import jss from '@rohitkr/jss'
import preset from '@rohitkr/jss-preset-default'

console.warn(`The JSS Starter Kit is for learning and experimentation.  It's not optimized for production deployment.

If you'd like to use JSS in production, try including the "jss" and "jss-preset-default" modules directly.  See an example at https://github.com/cssinjs/jss#example`)

jss.setup(preset())

export {jss as default, preset}

export * from '@rohitkr/jss'
export * from '@rohitkr/react-jss'

export {default as withStyles} from '@rohitkr/react-jss'

export {default as functions} from '@rohitkr/jss-plugin-rule-value-function'
export {default as observable} from '@rohitkr/jss-plugin-rule-value-observable'
export {default as template} from '@rohitkr/jss-plugin-template'
export {default as global} from '@rohitkr/jss-plugin-global'
export {default as extend} from '@rohitkr/jss-plugin-extend'
export {default as nested} from '@rohitkr/jss-plugin-nested'
export {default as compose} from '@rohitkr/jss-plugin-compose'
export {default as camelCase} from '@rohitkr/jss-plugin-camel-case'
export {default as defaultUnit} from '@rohitkr/jss-plugin-default-unit'
export {default as expand} from '@rohitkr/jss-plugin-expand'
export {default as vendorPrefixer} from '@rohitkr/jss-plugin-vendor-prefixer'
export {default as propsSort} from '@rohitkr/jss-plugin-props-sort'
export {default as isolate} from '@rohitkr/jss-plugin-isolate'
export {default as cache} from '@rohitkr/jss-plugin-cache'
