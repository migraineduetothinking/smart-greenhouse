
const initialState = {
   fileData: [],
   visualization: { chartData: [], chartLayout: {} },
 };
 
 const reducer = (state = initialState, action) => {
   switch (action.type) {
     case 'READ_DATA_FROM_FILE':
       return {
         ...state,
         fileData: action.payload,
       };
 
     case 'UPDATE_VISUALIZATION':
       return {
         ...state,
         visualization: action.payload,
       };
 
     default:
       return state;
   }
 };
 
 export default reducer;
 