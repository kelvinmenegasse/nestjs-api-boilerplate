export const randomStringGenerator = (
  params: {
    length: number;
    lowerCase: boolean;
    upperCase: boolean;
    numbers: boolean;
    symbols: boolean;
  } = {
    length: 10,
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: false,
  },
): string => {
  let characters = '';
  if (params.lowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (params.upperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (params.numbers) characters += '0123456789';
  if (params.symbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  return Array(params.length)
    .fill(characters)
    .map((x) => x[Math.floor(Math.random() * x.length)])
    .join('');
};
