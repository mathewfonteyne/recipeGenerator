import "./App.css";
import { Button, Card } from "reactstrap";

function App() {
  const fetchRandomRecipe = async () => {
    const apiKey = "7cba6ededf3e4c0faa99e52dac68178d";
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    const reqOptions = {
      method: "GET",
    };
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      let title = data.recipes[0].title; // targeting the title of the res.json
      console.log(title, data.recipes);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <Button color="success" onClick={fetchRandomRecipe}>
        <h3>Get Recipe</h3>
      </Button>
    </div>
  );
}

export default App;
