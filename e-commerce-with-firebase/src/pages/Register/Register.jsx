import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser, error : authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {

        if(authError) {
            setError(authError)
        }

    }, [authError])

    return (
        <div>
            <h1>Register to buy</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input type="text" name="displayName" required placeholder="User name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder="User E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirm Password</span>
                    <input type="password" name="confirmPassword" required placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {!loading && <button className="btn">Register</button>}
                {loading && <button className="btn" disabled>Loading...</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Register