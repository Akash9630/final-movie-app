import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/Redux';
import Dashboard from './components/Dashboard';
import SearchComponent from './components/searchField/SearchComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from './components/form/LogIn';
import SignupForm from './components/form/SignUp';
import ErrorComponent from './components/ErrorComponent';
import "./App.css"



const store = createStore(
  rootReducer,
  window._REDUXDEVTOOLS_EXTENSION_ &&
  window._REDUX_DEVTOOLS_EXTENSION_(),
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/Search" element={<SearchComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App;
