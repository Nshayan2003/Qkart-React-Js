import React from "react";
//import ReactDOM from "react-dom";
import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import Products from "./components/Products";

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Product} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/thanks" component={Thanks} />
            </Switch>
          </BrowserRouter>
          {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
