import React from "react";
const RemoteComponent = React.lazy(() => import("MFE/App"));
function App() {
  return (
    <div>
      <RemoteComponent />
      <h1>Host Application</h1>
    </div>
  );
}

export default App;
