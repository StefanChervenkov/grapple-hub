
import AppRoutes from "../routes/AppRoutes";
import NavBar3 from "./NavBar3";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavBar3 />
        <div className="flex-grow">
            <AppRoutes />
        </div>
        

    </div>
  );
}   // End of App component

export default App;