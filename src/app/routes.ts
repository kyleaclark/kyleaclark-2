// src/app/routes.ts
import {Home} from 'components/routes/home/home';     // ./components/home/home.ts

export default [
    {path: '/', component: Home, name: 'Home'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/projects', loader: () => require('components/routes/projects/projects')('Projects'), name: 'Projects'},
    {path: '/musings', loader: () => require('components/routes/musings/musings')('Musings'), name: 'Musings'}
];
