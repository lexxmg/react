
import React from 'react';
import s from './user.module.css';
import Preload from '../../common/Preloader/Preloader';
import noFoto from '../../../assets/images/images.jpeg';

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU

class User extends React.Component {

  constructor(props) {
    super(props);
    //{ profile, photos, fullName, aboutMe } = this.props;
    this.state = {
      status: 'какой то статус',
      edit: false,
      inputValue: ''
    };

    this.editOn = this.editOn.bind(this);
    this.editOff = this.editOff.bind(this);
  }

  setValue(event) {
    event.preventDefault();
    const value = event.target.value;

    this.setState({inputValue: value});
  }

  editOn() {
    this.setState({edit: true});
  }

  editOff() {
    const status = this.state.inputValue;
    this.setState({
      edit: false,
      status: status
    });
  }

  render() {
    if(!this.props.profile) {
      return <Preload />
    }

    return (
      <div className={s.user}>
        <div className={s.wrapper_image}>
          <div className={s.image}>
            <img src={this.props.photos.small ? this.props.photos.small : noFoto} alt="дрын" className={s.img}/>
          </div>

          <div className={s.wrapper_staus}>
            {
              this.state.edit
              ? <input type="text"
                  className={s.wrapper_staus__input}
                  value={this.state.inputValue}
                  onBlur={this.editOff}
                  onChange={(event) => this.setValue(event)}
                />
              : <span className={s.wrapper_staus__text} onClick={this.editOn}>{this.state.status}</span>
            }
          </div>
        </div>

        <div className={s.info}>
          <h2 className={s.title}>{this.props.fullName}</h2>

          <ul className={`${s.user__list} ${s.list}`}>
            <li className={s.list__item}>
              <span className={s.list__dada}>Обо мне:</span>
              <span className={s.list__text}>{this.props.aboutMe}</span>
            </li>
            <li className={s.list__item}>
              <span className={s.list__dada}>City:</span>
              <span className={s.list__text}>Moscow</span>
            </li>
            <li className={s.list__item}>
              <span className={s.list__dada}>Ed:</span>
              <span className={s.list__text}>333</span>
            </li>
            <li className={s.list__item}>
              <span className={s.list__dada}>Web:</span>
              <span className={s.list__text}>www</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default User;
