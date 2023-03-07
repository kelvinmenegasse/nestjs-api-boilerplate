export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O | null;
  abstract mapTo(param: O): I | null;
}
