import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import { ServicesProvider, ThemeProvider } from "context";
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
          <ThemeProvider>{children}</ThemeProvider>
        </BrowserRouter>
      </ServicesProvider>
    </PrimeReactProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestSetup, ...options });

export { customRender as render };
