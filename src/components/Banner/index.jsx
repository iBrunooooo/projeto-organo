import BannerStyles from "./styled"
import FotoBanner from "/img/banner.png"

const Banner = () => {
  return (
    <BannerStyles>
      <img src={FotoBanner} alt="Foto do banner da página." />
    </BannerStyles>
  )
}

export default Banner; 
