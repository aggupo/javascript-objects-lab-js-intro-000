var recipes = {};
Objects.assign({}, recipes);

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { key: value };
  Object.assign({}, obj);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
