import { Route, Routes } from "react-router-dom";
import { ROUTES_LIST } from "./RouteList";

export default function RouteStack() {
  return (
    <Routes>
      {ROUTES_LIST.map((item, index) => (
        <Route path={item.path} element={item.element} key={index} />
      ))}
    </Routes>
  );
}
