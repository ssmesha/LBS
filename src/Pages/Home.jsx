import SearchComponent from "../Search";


const Home = () => {
  const Logo = require('../Assets/WhatsApp Image 2024-10-05 at 13.10.23.jpeg')

  return(
    <div>
      <SearchComponent />
      Home

      <img 
        scr={Logo}
        height="300"
        width="300"
        className=""
        alt='photo'

      />
    </div>
  );
}
export default Home;