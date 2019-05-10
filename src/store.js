import React, { useState, useReducer } from 'react'

const poemReducer = (poem, action) => {
  const {type, payload} = action
  const {lines} = poem
  switch (type) {
  case 'add':
    return {...poem, lines: lines.concat(payload)}
  case 'updateName':
    return {...poem, name: payload}
  default:
    return poem
  }
}

export function myStore(props) {
  const [user, setUser] = useState('')
  const [project, updateProject] = useState('new project')
  const [poem, poemDispatch] = useReducer(poemReducer,  {name: 'dumb default poem name', lines: []})
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
    poem,
    poemDispatch,
    login,
    logout,
    emojis: '🐱 🐶 🐭 🐹 🐰'
  }

}

export const StuffContext = React.createContext()

export const StuffProvider = props => (
  <StuffContext.Provider value={{...myStore()}}>{props.children}</StuffContext.Provider>
)
