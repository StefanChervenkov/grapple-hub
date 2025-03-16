import { Link } from "react-router-dom";

const HomePage = () => {
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to Grapple Hub</h1>
                <p className="text-lg md:text-xl text-gray-300">
                    A central hub for BJJ events
                </p>


                <Link to="/events" className="text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                        View Events
                    </button>
                </Link>

            </div>
        </div>


    );
}

export default HomePage;