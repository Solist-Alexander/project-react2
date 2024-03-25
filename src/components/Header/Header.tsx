import React, {useEffect, useState} from 'react';

import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {SwitchForHeader} from "../SwitchForHeader";
import {useAppDispatch}  from "../../hooks /useAppDispatch";
import {useAppSelector} from "../../hooks /useAppSelector";
import {themeActions} from "../../store/slices/themeSlice";

const Header = () => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector(state => state.theme);
    const [initialThemeLoaded, setInitialThemeLoaded] = useState(false);

    useEffect(() => {
        const themeStorage = localStorage.getItem('theme');
            dispatch(themeActions.themeChange(themeStorage === 'true'));
        setInitialThemeLoaded(true);
    }, [dispatch]);

    const handleThemeChange = () => {
        dispatch(themeActions.themeChange(!theme));
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme ? "#ffefef" : "#3c3c3c";
    }, [theme]);

    if (!initialThemeLoaded) {
        return null;
    }

    return (
        <div className={`${style.header} ${theme ? style.headerDark : ''}`}>
            <p className={style.textDatabase}>The Movie Database</p>
            <div>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
            <p className={style.textTheme}>Theme</p>
            <SwitchForHeader checked={theme} onChange={handleThemeChange} />
            <div className={style.iconUser}>
                <img width="40" height="40" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-user-web-flaticons-flat-flat-icons-2.png" alt="external-user-web-flaticons-flat-flat-icons-2" />
            </div>
        </div>
    );
};

export { Header };