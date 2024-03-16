import { useTypewriter, Cursor } from 'react-simple-typewriter'
import "./body.css";
import homeimg from "../../../assets/homeimg.png";

function Body() {
  const [typeEffect] = useTypewriter({
    words: [' Fun', ' Love', ' Future', ' Power'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <div className="App body-home">
      {/* <div className="cont-header">
        <div className="conts-head">
          <h1 className='h1-body-type'>
            Learning is
            <span>{typeEffect}</span>
          </h1>
        </div>
        <div className="conts-head">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
        </div>
      </div> */}
      <section id="hero">
            <div className="text-content">
                <h2>Welcome to <span>LearnHub</span></h2>
                <h4>where</h4>
                <h1>Learning is
            <span>{typeEffect}</span></h1>
            </div>
            <div className="image-container">
                <img src={homeimg} alt="Background Image" />
            </div>
        </section>
    </div>
  );
}

export default Body;