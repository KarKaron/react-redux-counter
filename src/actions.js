export const plus = () => ({type: 'PLUS'});
export const minus = () => ({type: 'MINUS'});
export const reset = () => {
  return {type: 'RESET', value: 0}
};