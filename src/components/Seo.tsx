import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
}

export default function Seo({ description, title }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
