import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App container-fluid d-flex flex-column gap-2">
      <NavBar />
      <ItemListContainer />
      <Cart />
    </div>
  );
}

export default App;
