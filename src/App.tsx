import './App.css'
import Footer from './components/footer/Footer'
import Navigation from './components/navbar/Navigation'
import trollface from './assets/images/Untitled.jpg'


const App = () => {
  return (
    <>
      <div className="app-container">
        <Navigation />
          <div className='body-container'>
            <h1>Welcome to my React Project</h1>
            <div className='troll-image'>
              <img className='troll' src={trollface} alt='TrollFace'></img>
            </div>
          </div>  
          <Footer />
        </div>
    </>
  )
}
export default App