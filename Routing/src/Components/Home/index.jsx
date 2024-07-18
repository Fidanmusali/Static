import React from 'react'
import city1 from '../../../public/Img/city1.png'
import city2 from '../../../public/Img/city2.png'
import city3 from '../../../public/Img/city3.png'

import "./style.css"
const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Cities</h1>
        <div className="homeGroup">
          <div className="homeGrp1">
            <div className="homeInfo">
              <h2>City 1 </h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deserunt quidem quibusdam esse a dolorum praesentium! Commodi, blanditiis dignissimos! Harum nihil dicta quod voluptatibus laborum nobis explicabo rem ea quibusdam!
                Molestiae quo debitis voluptatibus quis maxime facilis, aliquam et magnam repellat alias veniam eaque tempora culpa porro suscipit consequuntur ipsa. Rem repellendus quod provident quis cumque vel sunt, dolor accusantium.</p>
            </div>
            <div className="homeImg">
              <img src={city1} alt="" />
            </div>
          </div>

          <div className="homeGrp1">
            <div className="homeInfo">
              <h2>City 2 </h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deserunt quidem quibusdam esse a dolorum praesentium! Commodi, blanditiis dignissimos! Harum nihil dicta quod voluptatibus laborum nobis explicabo rem ea quibusdam!
                Molestiae quo debitis voluptatibus quis maxime facilis, aliquam et magnam repellat alias veniam eaque tempora culpa porro suscipit consequuntur ipsa. Rem repellendus quod provident quis cumque vel sunt, dolor accusantium.</p>
            </div>
            <div className="homeImg">
              <img src={city2} alt="" />
            </div>
          </div>

          <div className="homeGrp1">
            <div className="homeInfo">
              <h2>City 3 </h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deserunt quidem quibusdam esse a dolorum praesentium! Commodi, blanditiis dignissimos! Harum nihil dicta quod voluptatibus laborum nobis explicabo rem ea quibusdam!
                Molestiae quo debitis voluptatibus quis maxime facilis, aliquam et magnam repellat alias veniam eaque tempora culpa porro suscipit consequuntur ipsa. Rem repellendus quod provident quis cumque vel sunt, dolor accusantium.</p>
            </div>
            <div className="homeImg">
              <img src={city3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home