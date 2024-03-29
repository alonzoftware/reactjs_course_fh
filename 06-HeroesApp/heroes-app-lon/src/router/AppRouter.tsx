import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from '../ui';
import { LoginPage } from "../auth";
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes >
                            <Route path="/*" element={<LoginPage />} />
                            {/* <Route path="/*" element={<LoginPage />} /> */}
                            {/* <Route path="/*" element={<LoginPage />} /> */}
                        </Routes>
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                {/* <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } /> */}
                {/* <Route path="/" element={<Navigate to='/login' />} /> */}
                {/* <Route path="login" element={<LoginPage />} /> */}
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
                {/* <Route path="marvel" element={<MarvelPage />} /> */}
                {/* <Route path="dc" element={<DcPage />} /> */}
            </Routes>


        </>
    )
}
