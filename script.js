personName=prompt();
personName = personName.replaceAll(".", "");
personName = personName.replaceAll(" ", "");
lowerCaseName=personName.toLowerCase();
userName="@"+lowerCaseName+lowerCaseName.length;
console.log(userName);