import React from 'react';
import styled from 'styled-components';
import { useGithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const {repos} = useGithubContext()

// Using reduce method to get the % of languages used
  const languages = repos.reduce((total, item) => {
    // Destructure language out of each repo {item} - repo is an object
    const {language, stargazers_count} = item
    // check if language is null - return total
    if (!language) {
      // return it
      return total
    }
    // Check if the returned total object has the language property
    if(!total[language]) {
      // if it does not, create one - total[language]
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      // if it does, if the language is there, keep the language property, and override the value of the language property
      total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count, }
    }

    // return total - a must for the reduce method
    return total
  }, {})


  // Since we are setting it as an array, we use Object.values() method

  // Most Used
  const mostUsed = Object.values(languages)
    // Sort it based on highest values first
    .sort((a, b) => b.value - a.value)
    // Get the first 5 values
    .slice(0, 5)
  
  // Most stars per language

  // Most Popular
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars }
    })
    .slice(0, 5)

  console.log(mostPopular);
  

  // const chartData = [
  //   {
  //     label: "HTML",
  //     value: "13"
  //   },
  //   {
  //     label: "CSS",
  //     value: "23"
  //   },
  //   {
  //     label: "JavaScript",
  //     value: "80"
  //   },
  // ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed}/>
        <Doughnut2D data={mostPopular}/>
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }

  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
