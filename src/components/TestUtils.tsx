/**
 * @jest-environment jsdom
 */
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import {
  FavoritesContactProvider,
  SeoProvider,
  ServicesProvider,
  ThemeProvider,
} from "context";
import { ReactElement, ReactNode } from "react";
import { RenderOptions, render } from "@testing-library/react";
import "primeicons/primeicons.css";
import "@fontsource-variable/inter";
import "@testing-library/jest-dom";

interface TestSetupProps {
  children: ReactNode;
}

const TestSetup = ({ children }: TestSetupProps) => {
  return (
    <PrimeReactProvider>
      <ServicesProvider>
        <BrowserRouter>
          <ThemeProvider>
            <SeoProvider>
              <FavoritesContactProvider>{children}</FavoritesContactProvider>
            </SeoProvider>
          </ThemeProvider>
        </BrowserRouter>
      </ServicesProvider>
    </PrimeReactProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestSetup, ...options });

export * from "@testing-library/react";
export { customRender as render };
