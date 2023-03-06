// material theme

// routes
import Routes from "./routes";

import ThemeProvider from "theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
