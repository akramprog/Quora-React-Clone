import { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar } from '@material-ui/core'

export class Navigation extends Component {
  render(){
    return (
      <nav>
        <h1>Navigation</h1>
        <HomeIcon />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </nav>
    )
  }
}
