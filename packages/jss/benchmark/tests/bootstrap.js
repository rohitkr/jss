import {create} from '@secure-jss/jss'
import global from '@secure-jss/jss-plugin-global'

import styles from '../fixtures/bootstrap.json'

// Avoid memory leak with registry.
const options = {Renderer: null}
const jssWithoutGlobal = create(options)
const jssWithGlobal = create(options).use(global())

suite('Bootstrap JSS to CSS', () => {
  benchmark('unnamed .toString()', () => {
    jssWithGlobal.createStyleSheet({'@global': styles}, options).toString()
  })

  benchmark('named .toString()', () => {
    jssWithoutGlobal.createStyleSheet(styles, options).toString()
  })
})
