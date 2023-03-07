export interface IDefaultError {
  name?: string;
  message: string | unknown;
}

export const GenericError: IDefaultError = {
  name: 'ERROR',
  message: 'Não foi possível realizar essa ação',
};

export const InvalidParametersError: IDefaultError = {
  name: 'INVALID_PARAMETERS',
  message: 'Parâmetros inválidos.',
};
