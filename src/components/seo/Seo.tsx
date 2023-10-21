import { Helmet } from "react-helmet-async";
import { SeoProps } from "types";

export default function Seo({ description, title }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
