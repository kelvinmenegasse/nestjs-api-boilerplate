export type Left<L> = {
  left: L;
  right?: never;
};

export type Right<R> = {
  left?: never;
  right: R;
};

export type Either<L, R> = Left<L> | Right<R>;

export type GetEither = <L, R>(either: Either<L, R>) => L | R;

export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> => {
  return !!either.left;
};

export const isRight = <L, R>(either: Either<L, R>): either is Right<R> => {
  return !!either.right;
};

export const getEither: GetEither = <L, R>({ left, right }: Either<L, R>) => {
  if (!!left && !!right) {
    throw new Error('Either must not be both left and right at the same time');
  }

  if (!!left) return left;
  if (!!right) return right;

  throw new Error('Either received not left nor right value');
};
