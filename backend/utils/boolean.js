function parseFromString(value) {

  if (value == null) {
    return false;
  }

  const valueString = value.toString().trim().toLowerCase();

  switch (valueString) {
    case 'yes':
    case 'true':
    case '1':
      return true;

    case 'no':
    case 'false':
    case '0':
    case '':
      return false;
  }

  throw 'Cannot parse as boolean';
}

module.exports = {
  parseFromString
};
