import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpcomingPage from "./pages/upcomingPage";
import SignUpPage from "./pages/signUpPage";
import {Link} from 'react-router-dom'
import MovieDetailsPage from "./pages/movieDetailsPage";
import ShowPage from "./pages/showPage";
import SiteHeader from './components/siteHeader'
// import UpcomingPage from "./pages/upcomingPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import ShowsContextProvider from "./contexts/showsContext";
import ShowDetailsPage from "./pages/showDetailsPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./pages/privateRoute";
import LoginPage from "./pages/loginPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


    const App = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
          <AuthProvider>

              <SiteHeader />     
              <MoviesContextProvider>
              <ShowsContextProvider>



              <Routes>

              <Route
              path="/upcoming"
              element={
                <PrivateRoute>
                  <UpcomingPage />
                </PrivateRoute>
              }
            />
                          <Route path ="/login" element={<LoginPage />}/>

              <Route path ="/shows" element={<ShowPage />}/>
              <Route path="/shows/:id" element={<ShowDetailsPage />} />

              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </ShowsContextProvider>

      </MoviesContextProvider>
      </AuthProvider>

    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );