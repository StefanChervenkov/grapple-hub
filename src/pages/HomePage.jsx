const HomePage = () => {
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to Grapple Hub</h1>
                <p className="text-lg md:text-xl text-gray-300">
                    A central hub for BJJ events and applications.
                </p>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
                    View Schedule
                </button>
            </div>
        </div>


    );
}

export default HomePage;