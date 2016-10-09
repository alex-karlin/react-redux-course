import React from 'react';

// Uses class because of hot reloading
class AboutPage extends React.Component {
  render(){
    return(
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;
