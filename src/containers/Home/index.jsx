import React from 'react';
import { connect } from 'react-redux';
import BuildHistory from '../BuildHistory';
import { Start } from '../Start';

function Home({ settings }) {
    const { settledSettings } = settings;
    return settledSettings ? <BuildHistory /> : <Start />
}

const mapStateToProps = (state) => ({
    settings: state.settings,
});

export default connect(mapStateToProps)(Home);
