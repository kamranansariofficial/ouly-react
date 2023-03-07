// material theme

// routes
import Routes from "./routes";

import ThemeProvider from "theme";
import GlobalStyles from "theme/globalStyles";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
