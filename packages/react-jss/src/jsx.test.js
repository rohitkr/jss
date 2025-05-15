/** @jsx jsx */
import expect from 'expect.js'
import TestRenderer from 'react-test-renderer'
import {create as createJss} from '@secure-jss/jss'
import {create as createCss} from '@secure-jss/css-jss'
import {create as createJsx} from './jsx'
import {createGenerateId} from '../../../tests/utils'

let currJsx

const jsx = (...args) => currJsx(...args)

describe('React-JSS: jsx', () => {
  beforeEach(() => {
    const jss = createJss({createGenerateId})
    const css = createCss(jss)
    currJsx = createJsx(css)
  })

  it('should render', () => {
    const renderer = TestRenderer.create(
      <div className="test" css={{color: 'red'}}>
        <span>test1</span>
        <span>test2</span>
      </div>
    )
    expect(renderer.toJSON()).to.eql({
      type: 'div',
      props: {
        className: 'test css-0-id'
      },
      children: [
        {
          type: 'span',
          props: {},
          children: ['test1']
        },
        {
          type: 'span',
          props: {},
          children: ['test2']
        }
      ]
    })
  })

  // it('should render <span> with css prop', () => {
  //   const tree = TestRenderer.create(
  //     React.createElement('span', {css: {color: 'red'}}, 'test1')
  //   ).toJSON()
  //   expect(tree).to.eql({
  //     type: 'span',
  //     props: {className: 'css-0'},
  //     children: ['test1']
  //   })
  // })
})
