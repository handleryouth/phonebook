import "primeicons/primeicons.css";
import "@fontsource-variable/inter";

import { Layout } from "components";
import {
  FavoritesContactProvider,
  SeoProvider,
  ServicesProvider,
  ThemeProvider,
} from "context";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import { RouteStack } from "routes";

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
