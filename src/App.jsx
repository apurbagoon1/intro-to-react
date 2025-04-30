import './App.css'
import ToDo from './ToDo';
import ToEat from './ToEat';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {

  // const doTime = '30 Days';

  const actors = ['Bappi', 'Jayed', 'Man Na'];

  const singers = [
    { id: 1, name: 'Dr. Mahfuz', age: 60 },
    { id: 2, name: 'Hero Alom', age: 40 },
    { id: 3, name: 'Hasan', age: 50 }
  ];

  const books = [
    { id: 1, name: 'Physics', price: 250 },
    { id: 2, name: 'Chemistry', price: 350 },
    { id: 3, name: 'Math', price: 255 },
    { id: 4, name: 'Biology', price: 290 },
  ]


  return (
    <>
      <h1>Intro to React</h1>

      <Library books={books}></Library>

      <h3>Our Nayoks</h3>
      {
        actors.map((actor, index) => <Actor key={index} actor={actor}></Actor>)
      }

      <h3>Our Gayoks</h3>
      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {/* <h3>My ToDOs</h3>
      <ToDo isDone={true} task="Learn JS" time={doTime}></ToDo>

      <ToDo isDone={false} task="Read a Book"></ToDo>
      <ToDo isDone={true} task="Take a Bath" time="15 Min"></ToDo>
      <ToDo isDone={false} task="Learn React"></ToDo>

      <h3>My ToEats</h3>
      <ToEat isHungry={true} food="Banana"></ToEat>

      <ToEat isHungry={false} food="Mango"></ToEat>
      <ToEat isHungry={true} food="Rice"></ToEat>
      <ToEat isHungry={false} food="Polao"></ToEat> */}

      {/* <Person></Person>
      <Student name="Abul" dept="CSE"></Student>
      <Student name="Babul" dept="EEE"></Student>
      <Student name="Cabul" dept="BBA"></Student>
      <Developer name="Juker" tech="JS"></Developer>
      <Developer name="Suker" tech="Python"></Developer>
      <Developer name="Buker" tech="Java"></Developer>
      <Device name="Laptop" price="80k"></Device>
      <Device name="Tablet" price="40k"></Device>
      <Device name="Mobile" price="20k"></Device>
      <Player name="Shakib" runs ="5000"></Player>
      <Player name="Tamim" runs ="6000"></Player>
      <Player name="Ami"></Player> */}
    </>
  )
}

function Person() {
  const name = 'Apurba Goon';
  const age = '25';
  const personStyle = {
    color: 'green',
    fontWeight: '400'
  }
  return (
    <>
      <h3 style={personStyle}>I am a Peson who is {age} years old and name is {name}</h3>
    </>
  )
}

function Sports() {
  return (
    <>
      <h2>Cricket</h2>
      <p>Cricket is my favourite Game</p>
      <h4>Role:</h4>
      <ul>
        <li>Batting</li>
        <li>Bowling</li>
        <li>Feilding</li>
        <li>Weeket Keeping</li>
        <li>Captancy</li>
      </ul>
      <h4>Result: </h4>
      <ol>
        <li>Win</li>
        <li>Loss</li>
      </ol>
    </>
  )
}

function Animals() {
  const firstPet = 'Dog';
  const secondPet = 'Cat';
  const thirdPet = 'Mouse';
  return (
    <>
      <h2>Pet</h2>
      <h3>My First Favourite Pet is {firstPet}</h3>
      <h4>My Second Favourite Pet is {secondPet}</h4>
      <h5>My Third Favourite Pet is {thirdPet}</h5>
    </>
  )
}

function Student(props) {
  return (
    <div className='primary-style'>
      <h3>Name: {props.name}</h3>
      <h5>Deptartment: {props.dept}</h5>
    </div>
  )
}

function Developer(props) {
  return (
    <div style={{
      margin: '10px',
      padding: '10px',
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <h5>Technology: {props.tech}</h5>
    </div>
  )
}

function Device(props) {
  return (
    <div className='primary-style'>
      <h3>Name: {props.name}</h3>
      <h5>Price: {props.price}</h5>
    </div>
  )
}

// const {name, runs} = {name: 'Tamim', runs: '6000'}

function Player({ name, runs = 0 }) {
  return (
    <div className='secondary-style'>
      <h3>Name: {name}</h3>
      <h5>Runs: {runs}</h5>
    </div>
  )
}

export default App
