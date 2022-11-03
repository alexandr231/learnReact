const addMessageType = "ADD-MESSAGE";
const updateChangedMessageType = "UPDATE-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessageType:
            let newMessage = {

                id: 5,
                message: state.messageValue

            }

            state.messagesData.push(newMessage);
            state.messageValue = '';

            return state;
        case updateChangedMessageType:
            state.messageValue = action.newBody

            return state;

        default:
            return state;
    }
}

export let actionCreatorAddMessage = () => ({type:addMessageType});
export let actionCreatorUpdateMessageText = (body) => ({type:updateChangedMessageType, newBody: body});

export default dialogsReducer;