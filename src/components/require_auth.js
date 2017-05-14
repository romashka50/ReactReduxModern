import React, { Component } from 'react';
import { connect } from 'react-redux';

function AuthHOC(ComposedComponent) {
  class Auth extends Component {
    static contextTypes = {
      router: React.PropTypes.object,
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ authenticated }) => ({ authenticated });

  return connect(mapStateToProps)(Auth);
}


export default AuthHOC;
