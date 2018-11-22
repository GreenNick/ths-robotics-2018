import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Navigation from '../organisms/Navigation'
import PageIndicator from '../atoms/PageIndicator'

class Landing extends Component {
  constructor (props) {
    super (props)
    this.state = { toNextPage: false }
    this.handleWheel = this.handleWheel.bind(this)
  }

  handleWheel (event) {
    (event.deltaY > 0) &&
      this.setState(
        { toNextPage: true }
      )
  }

  render () {
    if (this.state.toNextPage) {
      return <Redirect to='/vex' />
    }
    
    return (
      <main onWheel={this.handleWheel} className='landing'>
        <div style={{gridArea: 'section'}}>
          <h1 style={{marginTop: 100}}>
            Tucker High
            <br />
            School
          </h1>
          <h1 style={{fontWeight: 'normal', fontSize: 56}}>Robotigers</h1>
        </div>
        <PageIndicator />
        <Navigation />
      </main>
    )
  }
}

export default Landing