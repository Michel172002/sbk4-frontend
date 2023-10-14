export default function formatPhoneNumber(number) {
  const cleanedNumber = number.replace(/\D/g, '');

  if (cleanedNumber.length === 11) {
    return `(${cleanedNumber.substring(0, 2)}) ${cleanedNumber.substring(2, 3)} ${cleanedNumber.substring(3, 7)}-${cleanedNumber.substring(7)}`;
  } else if (cleanedNumber.length === 10) {
    return `(${cleanedNumber.substring(0, 2)}) ${cleanedNumber.substring(2, 6)}-${cleanedNumber.substring(6)}`;
  }

  return number;
}
