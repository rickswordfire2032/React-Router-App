import React from 'react';
import { UserForm } from './Components/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}
const About = () => {
  return (
    <div>
      <p>About</p>
    </div>
  );
};

export default About;
