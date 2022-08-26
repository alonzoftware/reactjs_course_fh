import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from '../ui';
import { LoginPage } from "../auth/pages";
import { DcPage, MarvelPage } from "../heroes/pages/";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
            </Routes>


        </>
    )
}
