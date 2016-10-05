import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './features/Layout';
import Home from './features/Home';
import FetchData from './features/FetchData';
import Counter from './features/Counter';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/counter' components={{ body: Counter }} />
    <Route path='/fetchdata' components={{ body: FetchData }}>
        <Route path='(:startDateIndex)' /> { /* Optional route segment that does not affect NavMenu highlighting */ }
    </Route>
</Route>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
