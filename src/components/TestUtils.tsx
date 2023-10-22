/**
 * @jest-environment jsdom
 */
import "primeicons/primeicons.css";
import "@fontsource-variable/inter";
import "@testing-library/jest-dom";

import { render,RenderOptions } from "@testing-library/react";
import {
  FavoritesContactProvider,
  SeoProvider,
  ServicesProvider,
  ThemeProvider,
} from "context";
import { PrimeReactProvider } from "primereact/api";
import { ReactElement, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

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
