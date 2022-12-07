const interpolate = (value, session = {}, options = {}) => {
  const { firstname, lastname } = session;
  const { leftDelimiter, rightDelimiter } = options;

  if (!value.includes(leftDelimiter) || !value.includes(rightDelimiter))
    return value;

  if (value.indexOf(leftDelimiter) > value.indexOf(rightDelimiter))
    throw new Error('You are using delimiters on wrong sides');

  return value
    .split(leftDelimiter)
    .join('')
    .split(rightDelimiter)
    .join('')
    .replace('firstname', firstname || '')
    .replace('lastname', lastname || '');
};

module.exports = { interpolate };
