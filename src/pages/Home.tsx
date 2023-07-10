import Landing from './HomeComponents/Landing';
import ShortDesc from './HomeComponents/ShortDesc';
import More from './HomeComponents/More';
import WToDo from './HomeComponents/WToDo';
import Examples from './HomeComponents/Examples';
import Cta from './HomeComponents/Cta';
import Why from "./HomeComponents/Why";
import Effects from './HomeComponents/Effects';
import Quote from './HomeComponents/Quote';

function Home() {
  return (
    <>
        <Landing />

        <Effects />
        
        <main className="main">
            <ShortDesc />
            <More />
            <WToDo />
            <Quote />
            <Examples />
            <Cta />
            <Why/>

        </main>
    </>
  )
};

export default Home;