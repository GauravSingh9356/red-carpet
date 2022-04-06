import React, { useState } from 'react';
import { register, login } from '../actions/index';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (user.email && user.password) {
      dispatch(login(user.email, user.password));
    }
  };

  const handleSignUp = () => {
    if (user.username && user.email && user.password) {
      dispatch(register(user.username, user.email, user.password));
    }
  };
  return (
    <>
      <div className='section'>
        <div className='container'>
          <div className='row full-height justify-content-center'>
            <div className='col-12 text-center align-self-center py-5'>
              <div className='section pb-5 pt-5 pt-sm-2 text-center'>
                <h6 className='mb-0 pb-3'>
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className='checkbox'
                  type='checkbox'
                  id='reg-log'
                  name='reg-log'
                />
                <label for='reg-log'></label>
                <div className='card-3d-wrap mx-auto'>
                  <div className='card-3d-wrapper'>
                    <div className='card-front'>
                      <div className='center-wrap'>
                        <div className='section text-center'>
                          <h4 className='mb-4 pb-3'>Log In</h4>
                          <div className='form-group'>
                            <input
                              type='email'
                              name='logemail'
                              className='form-style'
                              placeholder='Your Email'
                              id='logemail'
                              autocomplete='off'
                              onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                              }
                              value={user.email}
                            />
                            <i className='input-icon uil uil-at'></i>
                          </div>
                          <div className='form-group mt-2'>
                            <input
                              type='password'
                              name='logpass'
                              className='form-style'
                              placeholder='Your Password'
                              id='logpass'
                              autocomplete='off'
                              onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                              }
                              value={user.password}
                            />
                            <i className='input-icon uil uil-lock-alt'></i>
                          </div>
                          <a
                            href='#'
                            className='btn mt-4'
                            onClick={handleLogin}
                          >
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='card-back'>
                      <div className='center-wrap'>
                        <div className='section text-center'>
                          <h4 className='mb-4 pb-3'>Sign Up</h4>
                          <div className='form-group'>
                            <input
                              type='text'
                              name='logname'
                              className='form-style'
                              placeholder='Your Full Name'
                              id='logname'
                              autocomplete='off'
                              onChange={(e) =>
                                setUser({ ...user, username: e.target.value })
                              }
                              value={user.username}
                            />
                            <i className='input-icon uil uil-user'></i>
                          </div>
                          <div className='form-group mt-2'>
                            <input
                              type='email'
                              name='logemail'
                              className='form-style'
                              placeholder='Your Email'
                              id='logemail'
                              autocomplete='off'
                              onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                              }
                              value={user.email}
                            />
                            <i className='input-icon uil uil-at'></i>
                          </div>
                          <div className='form-group mt-2'>
                            <input
                              type='password'
                              name='logpass'
                              className='form-style'
                              placeholder='Your Password'
                              id='logpass'
                              autocomplete='off'
                              onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                              }
                              value={user.password}
                            />
                            <i className='input-icon uil uil-lock-alt'></i>
                          </div>
                          <a
                            href='#'
                            className='btn mt-4'
                            onClick={handleSignUp}
                          >
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
