import { PrimeReactProvider } from "primereact/api";
import { RouteStack } from "routes";
import { Layout } from "components";
import { MemoryRouter } from "react-router-dom";
import { SeoProvider, ServicesProvider, ThemeProvider } from "context";
import "primeicons/primeicons.css";
import "@fontsource-variable/inter";

function App() {
  return (
    <PrimeReactProvider>
      <ServicesProvider>
        <MemoryRouter>
          <ThemeProvider>
            <SeoProvider>
              <Layout>
                <RouteStack />
              </Layout>
            </SeoProvider>
          </ThemeProvider>
        </MemoryRouter>
      </ServicesProvider>
    </PrimeReactProvider>
  );
}

export default App;
