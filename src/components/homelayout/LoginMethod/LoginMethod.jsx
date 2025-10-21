import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Provider/AuthProvider';
import { auth } from '../../../firebase/firebase.config';

const LoginMethod = () => {
  const { signInGoogle, googleProvider, signInGitHub, githubProvider } =
    use(AuthContext);

  const handleSignInGoogle = ()=>{
    signInGoogle(auth,googleProvider)
    .then(result => {
      console.log(result)
    })
    .cathch(error => {
      console.log(error)
    })
  }

  const handleSignInGitHub =()=>{
    signInGitHub(auth,githubProvider)
    .then(res => {
      console.log(res)
    })

    .catch(error =>{
      console.log(error)
    })
  }
    return (
      <div>
        <h2 className="font-bold mb-5">Login With</h2>
        <div className="space-y-3">
          <button onClick={handleSignInGoogle} className="btn btn-outline w-full btn-primary">
            {" "}
            <FcGoogle size={24} />
            Login with Google
          </button>
          <button onClick={handleSignInGitHub} className="btn btn-outline w-full btn-secondary">
            <FaGithub size={24} />
            Login with Github
          </button>
        </div>
      </div>
    );
};

export default LoginMethod;