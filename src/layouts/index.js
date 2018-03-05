import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';

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
        <div>
            {children()}
        </div>
    </div>
);

Wrapper.propTypes = {
    children: PropTypes.func,
};

export default Wrapper