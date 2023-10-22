import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const LazyHome = lazy(() => import("../pages/home/Home"));
const LazyContacts = lazy(() => import("../pages/contacts/Contacts"));
const LazyCreateContact = lazy(
  () => import("../pages/createContact/CreateContact")
);
const LazyEditContact = lazy(() => import("../pages/editContact/EditContact"));

const LazyNotFound = lazy(() => import("../pages/NotFound"));

export const ROUTES_LIST: RouteObject[] = [
  {
    path: "/",
    element: <LazyHome />,
  },
  {
    path: "/contacts",
    element: <LazyContacts />,
  },
  {
    path: "/create",
    element: <LazyCreateContact />,
  },
  {
    path: "/edit/:id",
    element: <LazyEditContact />,
  },
  {
    path: "*",
    element: <LazyNotFound />,
  },
];
