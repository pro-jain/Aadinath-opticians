import { useEffect, useState } from "react";
import "./CSS/loader.css";

const SpecsLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {loading && (
        <div className="loader-overlay">
          <div className="glasses">
            <div className="left-handle"></div>
            <div className="lens left"></div>
            <div className="bridge"></div>
            <div className="lens right"></div>
            <div className="right-handle"></div>
          </div>
        </div>
      )}

      <div className={`content ${loading ? "blur" : "clear"}`}>
        {children}
      </div>
    </div>
  );
};

export default SpecsLoader;
