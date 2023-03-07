export type JwtPayload = {
  username: string;
  sub: number; // * subject, the account id
  iss: string; // * issuer, the server name (e.g. 'localhost')
  iat: number; // * issued at, the time the token was issued
  exp: number; // * expiration time, the time the token expires
  aud?: string; // * audience, the client name (e.g. 'web')
};
