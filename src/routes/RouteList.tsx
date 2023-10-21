import { Home, Contacts, CreateContact, NotFound, EditContact } from "pages";
import { RouteObject } from "react-router-dom";

export const ROUTES_LIST: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/create",
    element: <CreateContact />,
  },
  {
    path: "/edit/:id",
    element: <EditContact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
