import Button from "../components/Button"
import Globe2 from "../components/Globe2"
import IndiaMap from "../components/IndiaMap"
import State from "../components/State"


import "./css/Home.css"

function Home() {
  return (
    <>
      <div className='globe_home pt-2'>
        <div className="globe_title">INDIA</div>
        <p>3D Projection</p>
        {/* <Button /> */}
        <Globe2 />

        <div className="globe_angle">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
        </div>
        <IndiaMap />
        <State />
        <img src="images\delhi.png" alt="delhi" />
      </div>

    </>
  )
}

export default Home
