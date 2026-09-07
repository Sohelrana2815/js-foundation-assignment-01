// Answer 1
function describeValue(value) {
  const valueType = typeof value;

  const isTruthy = value ? "truthy" : "falsy";
  const result = valueType + " " + "|" + " " + isTruthy;
  return result;
}

// Answer 2

function getDayType(day) {
  const caseInsensitiveDay = day.toLowerCase();

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

// Answer 3

function validateUsername(username) {
  if (typeof username !== "string") {
    return "Username must be a string";
  }

  const lowerCaseUsername = username.toLowerCase();
  // Validation
  const lengthCheck = lowerCaseUsername.length >= 4;
  const hasSpace = lowerCaseUsername.includes(" ");
  const hasAdminWord = lowerCaseUsername.includes("admin");

  // Condition

  if (!lengthCheck) {
    return `Too Short only ${lowerCaseUsername.length} characters, must be at least 4 characters`;
  } else if (hasSpace) {
    return "No Space Allowed";
  } else if (hasAdminWord) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}
