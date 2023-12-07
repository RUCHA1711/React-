import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Layout from './Layout'

export default function RouterExample() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="blogs" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

/*
BrowserRouter: is a router implementation that uses the HTML5 history API(pushState, replaceState, and the popstate event) to keep your UI in sync with the URL. 
It is the parent component that is used to store all of the other components.

Routes: Routes is a new component introduced in v6 that replaces the switch component

Route: Route is the child component that renders a specific UI component when the URL matches the specified path
Path: The path attribute specifies the path name we assign to the component 
Element: The element attribute refers to the component to render when the URL matches

Link: The link component is used to create links to different routes and implement navigation around the application. It works like an HTML anchor tag.
The element attribute refers to the component to render when the URL matches.

Outlet element: The <Outlet> renders the current route selected.
*/
