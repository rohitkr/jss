import {create} from '@rohitkr/jss'
import preset from '@rohitkr/jss-preset-default'

// Avoid memory leak with registry.
const options = {Renderer: null}

suite('create a new instance', () => {
  benchmark('without preset', () => {
    create(options)
  })

  benchmark('with preset', () => {
    create({
      ...options,
      ...preset()
    })
  })
})
