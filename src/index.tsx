// eslint-disable-next-line import/no-unassigned-import
import './index.scss';
// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
// eslint-disable-next-line import/no-internal-modules
import { container } from './di/container';
import { modulesModule } from './modules';

modulesModule.init(container);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
