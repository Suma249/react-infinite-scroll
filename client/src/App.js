import './App.css';
import Images from './components/Images';

function App() {
  return (
    <div id='root'>
      <div className='hro is-fullheight is-bold is-info'>
        <div className='hero-body'>
          <div className='container'>
            <div className='header content'>
              <h2 className='subtitle is-6'>Code challemge </h2>
              <h1 className='title is-1'>

              </h1>
            </div>
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
