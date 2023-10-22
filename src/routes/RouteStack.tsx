import { Route, Routes } from "react-router-dom";
import { ROUTES_LIST } from "./RouteList";
import { Suspense } from "react";
import { Flex, LoadingIndicator } from "components";

export default function RouteStack() {
  return (
    <Routes>
      {ROUTES_LIST.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={
            <Suspense
              fallback={
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  flexGrow={1}
                >
                  <LoadingIndicator size={3} />
                </Flex>
              }
            >
              {item.element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
