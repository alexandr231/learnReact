import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            textValue: '',
            postData: [
                { id: 1, message: 'No epic fail today, my friends, tis brilliantly clear that this one is in the bag.' },
                { id: 2, message: 'Now, where did I put my snakeskin bag? Because this one, my friends, is in it!' },
                { id: 3, message: 'Oh yeah, its in the bag!' },
                { id: 4, message: 'This one is in the bag, and I dont mean the saddlebag. Who said anything about saddlebags?' },
                { id: 5, message: 'Lost' },
                { id: 6, message: "win" },
                { id: 7, message: "pasha " }
            ]
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Katya' },
                { id: 2, name: 'Koshak' },
                { id: 3, name: 'Sanya' },
                { id: 4, name: 'Petr' }
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Bye' },
                { id: 3, message: 'Sleep' },
                { id: 4, message: 'Sfie' }
            ],
            messageValue:'',
        },
        sidebar: {

        },
    },

    getState() {

        return this._state;

    },

    subscribe(observer) {

        this._callSubscriber = observer;

    },

    _callSubscriber() {

        alert("hahaha");

    },

    dispatch(action) {
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    },
};

export default store;