import React, { useState } from 'react'

export function myStore(props) {
  const [user, setUser] = useState('')
  const [campaign, updateCampaign] = useState('new campaign')
  const login = user => {
    setUser(user)
    sessionStorage.setItem('user',{ user })
  }
  const logout = () => {
    setUser('')
    sessionStorage.setItem('user',{ user: {} })
  }
  const changeCampaignName = name => {
    updateCampaign(name)
  }

  return {
    user,
    setUser,
    campaign,
    updateCampaign: changeCampaignName,
    login,
    logout,
  }

}

export const StuffContext = React.createContext()

export const StuffProvider = props => (
  <StuffContext.Provider value={{...myStore()}}>{props.children}</StuffContext.Provider>
)
