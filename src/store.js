import React, { useState } from 'react'

export function myStore(props) {
  const [user, setUser] = useState('')
  const [project, updateProject] = useState('new project')
  const login = user => {
    setUser(user)
    sessionStorage.setItem('user',{ user })
  }
  const logout = () => {
    setUser('')
    sessionStorage.setItem('user',{ user: {} })
  }
  const changeProjectName = name => {
    updateProject(name)
  }

  return {
    user,
    setUser,
    project,
    updateProject: changeProjectName,
    login,
    logout,
    emojis: '🐱 🐶 🐭 🐹 🐰'
  }

}

export const StuffContext = React.createContext()

export const StuffProvider = props => (
  <StuffContext.Provider value={{...myStore()}}>{props.children}</StuffContext.Provider>
)
