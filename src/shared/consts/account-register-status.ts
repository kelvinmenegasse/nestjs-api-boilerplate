import { DEFAULT_REGISTER_STATUS } from './default-register-status';

export const ACCOUNT_REGISTER_STATUS = Object.freeze(
  Object.assign(DEFAULT_REGISTER_STATUS, {
    SUSPENDED: 'suspended',
  }),
);
