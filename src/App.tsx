import { ApiRes } from "./constants/apiRes";
import Loader from "./components/loader";
import Home from "./components/home";
import useScrollDirection from "./hook/useScrollDirecrtion";
import useCountDown from "./hook/useCountDown";
import TopBar from "./components/topBar";

import "./styles/App.css";
import "./styles/fonts.scss";
import "./styles/animations.scss";


function App() {
  const scroll = useScrollDirection();
  const { countDown, timer } = useCountDown();

  const sortedArr: typeof ApiRes = ApiRes.reduce((acc: any, element) => {
    return element.id === 3 ? [element, ...acc] : [...acc, element];
  }, []);

  console.log(sortedArr);

  if (countDown > 0 || timer < 100) return <Loader {...{ countDown, timer }} />;

  return (
    <div>
      <TopBar {...{ scroll }} />
      <Home {...{ sortedArr }} />
    </div>
  );
}

export default App;
