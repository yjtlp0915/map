import React, {
    Component
} from 'react';
import Footer from './components/Footer.js'
import './assets/css/index.css';

class App extends Component {
    render() {
        return (
            <div className="app">
        <h3>找厕所</h3>
        <Footer></Footer>
      </div>
        );
    }
}

export default App;