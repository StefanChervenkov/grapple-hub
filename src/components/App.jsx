
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

  // If some fields are missing, display a message saying EVENT DETAILS INCOMPLETE
  // If some filds are missing, users will not be able to join the event and see the details
   
// TODO -Connect to an external API to get the weather forecast for the event location
//TODO - Display the weather forecast for the event location
//TODO - Display a map with the event location
//TODO - Display a list of attendees
//TODO - Display a button to join the event and add the user to the list of attendees
//TODO - Display a button to leave the event and remove the user from the list of attendees