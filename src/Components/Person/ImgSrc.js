import React from 'react';

class App extends React.Component {
    state = {
      ImgSrc: <img className='img' src="profile.jpg" style={{ width: '200px', borderRadius: '50%'}} alt='profilephoto'/>
    };
    render() {
      return <h5>{this.state.ImgSrc}</h5>;
    }
   }
   export default App;
