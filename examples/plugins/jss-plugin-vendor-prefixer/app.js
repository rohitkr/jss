import jss from '@secure-jss/jss'
import jssPluginVendorPrefixer from '@secure-jss/jss-plugin-vendor-prefixer'

const styles = {
  button: {
    transform: 'translateX(100px)'
  }
}

// JSS Setup
jss.use(jssPluginVendorPrefixer())
const {classes} = jss.createStyleSheet(styles).attach()

// Application logic.
const div = document.body.appendChild(document.createElement('div'))
div.innerHTML = `<button class="${classes.button}">Button</button>`
