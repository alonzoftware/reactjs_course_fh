import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from '../ui';
import { LoginPage } from "../auth";
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Navigate to='/login' />} /> */}
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />
                {/* <Route path="marvel" element={<MarvelPage />} /> */}
                {/* <Route path="dc" element={<DcPage />} /> */}
            </Routes>


        </>
    )
}
