export const getFullName = (user) => {
  let result = '';
  const {
    firstName,
    lastName,
    email,
  } = user;
  if (firstName || lastName) {
    result = firstName || result;
    result = lastName ? (result ? `${result} ${lastName}` : lastName) : result;
  } else {
    result = email;
  }

  return result;
};
