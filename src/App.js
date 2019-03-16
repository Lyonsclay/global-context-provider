import React, { useContext } from 'react'
import { StuffContext, StuffProvider } from './store'
import logo from './logo.svg'
import './App.css'
import './modal.css'

const App = () => {
  return (
    <StuffProvider>
      <div className="App">
        <header className="App-header">
          <div>
            <Intro />
            <CampaignName />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
          <div style={{ height: 40 }} />
          <Help />
        </header>
      </div>
    </StuffProvider>
  )
}

const Intro = () => {
  const context = useContext(StuffContext)
  const { campaign, user } = context

  return (
    <div>
      <h4>{campaign}</h4>
      <p>Welcome {user || 'new user'} !!</p>
    </div>
  )
}

function Login() {
  const { user, logout } = useContext(StuffContext)
  const modal = React.createRef()
  const toggle = () => {
    modal.current.classList.toggle('show-modal')
  }
  const leave = () => {
    logout()
  }

  return (
    <div>
      {user}
      {user ? (
        <button className="trigger" style={{ width: 140 }} onClick={leave}>
          Log Out
        </button>
      ) : (
        <button className="trigger" style={{ width: 140 }} onClick={toggle}>
          Log In
        </button>
      )}
      <div className="modal" ref={modal}>
        <div className="modal-content">
          {!user && <UserName term="enter user name  :" toggle={toggle} />}
          <span className="close-button" onClick={toggle}>
            ×
          </span>
        </div>
      </div>
    </div>
  )
}

function UserName({ term, toggle }) {
  const { login } = useContext(StuffContext)
  const input = React.createRef()
  const handleSubmit = e => {
    e.preventDefault()
    login(input.current.value)
    toggle()
    input.current.value = ''
  }
  const onClick = () => {
    input.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {term}
        <input type="text" ref={input} onClick={onClick} />
      </label>
      <input type="submit" value="login" />
    </form>
  )
}

const CampaignName = () => {
  const { user, campaign, updateCampaign } = useContext(StuffContext)
  const input = React.createRef()
  const handleSubmit = e => {
    e.preventDefault()
    updateCampaign(input.current.value)
    input.current.value = ''
  }
  const onChange = () => {
    updateCampaign(input.current.value)
  }
  if (!user) return null
  return (
    <div>
      <h4>{campaign}</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Change Campaign Name :
          <input type="text" name="name" ref={input} onChange={onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

const Help = () => {
  const context = useContext(StuffContext)
  return (
    <button
      style={{ width: 140 }}
      onClick={() => alert(JSON.stringify(context))}
    >
      Help
    </button>
  )
}

export default App