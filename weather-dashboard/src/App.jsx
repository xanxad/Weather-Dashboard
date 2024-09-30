import backgroundImage from "./assets/bg-sunny.jpg";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <SearchBar />
    </div>
  );
};

export default App;
