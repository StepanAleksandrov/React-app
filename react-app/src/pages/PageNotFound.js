import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

class PageNotFound extends Component {
    render() {
        return (
            <h1>Страница не найдена. Вернуться на <Link to='/'>главную</Link>?</h1>
        );
    }
}

export default PageNotFound;