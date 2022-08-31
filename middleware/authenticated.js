export default function({store, route, redirect}) {
    
    //check the store and assign a logged in user to the user variable
    const user = store.state.users.user;
    
    //All pages inside the in folder will be blocked
    const blockedRoute = /\/in\/*/g;    

    //if its not a logged in user, redirect them to the login page
    if(!user && route.path.match(blockedRoute)) {   
        redirect('/login')
    }
}