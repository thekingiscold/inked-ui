import { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./components/NavigationBar";
import TattooThumbnailSection from "./components/TattooThumbnailSection";
import TitleArea from "./components/TitleArea";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import TopArtistAreaWise from "./components/TopArtistAreaWise";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistDashboard from "./components/ArtistDashboard";
import SpinnerLoading from "./components/SpinnerLoading";
import ArtistDetails from "./components/ArtistDetails";
import Searchbar from "./components/SearchBar"

function App() {
  const [tattooTypeData, setTattooTypeData] = useState([]);
  const [ArtistData, setArtistData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const tattoTypeResponse = await axios.get(
          "http://localhost:3001/api/tattoo-thumbnail-data"
        );
        setTattooTypeData(tattoTypeResponse.data);
        const artistDataResponse = await axios.get(
          "http://localhost:3001/api/get-Artistdetails"
        );
        setArtistData(artistDataResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API: ", error);
      }
    };

    fetchData();
  }, []);

  const LayoutWithNavBar = ({ children }) => {

    return (
      <>
        <NavigationBar />
        <TitleArea /> 
        {children}  
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<LayoutWithNavBar><SignUp /></LayoutWithNavBar>} />

          <Route path="/" element={<LayoutWithNavBar><SignUp /></LayoutWithNavBar>} />

          <Route path="/login" element={<LayoutWithNavBar><LoginPage /></LayoutWithNavBar>} />

          <Route 
            path="/artist" 
            element={
                <>
                <Searchbar/>
                <ArtistDetails/>
                </>
              } />
          <Route
            path="/user-dashboard"
            element={
              <>
              {
                isLoading ? (<SpinnerLoading/>) : 
                ( 
                <>
                  <Searchbar/>
                  <TattooThumbnailSection tattooTypeData={tattooTypeData} />
                  <TopArtistAreaWise artistData={ArtistData} />
                </>
                )
              }
              </>
            }
          />

          <Route
            path="/artist-dashboard"
            element={          
                <ArtistDashboard />
            }
          />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
