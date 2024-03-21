import {Outlet} from "react-router-dom";
import {GenresList} from "../components/GenresContainer/GenresList/GenresList";

const GenresPage = () => {
    return (
        <div>
            <GenresList/>
            <Outlet/>
        </div>
    );
};

export {
    GenresPage
};