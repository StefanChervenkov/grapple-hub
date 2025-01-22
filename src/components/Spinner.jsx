export default function Spinner() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>

    );
}

// export default function fancySpinner() {
//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100">
//             {/* Belt Base */}
//             <div className="relative w-24 h-4 bg-black rounded-md">
//                 {/* Belt End (left) */}
//                 <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-2 bg-black rounded"></div>
//                 {/* Belt End (right) */}
//                 <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-2 bg-black rounded"></div>
//             </div>
//             {/* Rotating Knots */}
//             <div className="absolute flex items-center justify-center animate-spin w-10 h-10">
//                 <div className="w-6 h-1 bg-white"></div>
//                 <div className="w-6 h-1 bg-white transform rotate-90"></div>
//             </div>
//         </div>
//     );
// }

