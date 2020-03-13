export default function phoneNumberReducer(state, action) {
  switch (action.type) {
    case 'updatePhoneNumbers':
      state.map((item, i) => {
        let copyItem = {...item};
        if (item !== action.payload[i]) {
          state[i] = action.payload[i];
        }
        return copyItem;
      });
      return state;

    case 'getAllPhoneNumber':
      return state;
    default:
      return state;
  }
}
