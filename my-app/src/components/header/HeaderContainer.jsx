
import React from 'react';
import Header from './Header/Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
      .then(res => {
        //console.log(res.data.data);
        if (res.data.resultCode === 0) {
          const {id, email, login} = res.data.data;
          this.props.setUserData(id, email, login);
          return id;
        }
      })
      .then(id => console.log(id))
  }

  render() {
    //console.log(this.props);
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    autch: state.autch,
    isAuth: state.autch.isAuth
  }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
