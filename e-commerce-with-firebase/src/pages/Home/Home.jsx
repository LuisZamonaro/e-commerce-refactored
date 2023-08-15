import './Home.css'
import HomeLeftContainer from '../../components/HomeLeftContainer'
import HomeRightContainer from '../../components/HomeRightContainer'

const Home = () => {


  return (
    <>
      <div className="containerHome">
        <HomeLeftContainer />
        <HomeRightContainer />
      </div>
    </>
  )
}

export default Home