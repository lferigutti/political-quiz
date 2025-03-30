
import { Link } from "react-router";
import { homeText } from "../constants/copyText.js";
import Card from "../shared/Card.js";
import Button from "../shared/Button.js";

const Home = () => {
  return (
    <div className="m-2 max-w-2xl">
      <Card title={homeText.homeTitle}>
        {homeText.homeDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="w-full justify-end flex">
          <Button type="primary">
            <Link to="/test-politico">Comenzar el Test</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;
