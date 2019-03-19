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
            <ProjectName />
            <Poem/>
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
  const { project, user, poem } = context

  return (
    <div>
      <h4>{project}</h4>
      <p>Welcome {user || 'new user'} !!</p>
      <p>Best Poem Ever -- {poem && poem.name || 'has not been written.'}</p>
      <Nested />
    </div>
  )
}

const Nested = () => {
  const { emojis } = useContext(StuffContext)
  return <span>{emojis}</span>
}

function  Poem() {
  const { poem, poemDispatch } = useContext(StuffContext)
    const input = React.createRef()
    const handleSubmitName = e => {
      e.preventDefault()
      poemDispatch({type: 'updateName', payload: input.current.value})
      input.current.value = ''
    }
    const onChange = () => {
      // updateProject(input.current.value)
    }
    return (
      <div>
        <h4>{poem && poem.name}</h4>
        <form onSubmit={handleSubmitName}>
          <label>
            Change Poem Name :
            <input type="text" name="name" ref={input} onChange={onChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
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

const ProjectName = () => {
  const { user, project, updateProject } = useContext(StuffContext)
  const input = React.createRef()
  const handleSubmit = e => {
    e.preventDefault()
    updateProject(input.current.value)
    input.current.value = ''
  }
  const onChange = () => {
    updateProject(input.current.value)
  }
  if (!user) return null
  return (
    <div>
      <h4>{project}</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Change Project Name :
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
