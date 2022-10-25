const initialState = {
    data: [],
};

const Todo = (state = initialState, action) =>{
    switch(action.type){
        case  "ADD_TODO":
            return{
                ...state,
                data: [...state.data, action.message]
            };
        case "DELETE_TODO":
            return{
                ...state,
                data: [...state.data.filter((todo)=> todo.id !== action.id)]
            };
        case "UPDATE_TODO":
            return{
                ...state,
                data: [
                    ...state.data.filter((todo)=> todo.id !== action.id),
                {task: action.message, id: action.id}
            ],
            };
        case "DELETE_ALL":
            return{
                
                data: [],
            }
        default:
            return state;
    }
};

export default Todo;