import Intro from "./Intro";
import Skills from "./Skills";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{"Portfolio"}</title>
      </Helmet>
      <Intro />
      <Skills />
    </div>
  );
};

export default Home;
