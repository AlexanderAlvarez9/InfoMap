import React, { useState } from 'react';
import './Login.scss'
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useUser } from 'reactfire';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [values, setValues] = useState('')
  const [profile, setProfile] = useState(0);
  const user = useUser();

  const userValues = {
    name: '',
    username: '',
    phone: '',
    address: '',
    profile: 1,
    password: '',
    sla: 1,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSingUp = async () => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await setDoc(doc(db, 'users', cred.user.uid), {
        ...userValues, email: cred.user.email
      });
    } catch (error) {
      toast(error.message, {
        type: 'error',
        autoClose: 2000
      });
    }
  }

  const handlelogout = async () => {
    await signOut(auth);
  }

  const handleSignIn = async () => {
    try {
      const cred = await signInWithEmailAndPassword(auth, values.email, values.password);
      const userP = await getDoc(doc(db, 'users', cred.user.uid));
      if (userP.exists()) setProfile(userP.data().profile);
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <React.Fragment>
      <ToastContainer />

      {
        !user &&
        <div className="Login">
          <h2>Iniciar Sesion</h2>
          <div className="inputBox">

            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Ingrese su correo"
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese su Contraseña"
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSignIn}>Iniciar Sesion</button>
          <button onClick={handleSingUp}>Crear Cuenta</button>
        </div>
      }

      {user &&
        <div className="Login">
          <h2>Sesion Activa</h2>
          <p>Correo Usuario: <br /> {user.email}</p>
          <p>Perfil: {user.photoURL}</p>
          <button onClick={handlelogout}>Cerrar Sesion</button>
        </div>
      }
    </React.Fragment>
  )
}
export default Login;
