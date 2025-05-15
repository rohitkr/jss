import jss from '@rohitkr/jss'
import jssPluginGlobal from '@rohitkr/jss-plugin-global'

const styles = {
  '@global': {
    body: {
      background: 'green'
    },
    button: {
      background: 'yellow'
    }
  }
}

// JSS Setup
jss.use(jssPluginGlobal())
jss.createStyleSheet(styles).attach()

// Application logic.
const div = document.body.appendChild(document.createElement('div'))
div.innerHTML = `<button>Button</button>`
