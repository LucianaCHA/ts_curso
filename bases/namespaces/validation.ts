namespace Validation {

 export const validateText = (text: string): boolean => {
    return text.length >= 3;
  }

  export const validateDate = (date: Date): boolean => {
    return isNaN(date.valueOf());
  }

}


console.log(Validation.validateText('abc'));
console.log(Validation.validateDate(new Date()));
 