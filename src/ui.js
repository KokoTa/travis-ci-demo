/**
 * 用于UI测试
 */
import React, { PureComponent } from 'react'

export default class UI extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value || 0
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      ...nextProps
    })
  }

  add = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }))
  }

  input = (e) => {
    const value = e.target.value
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <h1 className="number">{this.state.value}</h1>
        <input type='text' onChange={this.input}/>
        <button onClick={this.add}></button>
      </div>
    )
  }
}

