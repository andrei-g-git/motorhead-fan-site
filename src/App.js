import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeStore } from './redux/MakeStore';

const store = makeStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>   
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>   
    </div>
  );
}

export default App;

