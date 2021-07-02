const characterAmountNumber = document.getElementById("characterAmountNumber");
const form = document.getElementById("passwordGeneratorForm");
const includeUpperCase = document.getElementById("includeUpperCase");
const IncludeNumber = document.getElementById("includeNumber");
const includeSpecial = document.getElementById("includeSpecial");
const passwordDisplay = document.getElementById("passwordDisplay");

//ARRAYS CHARACTER CODES
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126)));

characterAmountNumber.addEventListener("input", synCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const password = generatePassword(
    characterAmount,
    includeUpperCase,
    IncludeNumber,
    includeSpecial
  );
  const includeUpperCase = includeUpperCaseElement.checked;
  const includeNumber = includeNumberElement.checked;
  const includeSpecial = includeSpecialElement.checked;
  passwordDisplay.innerText = password;
});

function generatePassword(
  characterAmount,
  includeUpperCase,
  includeNumber,
  includeSpecial
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSpecial) charCodes = charCodes.concat(SPECIAL_CHAR_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    character = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(character);
  }
  return passwordCharacters.join("");
}
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function synCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
}
