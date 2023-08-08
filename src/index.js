import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./About";
import Contact from "./Contact";

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element : <Body />
                }, 
                {
                    path: "/home",
                    element : <Body />
                }, 
                {
                    path: "/about",
                    element : <About />
                },
                {
                    path: "/contact",
                    element : <Contact />
                }
            ]
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />)