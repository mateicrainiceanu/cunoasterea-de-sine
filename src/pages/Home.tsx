import React from 'react'
import Landing from './HomeComponents/Landing'
import ShortDesc from './HomeComponents/ShortDesc';
import More from './HomeComponents/More';
import WToDo from './HomeComponents/WToDo';
import Examples from './HomeComponents/Examples';
import Cta from './HomeComponents/Cta';
import Why from "./HomeComponents/Why"

function Home() {
  return (
    <>
        <Landing />
        <main className="main">
            <ShortDesc />
            <More />
            <WToDo />
            <Examples />
            <Cta />
            <Why/>

        </main>
    </>
  )
};

export default Home;