'use strict';

import getdata from './modules/getdata';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckBox from './modules/toggleCheckBox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';

getdata().then((data) =>{
    renderCards(data);
    renderCatalog();
    toggleCheckBox();
    toggleCart();
    addCart();
    actionPage();
});

