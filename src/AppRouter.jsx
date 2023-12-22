// AppRouter.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/task-4" exact component={Login} />
        <Route path="/task-4/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
