import {Component} from 'react'

class Welcome extends Component {
  render(props) {
    const {name} = this.props
    return <h1> Hello User..{name}...</h1>
  }
}

export default Welcome
