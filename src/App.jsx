import NavMenu from './Components/NavMenu/NavMenu';
import NewsData from './Components/NewsData/NewsData';
import './App.css';

function App() {


  return (
    <>
      <div className='app bg-indigo-800'>
        .<div className='container mx-auto max-w-screen-xl py-0' >
          <NavMenu/>
          <NewsData/>
        </div>
      </div>

    </>
  )
}

export default App
