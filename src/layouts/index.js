import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
// import 'bootstrap/dist/css/bootstrap.css';

let height = document.documentElement.clientHeight;

const Wrapper = ({children}) => (
    <div>
        <Helmet
            title='Holub homepage'
            meta={[
                {name: 'description', content: 'Holub homepage'},
                {name: 'keywords', content: 'Holub, homepage'},
            ]}
        />
        <Header/>
        <div style={{height: height}}>
            {children()}
        </div>
    </div>
);

Wrapper.propTypes = {
    children: PropTypes.func,
};

export default Wrapper