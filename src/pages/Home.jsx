import Button from "../components/Button"
import Globe2 from "../components/Globe2"
import IndiaMap from "../components/IndiaMap"
import State from "../components/State"


import "./css/Home.css"

function Home() {
  return (
    <>
      <div className='globe_home pt-2'>
        <Button />
        <Globe2 />
        
          <IndiaMap />
         <State/>
      </div>

    </>
  )
}

export default Home
