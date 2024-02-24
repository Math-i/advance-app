import "../../assets/css/home.css";
const Home = () => {
  return (
    <div className="home_container">
      <div className="top1">
        <div className="main_head">
          <div className="box">
            <div className="first_line">
             Empowering Farmers,
              Cultivating Solutions.
            </div>
            <div className="second_line">
              From seed to yield, we're here to provide the capital and support
              you need to grow your farm, your community, and your future.
            </div>
            <button className="button_home" type="button">
              Learn More
            </button>
          </div>
        </div>
        <div className="main2">
          <div className="small_box"></div>
          <div className="small_box"></div>
          <div className="small_box"></div>
        </div>
      </div>
        
      <div className="content">
      </div>
        <div className="banner"></div>
    </div>
  );
};

export default Home;
