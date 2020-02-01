export default function phoneNumberReducer(state, action) {
  switch (action.type) {
    case 'updatePhoneNumbers':
      state[0].name = '905052222222';
      return [...state];
    default:
      return state;
  }
}
