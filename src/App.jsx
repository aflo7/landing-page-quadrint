import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';

function App() {
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <nav>
          <img
            src="https://quadrint.com/wp-content/themes/quadrint_new/dist/images/logos/Quadrint_logo2.svg"
            height="60px"
          />
          <div
            style={{
              border: '1px solid lightgray',
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <RxHamburgerMenu size="1.6rem" />
          </div>
        </nav>
      </div>
      <div className="main-wrapper">
        <main>
          <div className="quadrint-logo-wrapper">
            <img src="https://quadrint.com/wp-content/themes/quadrint_new/dist/images/hero_tagline.png" />
          </div>
          <div>
            <h1>Experience Powering Intelligence</h1>
            <p style={{ color: 'white' }}>
              As a trusted partner to federal agencies, we provide solutions
              that improve business efficiency and enable total collaboration at
              the enterprise level. Mission success is our shared goal, and
              Quadrint achieves it by remaining agile, innovative and strategic.
              Our steadfast, intelligent advice empowers our clients to do more.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
