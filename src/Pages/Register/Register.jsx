import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {creatUser,setUser} = use(AuthContext)

    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target
        // console.log(form)
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name,photo,email,password)

        creatUser(email, password)
          .then((result) => {
            console.log(result);
            setUser(result.user)
          })
          .catch((error) => {
            alert(error)
          });
    }
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="text-2xl font-semibold text-center">
            Register Your Account !
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
                {/* name */}
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Name" />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input type="text" name='photo' className="input" placeholder="Photo URL" />
              {/* email field */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              {/* password faield */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
             
              <button type='submit' className="btn btn-neutral mt-4">Register</button>
              <p className="text-center font-bold py-3">
                Already Have An Account? Please
                <Link className="text-secondary underline" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Register;