let initialValue = {
  login: false,
  TodoList: [{ id: 1, task: "Running", Priority: "Low" }],
};

const MyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        TodoList: [...state.TodoList, action.payload],
      };
    default:
      return state;
  }
};

export default MyReducer;
