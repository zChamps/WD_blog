import styles from "./Login.module.css"

import { useAuthentication } from "../../Hooks/useAuthentication"

import { useState, useEffect } from "react"

const Login = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {login, error: authError, loading} = useAuthentication()

  const handleSumit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)


    console.log(res)
  }

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])




  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
    <p>Faça o login para poder utilizar o sistema</p>
    <form onSubmit={handleSumit}>
      <label>
        <span>E-mail:</span>
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail do usuário"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Senha:</span>
        <input
          type="password"
          name="password"
          required
          placeholder="Insira a senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
    
      {/* <button className="btn">Cadastrar</button> */}
      {!loading && <button className="btn">Entrar</button>}
      {loading && (
        <button className="btn" disabled>
          Aguarde...
        </button>
      )}
      {error && <p className="error">{error}</p>}
    </form></div>
  )
}

export default Login