
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <BrowserRouter>
        
        <NavBar />
        <div className="flex-grow">
            <AppRoutes />
        </div>
        </BrowserRouter>


    </div>
  );
}   // End of App component

export default App;


//TODO implement pagination for the event page. Use the server pagination functionality
//TODO implement event details page:
//TODO - Display event details
  // Event can be created without all fields filled in
  // If some fields are missing, display a message saying EVENT DETAILS INCOMPLETE
  // If some filds are missing, users will not be able to join the event and see the details
   
