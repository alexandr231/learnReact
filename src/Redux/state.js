const updateChangedTextType = 'UPDATE-CHANGED-TEXT';
const addPostType = 'ADD-POST';

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
            ]
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
        if (action.type === addPostType) {
            let newPost = {

                id: 8,
                message: this._state.profilePage.textValue
    
            }
    
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.textValue = '';
            this._callSubscriber();
            debugger;

        } else if (action.type === updateChangedTextType) {
            this._state.profilePage.textValue = action.newText
            this._callSubscriber();
            debugger;
        }


    },
};

export let actionCreatorAddPost = () => ({type:addPostType});
export let actionCreatorUpdateChangedText = (text) => ({type:updateChangedTextType, newText: text});

export default store;