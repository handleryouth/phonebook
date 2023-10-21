interface NavbarLinksProps {
  name: string;
  href: string;
}

export const NAVBAR_LINK: NavbarLinksProps[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact List",
    href: "/contacts",
  },
  {
    name: "Create Contact",
    href: "/create",
  },
];
