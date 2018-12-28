const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
})

export const Either = {
  Left,
  Right,
  fromNullable: x => (x === null || x === undefined ? Left(x) : Right(x)),
  fromPath: props => obj =>
    props.reduce(
      (result, prop) => result.chain(value => Either.fromNullable(value[prop])),
      Either.fromNullable(obj)
    ),
}

export const identity = x => x

export const value = x => x => x
