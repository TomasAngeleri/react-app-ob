import React, {useState} from 'react'

const loggedStyled = {
  color: 'white'
}

const unloggedStyled = {
  color: 'tomato',
  fontWeight: 'bold'
}

const GreetingStyled = (props) => {
  const greetingUser = () => (<p>Hola, {props.name}</p>)
  const pleaseLogin = () => (<p>Plaese login</p>)
  const [logged, setLogged] = useState(false);
  return (
    <div style={logged ? loggedStyled : unloggedStyled}>
        {logged ? greetingUser(props)  : pleaseLogin() }
        <button onClick={() => setLogged(!logged)}>
          {logged ? 'Logout': 'Login'}
        </button>
    </div>
  )
}

export default GreetingStyled