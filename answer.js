// Answer 1
function describeValue(value) {
  const valueType = typeof value;

  const isTruthy = value ? "truthy" : "falsy";
  const result = valueType + " " + "|" + " " + isTruthy;
  return result;
}

// Answer 2

function getDayType(day) {
  const caseInsensitiveDay = day.toLocaleLowerCase();

  switch (caseInsensitiveDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}
