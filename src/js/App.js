import React from 'react';
import BasicPageContainer from './pages/BasicPageContainer';


function App(props) {
  return (
    <div className="App">
        <BasicPageContainer {...props}/>
    </div>
  );
}

export default App;
