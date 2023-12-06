import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Layout from './Layout'

export default function App() {
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