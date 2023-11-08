import { Route, Link } from 'wouter';
import Home from './pages/Home';

function App() {
  return (
    <div>
 
      <main>
        <Route path="/" component={Home} />
    
      </main>
    </div>
  );
}

export default App;