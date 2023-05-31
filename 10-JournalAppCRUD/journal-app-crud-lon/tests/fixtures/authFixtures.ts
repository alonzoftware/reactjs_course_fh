export const initialState = {
    status: 'checking', //'checking','not-authenticated', 'authenticated'
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    errorMessage: '',
}
export const authenticatedState = {
    status: 'authenticated', //'checking','not-authenticated', 'authenticated'
    uid: '123ABC',
    email: 'demo@g.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: '',
}
export const notAuthenticatedState = {
    status: 'not-authenticated', //'checking','not-authenticated', 'authenticated'
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    errorMessage: '',
}
export const demoUser = {
    uid: '123ABC',
    email: 'demo@g.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
}