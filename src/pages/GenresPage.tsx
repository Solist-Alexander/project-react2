import {Outlet} from "react-router-dom";

import {GenresList} from "../components";

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