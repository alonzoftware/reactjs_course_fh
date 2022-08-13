import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage, LoginPage, Navbar } from "."

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <Navbar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
        </>
    )
}
