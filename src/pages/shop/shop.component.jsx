import React from 'react';
import { Route } from 'react-router-dom';

import collectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component = {collectionPage} />
    </div>
);




export default ShopPage;