import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../redux/auth/auth.funtion";
import { API } from "../../Shared/Services/api";


const Login = () => {
  const { register, handleSubmit, formState: {errors, isValid}} = useForm();
  console.log(process.env.REACT_APP_BACK_URL);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = (datos) => {
    const formData = new FormData();
    formData.append("name", datos.name);
    formData.append("gender", datos.gender);
    formData.append("role", datos.role);
    formData.append("image", datos.weapons);

    dispatch(newUser(formData, navigate));
  };

const login = async(formadata) =>{
  console.log(formadata);
  const resultado = await API.post("user/login", formadata);
  console.log(resultado);
  localStorage.se("token",resultado.data)
  navigate("");
}

  return (
 
    <form onSubmit={handleSubmit(userLogin)}>
    <h4> Inicia Sesión</h4>
    <h4> ¡Bienvenido de nuevo a Valet!</h4>
    <label>
        Email
        <input type="text" name="email" {...register('email', {
            required: "Introduce un email, por favor",
            minLength: {
                value: 2,
                message: "el email tiene que ser mas largo"
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                message: "Introduce un email con formato valido"
                }            
          })}/>
    </label>
    {errors.email ? <>
        {errors.email.type === "required" && <p>{errors.email.message}</p>}
        {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
      </> : null}
      
    <label>
        Password
        <input type="password" name="password" {...register('password', {
            required:"El password tiene que existir",
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                
          })}/>
    </label>
    {errors.password ? <p>El password no es correcto</p> : null}

    <button disabled={!isValid}>Enviar</button>

    

    </form>
    

  )
}
export default Login;