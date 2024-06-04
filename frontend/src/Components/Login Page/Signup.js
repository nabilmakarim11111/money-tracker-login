import { useState } from "react";
import { useSignup } from "../../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup()

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '3px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '4px'
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form style={formStyle} className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        style={inputStyle}
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>Sign up</button>
    </form>
  );
};

export default Signup;
