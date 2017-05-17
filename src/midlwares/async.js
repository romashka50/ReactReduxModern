export default ({ dispatch }) => next => (action) => {
  console.log(action);

  next(action);
};
