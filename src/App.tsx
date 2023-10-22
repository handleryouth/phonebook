import { PrimeReactProvider } from "primereact/api";
import { RouteStack } from "routes";
import { Layout } from "components";
import { BrowserRouter } from "react-router-dom";
import {
  FavoritesContactProvider,
  SeoProvider,
  ServicesProvider,
  ThemeProvider,
} from "context";
import "primeicons/primeicons.css";
import "@fontsource-variable/inter";

function App() {
  return (
    <PrimeReactProvider>
      <ServicesProvider>
        <BrowserRouter>
          <ThemeProvider>
            <SeoProvider>
              <FavoritesContactProvider>
                <Layout>
                  <RouteStack />
                </Layout>
              </FavoritesContactProvider>
            </SeoProvider>
          </ThemeProvider>
        </BrowserRouter>
      </ServicesProvider>
    </PrimeReactProvider>
  );
}

export default App;
