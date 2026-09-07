// Answer 1
function describeValue(value) {
  const valueType = typeof value;

  const isTruthy = value ? "truthy" : "falsy";
  const result = valueType + " " + "|" + " " + isTruthy;
  return result;
}

// Answer 2


