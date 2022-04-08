import './App.css';
import { getAuth } from "firebase/auth"
import app from './firebase.init';

const auth = getAuth(app)
function App() {
  return (
    <div className="App">
      <form>
        <input type="email" name="email" id="" placeholder='Email' />
        <br />
        <input type="password" name="password" id="" placeholder='Password' />
        <br />
        <input type="submit" value="Loge In" />
      </form>
    </div>
  );
}

export default App;
