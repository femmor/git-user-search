import React, { useState, useEffect, createContext , useContext} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  // App Logic and Functionality

  return (
    <GithubContext.Provider value="hello">
      {children}
    </GithubContext.Provider>
  )
}

export const useGithubContext = () => {
  return useContext(GithubContext)
}