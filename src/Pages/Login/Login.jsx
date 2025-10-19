import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signIn}=use(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target

        const email = form.email.value
        const password = form.password.value
        console.log({email,password})
        signIn(email, password)
          .then((result) => {
        
            console.log(result.user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });


    }
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='text-2xl font-semibold text-center'>Login Your Account !</h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-neutral mt-4">Login</button>
              <p className='text-center font-bold py-3'>Don't Have An Account? Please <Link className='text-secondary underline' to='/auth/register'>Register</Link></p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Login;