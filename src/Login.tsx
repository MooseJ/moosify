import { useAuth } from 'auth/auth';
import { FaPowerOff } from 'react-icons/fa'

const Login = () => {
  const auth = useAuth();
  return (
    <div style={{margin: 'auto', width: '50%', marginTop: '20%', textAlign: 'center'}}>
      <button 
        style={{margin: '10px', padding: '30px'}}
        onClick={() => auth.authorize()}
      >
        <FaPowerOff/>
      </button>
    </div>
  )
}

export default Login;