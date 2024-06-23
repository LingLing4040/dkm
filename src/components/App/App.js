import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function setWidth() {
    setWindowWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', setWidth);
    return () => {
        window.removeEventListener('resize', setWidth);
    };
  });

  return (
    <div className="page">
      <div className='content'>
      <Header windowWidth={windowWidth}/>
      <Main />
      <Footer />
      </div>
    </div>
  );
}

export default App;
