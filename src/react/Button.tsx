export default function Button() {
    return (<button className="w-full mt-8 hover:bg-indigo-600 transition-colors duration-200 bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center justify-center" onClick={() => {
        console.log("Join the Server!");
    }}>
        Join the Server!
    </button>)
}