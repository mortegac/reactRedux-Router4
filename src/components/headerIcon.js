import React, {Component} from 'react';

class HeaderIcon extends Component {
  render () {
    return (
       <div className="nav-center">
            <a className="nav-item" href="https://github.com/jgthms/bulma"><span className="icon"><i className="fa fa-github"></i></span></a>
            <a className="nav-item" href="https://twitter.com/jgthms"><span className="icon"><i className="fa fa-twitter"></i> </span></a>
        </div>
    )
  }
}

export default HeaderIcon;
