//createStore: func para criacao de store
//applyMiddleware: func para aplicar um middleware
//compose: juntar
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducerRoot from './modules/reducerRoot' //reducerRoot contém todos os reducers
import sagaRoot from './modules/sagaRoot' //sagaRoot contem todos os sagas

const sagaMonitor = process.env.NODE_ENV === 'development' ?
    console.tron.createSagaMonitor()
    : null

const sagaMiddleware = createSagaMiddleware({
    sagaMonitor
})

//Enhancer do Reactotron para q o store use Reactotron
const enhancer =
    process.env.NODE_ENV === 'development' ?
        compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware)) :
        applyMiddleware(sagaMiddleware)

//store: o state geral da app, que carrega os reducers, e enhancer do Reactotron
const store = createStore(reducerRoot, enhancer)

sagaMiddleware.run(sagaRoot)

export default store