import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Body() {
const [typeEffect] = useTypewriter({
  words: [' Fun', ' Love', ' Future' , ' Power'],
  loop:{},
  typeSpeed: 100,
  deleteSpeed: 40
})
  return (
    <div className="App">
    <h1>
      Learning is 
      <span>{typeEffect}</span>
    </h1>
    </div>
  );
}

export default Body;