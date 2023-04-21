import React, { useState } from "react";
import FeatureTab from "../FeatureTab/FeatureTab";
import FeatureCard from "../FeatureCard/FeatureCard";
import "./style.css";

export default function FeatureSection() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="relative choose-us-section">
        <div className="md:flex justify-between items-end mx-4 md:mx-12 mb-8 mt-12">
          <h3 className="flex-auto text-left text-xl mb-2 md:mb-0 lg:text-5xl font-medium">
            Why choose us
          </h3>
          <div>
            <FeatureTab active={active} onChange={setActive} />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-12 grid gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4 h-20">
        {/* Backend */}
        {active === 0 && (
          <>
            <FeatureCard
              title="Powerful Elixir core"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_elixir.png`}
            />
            <FeatureCard
              title="Pluggable database"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_database.png`}
            />
            <FeatureCard
              title="Secure authentication"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_authentication.png`}
            />
            <FeatureCard
              title="Auto-generated REST APIs"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_api.png`}
            />
          </>
        )}
        {/* Frontend */}
        {active === 1 && (
          <>
            <FeatureCard
              title="Swift backend connection"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_swift_connection.png`}
            />
            <FeatureCard
              title="Automatic layout builder"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_builder.png`}
            />
            <FeatureCard
              title="Customized UI components"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_customizable.png`}
            />
            <FeatureCard
              title="Headless forms & tables"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_headless.png`}
            />
          </>
        )}
        {/* Console */}
        {active === 2 && (
          <>
            <FeatureCard
              title="Intuitive project management"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_project_management.png`}
            />
            <FeatureCard
              title="Dynamic prototyping"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_prototyping.png`}
            />
            <FeatureCard
              title="Smart code sync"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_smart_code_sync.png`}
            />
            <FeatureCard
              title="Add-ons & integrations"
              img={`${
                import.meta.env.BASE_URL
              }/features/square/feature_integrations.png`}
            />
          </>
        )}
      </div>
    </>
  );
}
