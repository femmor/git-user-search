import React, { useState, useEffect, createContext , useContext} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  // App Logic and Functionality
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  // const fetchUser = async () => {

  // }

  // useEffect(() => {
  //   fetchUser()
  // }, [])

  return (
    <GithubContext.Provider value={{
      githubUser,
      repos,
      followers
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export const useGithubContext = () => {
  return useContext(GithubContext)
}