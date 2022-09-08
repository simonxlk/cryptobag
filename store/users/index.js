import { auth } from '@/services/firebase';
import Cookie from 'js-cookie';

export const state = () => ({
    user: null,
    userWorth: 0,
});

export const mutations = {
    SET_USER: (state, account) => {
        state.user = account;
    },
    SET_WORTH: (state, newValue) => {
        state.userWorth += newValue
    },
    RESET_WORTH: (state, reset) => {
        state.userWorth = reset
    }
}

export const actions = {
    async login({ commit }, account) {
        try {
            //login the user
            await auth.signInWithEmailAndPassword(account.email, account.password);

            //get the token from firebase
            const token = await auth.currentUser.getIdToken();
            const { email, uid } = auth.currentUser;

            // set JWT to the cookie
            Cookie.set('access_token', token);

            //call the mutation to Set user locally
            commit('SET_USER', { email, uid });

        } catch(error) {
            throw error;
        }
    }
};

