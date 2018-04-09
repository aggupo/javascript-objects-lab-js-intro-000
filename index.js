var recipes = {};
Objects.assign({}, recipes);

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = object.assign({}, { key: value });
  return obj;
}
