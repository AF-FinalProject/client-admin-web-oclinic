import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Order from './pages/Order';
import PageNotFound from './components/PageNotFound'
import store from './redux/store'
import FormEditOrder from './pages/FormEditOrder'
import Login from './pages/Login'
import Customer from './pages/Customer'
import CustomerOrder from './pages/CustomerOrder'
import Location from './pages/Location'
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            
          <Route path="/login" exact>
              <Login/>
            </Route>

            <Route path="/" exact>
              <Customer/>
            </Route>

            <Route path="/order" exact>
              <Order/>
            </Route>

            <Route path="/order/:id" exact>
              <CustomerOrder/>
            </Route>

            <Route path="/order/location/:id" exact>
              <Location/>
            </Route>
            
            <Route path="/FormEditOrder/:id" exact >
              <FormEditOrder/>
            </Route>

            <Route path="*">
              <PageNotFound/>
            </Route>

          </Switch>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
