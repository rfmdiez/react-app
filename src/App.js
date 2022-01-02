
import './App.css';
import Message from './Message';

const Description = () => {
  return <p>Esta es la descripion del curso</p>
}

const App = () =>{
  return (
    <div className="App">
      Hola Mundooo
      <Message color='red' msg='Estamos trabajando ' />
      <Message color='green' msg='En un curso' />
      <Message color='yellow' msg='De React' />
      <Description />
    </div>
  );
}

export default App;
