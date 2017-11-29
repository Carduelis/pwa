// import "./index.ejs";
import React from 'react';
import { render } from 'react-dom';
import './styles/style.less';
import Root from './containers/Root';
import store from './store';

const rootElement = document.getElementById('root');

render(<Root store={store} />, rootElement);
