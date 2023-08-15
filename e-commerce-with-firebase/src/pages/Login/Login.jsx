import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {login, error : authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
      e.preventDefault()

      setError('')

      const user = {
          email,
          password
      }

      const res = await login(user)

      console.log(res)
  }

  useEffect(() => {

      if(authError) {
          setError(authError)
      }

  }, [authError])

  return (
    <div className="containerLogin">
        <h1>Login</h1>
        <p className="loginToUser">Login to user the site</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <div className="userEmail">E-mail:</div>
                    <input type="email" name="email" required placeholder="User E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <div className="userPassword">Password:</div>
                    <input type="password" name="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                {!loading && <button className="btn">Login</button>}
                {loading && <button className="btn" disabled>Loading...</button>}
                {error && <p>{error}</p>}
            </form>
    </div>
  )
}

export default Login