export function CpfFormat(value: any): any {
  const cpf: string = value ? value.replace(/(\.|\/|\-)/g, '') : '';

  if (cpf.length < 3) {
    return cpf;
  } else if (cpf.length >= 3 && cpf.length <= 5) {
    return cpf.substr(0, 3) + '.' + cpf.substr(3, 11);
  } else if (cpf.length >= 6 && cpf.length <= 8) {
    return cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3);
  } else {
    return (
      cpf.substr(0, 3) +
      '.' +
      cpf.substr(3, 3) +
      '.' +
      cpf.substr(6, 3) +
      '-' +
      cpf.substr(9, 2)
    );
  }
}

/*
 * params.returnFormat: 'boolean' | 'string' => true valid, false invalid | text: type and message
 */
export function CpfValidator(
  value,
  params: { returnFormatBoolean: boolean } = { returnFormatBoolean: false },
): any {
  const funcValidacao = (value) => {
    if (value === null) {
      return { type: 'cpfRange', message: 'CPF nulo.' };
    }

    // * adiciona a formatação correta
    const cpfInput = value ? CpfFormat(value) : '';
    // * retira pontos
    const cpf = cpfInput.replace(/[^\d]+/g, '');

    if (cpf === '') {
      return { type: 'cpfInvalid', message: 'CPF vazio.' };
    }
    // * elimina CPFs inválidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return { type: 'cpfInvalid', message: 'CPF inválido.' };
    }

    // * valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i), 10) * (10 - i);
    }

    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }

    if (rev !== parseInt(cpf.charAt(9), 10)) {
      return { type: 'cpfInvalid', message: 'CPF inválido.' };
    }
    // * Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i), 10) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10), 10)) {
      return { type: 'cpfInvalid', message: 'CPF inválido.' };
    }

    return { type: 'success', message: 'CPF válido.' };
  };

  const result = funcValidacao(value);

  if (params.returnFormatBoolean === false) {
    return result;
  }

  return result.type === 'success' ? true : false;
}

export function CpfValidateAndFilter(value): {
  type: string;
  message: string;
  data: string;
} {
  const cpf = CpfFormat(value);

  const result = CpfValidator(cpf, { returnFormatBoolean: false });

  const response = {
    type: result.type,
    message: result.message,
    data: cpf,
  };

  return response;
}
