export default {
    isEmpty: value => {
        if (typeof value === 'string' && value.trim() === '') {
          return true;
        }
        if (typeof value === 'object') {
          return Object.keys(value).every(key => isEmpty(value[key]));
        }
      },

      toSentenceCase: value => {
        const firstChar = value
          .slice(0, 1)
          .toUpperCase()
          .trim();
        const otherChars = value
          .slice(1)
          .toLowerCase()
          .trim();
        return `${firstChar}${otherChars}`;
      },

      uuidTester: inputUsername => {
        // must be at least two chars, can have an underscore in between,
        // could have other letters, if nums present, can only end with them.
        const usernameRegex = /^[A-Z]{2,}_?[A-Z]*[0-9]*$/i;
        return usernameRegex.test(inputUsername);
      },

      usernameTester: inputUsername => {
        // must be at least two chars, can have an underscore in between,
        // could have other letters, if nums present, can only end with them.
        const usernameRegex = /^[A-Z]{2,}_?[A-Z]*[0-9]*$/i;
        return usernameRegex.test(inputUsername);
      },

      emailTester: inputEmail => {
        // eslint-disable-next-line no-control-regex
        const validEmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        return validEmailRegex.test(inputEmail);
      },

      stringGenerator: (stringLength = 8) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let returnValue = '';

        // iterate adding a random character to
        // returnValue until its the desired length
        while (returnValue.length < stringLength) {
            const letterIndex = Math.floor(Math.random() * alphabet.length);
            returnValue += alphabet.charAt(letterIndex);
        }

        return returnValue;
    },

    capitalizeFirstLetter: (stringToCapitalize) => {
        stringToCapitalize = stringToCapitalize.charAt(0)
            .toUpperCase() + stringToCapitalize.slice(1);
        return stringToCapitalize;
    }
}
