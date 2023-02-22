import noteServer from '../api/note';
import createDataContext from './createDataContext';

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'get_notes':
      return action.payload;
    case 'edit_note':
      return state.map((note) => {
        return note.id === action.payload.id ? action.payload : note;
      });
    case 'delete_note':
      return state.filter((note) => note.id !== action.payload);
    case 'add_note':
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const getNotes = (dispatch) => {
  return async () => {
    try {
      const response = await noteServer.get('/notes');
      dispatch({ type: 'get_notes', payload: response.data });
    } catch (err) {
      console.log(err)
    }
  };
};
const addNote = (dispatch) => {
  return async (title, content, callback) => {
    try {
      await noteServer.post('/notes', { title, content });
      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({ type: 'add_error', payload: err?.response?.data?.message })
    }
  };
};
const deleteNote = (dispatch) => {
  return async (id) => {
    await noteServer.delete(`/notes/${id}`);
    dispatch({ type: 'delete_note', payload: id })
  };
};
const editNote = (dispatch) => {
  return async (id, title, content, callback) => {
    await noteServer.patch(`/notes/${id}`, { title, content });

    if (callback) {
      callback();
    }
  };
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Context, Provider } = createDataContext(
  noteReducer,
  { addNote, deleteNote, editNote, getNotes, clearErrorMessage },
  { errorMessage: '' }
);
