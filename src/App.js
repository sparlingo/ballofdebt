import React, { Component } from 'react'
import '../node_modules/react-vis/dist/style.css'
import '../node_modules/bulma/css/bulma.min.css'
import {Button} from '../node_modules/react-bulma-components'
  
class App extends Component {
  render() {
    return (
      <section className="theTop">
        <div className="container">
          <Button color="primary">Blah Blah</Button>
        </div>
      </section>
    )
  }
}

export default App