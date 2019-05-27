import React from 'react'
import { configure, mount } from 'enzyme' // 渲染器，可以把它当作一个浏览器
import sinon from 'sinon' // 用于统计事件等
import Adapter from 'enzyme-adapter-react-16' // enzyme 需要的适配器
import UI from '../src/ui'

configure({ adapter: new Adapter() })

describe('UI Test', () => {
  it('UI have h1?', () => {
    const wrapper = mount(<UI />)
    const h1 = wrapper.find('h1')
    expect(h1).toHaveLength(1)
    expect(parseInt(h1.text())).toBe(0)
  })

  it('UI click will get 1?', () => {
    const wrapper = mount(<UI />)
    const h1 = wrapper.find('h1')
    const v1 = parseInt(h1.text())

    wrapper.find('button').simulate('click')
    const v2 = parseInt(h1.text())
    expect(v2).toBe(v1 + 1)
  })

  it('UI input function right?', () => {
    const wrapper = mount(<UI />)
    const h1 = wrapper.find('h1')
    wrapper.find('input').simulate('change', {
      target: {
        value: 5
      }
    })
    expect(parseInt(h1.text())).toBe(5)
  })

  it('UI set props right?', () => {
    const wrapper = mount(<UI value={5} />)
    const h1 = wrapper.find('h1')
    sinon.spy(UI.prototype, 'componentWillReceiveProps')
    expect(parseInt(h1.text())).toBe(5)

    wrapper.setProps({ value: 10 })
    expect(parseInt(h1.text())).toBe(10)

    const callCount = UI.prototype.componentWillReceiveProps.callCount
    expect(callCount).toBe(1)
  })
})
