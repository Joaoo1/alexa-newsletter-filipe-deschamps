export default (date) => {
  const mDate = new Date(date);
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return mDate.toLocaleString('pt-br', options);
};
