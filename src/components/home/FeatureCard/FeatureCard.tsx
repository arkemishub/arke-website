import "./style.css";
export default function FeatureCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className="feature-card w-full flex items-center p-4">
      <img className="w-12 mr-4" src={img} alt="feature" />
      <h2>{title}</h2>
    </div>
  );
}
