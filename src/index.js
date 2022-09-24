import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header";
function Page() {
  return (
    <div className="MainContainer">
      <Header />
    </div>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<Page />);
