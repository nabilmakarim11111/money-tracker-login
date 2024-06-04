import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <form className="login" style={formStyle} onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
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

      <button type="submit" style={buttonStyle}>
        Log in
      </button>
    </form>
  );
};

export default Login;
