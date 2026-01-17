import StyleCard from "./components/styles/StyleCard";
import ProfileCard from "./components/styles/ProfileCard";
import Icon from "./components/styles/Icon";

import Heros from "./components/state/Heros";

const App = () => {
  return (
    <div>
      <StyleCard />
      <ProfileCard />
      <Icon />
      <Heros />
    </div>
  );
};

export default App;
