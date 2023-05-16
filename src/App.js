import Button from "@mui/material/Button";

import "./App.css";

function App() {
  return (
    <div>
      <h1> Material UI</h1>;<Button variant="contained">Hello World</Button>
      <Button variant="outlined" disabled>
        Hello World
      </Button>
      <Button variant="text">Call</Button>
    </div>
  );
}

export default App;
