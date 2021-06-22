import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import { useGithubContext } from '../context/context';
import loadingImage from '../images/preloader.gif';
const Dashboard = () => {
  const {data} = useGithubContext()
  console.log(data);

  return (
    <main>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  );
};

export default Dashboard;
