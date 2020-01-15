import { createStore } from 'redux' //func para criacao de store

import reducerRoot from './modules/reducerRoot' //reducerRoot contém todos os reducers

//Enhancer do Reactotron para q o store use Reactotron
const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null

//store: o state geral da app, que carrega os reducers, e enhancer do Reactotron
const store = createStore(reducerRoot, enhancer)

export default store