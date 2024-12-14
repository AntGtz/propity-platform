export function titleCase(str: string | undefined) {
  if (!str) return "";
  const splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

export function formatPhoneNumber(phoneNumber: string | undefined): string {
  if (!phoneNumber) return "";
  if (phoneNumber.length !== 10) {
    throw new Error("Phone number must be 10 digits long");
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}
