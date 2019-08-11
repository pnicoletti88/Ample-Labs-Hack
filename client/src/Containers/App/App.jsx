import React from "react";
import Loader from "../Loader/Loader";

const HeatMapPage = React.lazy(() => import("../HeatMapPage/HeatMapPage"));

// allows PreComponent to still work (do not want to re-render heatmap)
// placing dynmaically it will regenerate object everytime
const renderHeatMapPage = props => {
  return (
    <React.Suspense fallback={null}>
      <HeatMapPage {...props} />
    </React.Suspense>
  );
};

const App = () => {
  return <Loader Element={HeatMapPage} render={renderHeatMapPage} />;
};

export default App;
