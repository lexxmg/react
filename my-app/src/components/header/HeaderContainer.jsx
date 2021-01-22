
import React from 'react';
import Header from './Header/Header';
import { profileAPI, authAPI } from '../../api/api';
import { connect } from 'react-redux';
import { getAuthUser, userLogout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUser();
    // authAPI.getAuthUser().then(data => {
    //   //console.log(res.data.data);
    //   if (data.resultCode === 0) {
    //     const {id, email, login} = data.data;
    //     this.props.setUserData(id, email, login);
    //     //return id;
    //     profileAPI.getProfile(id).then(data => {
    //       this.props.setAuthProfile(data);
    //     })
    //   }
    // })
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

export default connect(mapStateToProps, {getAuthUser, userLogout})(HeaderContainer);
