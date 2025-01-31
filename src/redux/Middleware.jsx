const asyncMiddleware = store => next => action => {
    if (typeof action === 'function') return action(store.dispatch, store.getStore)
        return next(action);
}

export default asyncMiddleware