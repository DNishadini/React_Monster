import Greet from "./components/Greet";

import Person from "./components/Person";
import Product from "./components/Product";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <Greet />
      <Person name="Dinushika" age={22} />
      <Product name="Iphone" price={300000000} />
    </div>
  );
};

export default App;
