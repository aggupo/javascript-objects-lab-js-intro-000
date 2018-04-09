var recipes = {};
Objects.assign({}, recipes);

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign(object, { key: value });
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
