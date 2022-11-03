const addMessageType = "ADD-MESSAGE";
const updateChangedMessageType = "UPDATE-MESSAGE";

const dialogsReducer = (state, action) => {
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