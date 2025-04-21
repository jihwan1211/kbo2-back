
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model team
 * 
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>
/**
 * Model player
 * 
 */
export type player = $Result.DefaultSelection<Prisma.$playerPayload>
/**
 * Model batter_daily_record
 * 
 */
export type batter_daily_record = $Result.DefaultSelection<Prisma.$batter_daily_recordPayload>
/**
 * Model pitcher_daily_record
 * 
 */
export type pitcher_daily_record = $Result.DefaultSelection<Prisma.$pitcher_daily_recordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Teams
 * const teams = await prisma.team.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.teamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.playerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batter_daily_record`: Exposes CRUD operations for the **batter_daily_record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batter_daily_records
    * const batter_daily_records = await prisma.batter_daily_record.findMany()
    * ```
    */
  get batter_daily_record(): Prisma.batter_daily_recordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pitcher_daily_record`: Exposes CRUD operations for the **pitcher_daily_record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pitcher_daily_records
    * const pitcher_daily_records = await prisma.pitcher_daily_record.findMany()
    * ```
    */
  get pitcher_daily_record(): Prisma.pitcher_daily_recordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    team: 'team',
    player: 'player',
    batter_daily_record: 'batter_daily_record',
    pitcher_daily_record: 'pitcher_daily_record'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "team" | "player" | "batter_daily_record" | "pitcher_daily_record"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      team: {
        payload: Prisma.$teamPayload<ExtArgs>
        fields: Prisma.teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      player: {
        payload: Prisma.$playerPayload<ExtArgs>
        fields: Prisma.playerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          findFirst: {
            args: Prisma.playerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          findMany: {
            args: Prisma.playerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>[]
          }
          create: {
            args: Prisma.playerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          createMany: {
            args: Prisma.playerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>[]
          }
          delete: {
            args: Prisma.playerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          update: {
            args: Prisma.playerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          deleteMany: {
            args: Prisma.playerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>[]
          }
          upsert: {
            args: Prisma.playerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.playerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.playerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      batter_daily_record: {
        payload: Prisma.$batter_daily_recordPayload<ExtArgs>
        fields: Prisma.batter_daily_recordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.batter_daily_recordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.batter_daily_recordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>
          }
          findFirst: {
            args: Prisma.batter_daily_recordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.batter_daily_recordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>
          }
          findMany: {
            args: Prisma.batter_daily_recordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>[]
          }
          create: {
            args: Prisma.batter_daily_recordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>
          }
          createMany: {
            args: Prisma.batter_daily_recordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.batter_daily_recordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>[]
          }
          delete: {
            args: Prisma.batter_daily_recordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>
          }
          update: {
            args: Prisma.batter_daily_recordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>
          }
          deleteMany: {
            args: Prisma.batter_daily_recordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.batter_daily_recordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.batter_daily_recordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>[]
          }
          upsert: {
            args: Prisma.batter_daily_recordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$batter_daily_recordPayload>
          }
          aggregate: {
            args: Prisma.Batter_daily_recordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatter_daily_record>
          }
          groupBy: {
            args: Prisma.batter_daily_recordGroupByArgs<ExtArgs>
            result: $Utils.Optional<Batter_daily_recordGroupByOutputType>[]
          }
          count: {
            args: Prisma.batter_daily_recordCountArgs<ExtArgs>
            result: $Utils.Optional<Batter_daily_recordCountAggregateOutputType> | number
          }
        }
      }
      pitcher_daily_record: {
        payload: Prisma.$pitcher_daily_recordPayload<ExtArgs>
        fields: Prisma.pitcher_daily_recordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pitcher_daily_recordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pitcher_daily_recordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>
          }
          findFirst: {
            args: Prisma.pitcher_daily_recordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pitcher_daily_recordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>
          }
          findMany: {
            args: Prisma.pitcher_daily_recordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>[]
          }
          create: {
            args: Prisma.pitcher_daily_recordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>
          }
          createMany: {
            args: Prisma.pitcher_daily_recordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pitcher_daily_recordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>[]
          }
          delete: {
            args: Prisma.pitcher_daily_recordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>
          }
          update: {
            args: Prisma.pitcher_daily_recordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>
          }
          deleteMany: {
            args: Prisma.pitcher_daily_recordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pitcher_daily_recordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pitcher_daily_recordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>[]
          }
          upsert: {
            args: Prisma.pitcher_daily_recordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pitcher_daily_recordPayload>
          }
          aggregate: {
            args: Prisma.Pitcher_daily_recordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePitcher_daily_record>
          }
          groupBy: {
            args: Prisma.pitcher_daily_recordGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pitcher_daily_recordGroupByOutputType>[]
          }
          count: {
            args: Prisma.pitcher_daily_recordCountArgs<ExtArgs>
            result: $Utils.Optional<Pitcher_daily_recordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    team?: teamOmit
    player?: playerOmit
    batter_daily_record?: batter_daily_recordOmit
    pitcher_daily_record?: pitcher_daily_recordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    players: number
    batterOppositionRecords: number
    pitcherOppositionRecords: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    batterOppositionRecords?: boolean | TeamCountOutputTypeCountBatterOppositionRecordsArgs
    pitcherOppositionRecords?: boolean | TeamCountOutputTypeCountPitcherOppositionRecordsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountBatterOppositionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: batter_daily_recordWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPitcherOppositionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pitcher_daily_recordWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    batterDailyRecords: number
    pitcherDailyRecords: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batterDailyRecords?: boolean | PlayerCountOutputTypeCountBatterDailyRecordsArgs
    pitcherDailyRecords?: boolean | PlayerCountOutputTypeCountPitcherDailyRecordsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountBatterDailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: batter_daily_recordWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPitcherDailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pitcher_daily_recordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    win: number | null
    runnerUp: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    win: number | null
    runnerUp: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    win: number | null
    runnerUp: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    symbol: string | null
    name: string | null
    win: number | null
    runnerUp: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    win: number
    runnerUp: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    win?: true
    runnerUp?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    win?: true
    runnerUp?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    win?: true
    runnerUp?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    win?: true
    runnerUp?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    win?: true
    runnerUp?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    symbol: string
    name: string
    win: number
    runnerUp: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    win?: boolean
    runnerUp?: boolean
    players?: boolean | team$playersArgs<ExtArgs>
    batterOppositionRecords?: boolean | team$batterOppositionRecordsArgs<ExtArgs>
    pitcherOppositionRecords?: boolean | team$pitcherOppositionRecordsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type teamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    win?: boolean
    runnerUp?: boolean
  }, ExtArgs["result"]["team"]>

  export type teamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    win?: boolean
    runnerUp?: boolean
  }, ExtArgs["result"]["team"]>

  export type teamSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    win?: boolean
    runnerUp?: boolean
  }

  export type teamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "win" | "runnerUp", ExtArgs["result"]["team"]>
  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | team$playersArgs<ExtArgs>
    batterOppositionRecords?: boolean | team$batterOppositionRecordsArgs<ExtArgs>
    pitcherOppositionRecords?: boolean | team$pitcherOppositionRecordsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type teamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team"
    objects: {
      players: Prisma.$playerPayload<ExtArgs>[]
      batterOppositionRecords: Prisma.$batter_daily_recordPayload<ExtArgs>[]
      pitcherOppositionRecords: Prisma.$pitcher_daily_recordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      symbol: string
      name: string
      win: number
      runnerUp: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<Prisma.$teamPayload, S>

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team'], meta: { name: 'team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamFindUniqueArgs>(args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs>(args: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamFindFirstArgs>(args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs>(args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamFindManyArgs>(args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends teamCreateArgs>(args: SelectSubset<T, teamCreateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamCreateManyArgs>(args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {teamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teamCreateManyAndReturnArgs>(args?: SelectSubset<T, teamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends teamDeleteArgs>(args: SelectSubset<T, teamDeleteArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamUpdateArgs>(args: SelectSubset<T, teamUpdateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamDeleteManyArgs>(args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamUpdateManyArgs>(args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {teamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teamUpdateManyAndReturnArgs>(args: SelectSubset<T, teamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends teamUpsertArgs>(args: SelectSubset<T, teamUpsertArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team model
   */
  readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends team$playersArgs<ExtArgs> = {}>(args?: Subset<T, team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batterOppositionRecords<T extends team$batterOppositionRecordsArgs<ExtArgs> = {}>(args?: Subset<T, team$batterOppositionRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pitcherOppositionRecords<T extends team$pitcherOppositionRecordsArgs<ExtArgs> = {}>(args?: Subset<T, team$pitcherOppositionRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<"team", 'Int'>
    readonly symbol: FieldRef<"team", 'String'>
    readonly name: FieldRef<"team", 'String'>
    readonly win: FieldRef<"team", 'Int'>
    readonly runnerUp: FieldRef<"team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>
  }

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team createManyAndReturn
   */
  export type teamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * team updateManyAndReturn
   */
  export type teamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>
  }

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * team.players
   */
  export type team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    where?: playerWhereInput
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    cursor?: playerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * team.batterOppositionRecords
   */
  export type team$batterOppositionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    where?: batter_daily_recordWhereInput
    orderBy?: batter_daily_recordOrderByWithRelationInput | batter_daily_recordOrderByWithRelationInput[]
    cursor?: batter_daily_recordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Batter_daily_recordScalarFieldEnum | Batter_daily_recordScalarFieldEnum[]
  }

  /**
   * team.pitcherOppositionRecords
   */
  export type team$pitcherOppositionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    where?: pitcher_daily_recordWhereInput
    orderBy?: pitcher_daily_recordOrderByWithRelationInput | pitcher_daily_recordOrderByWithRelationInput[]
    cursor?: pitcher_daily_recordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pitcher_daily_recordScalarFieldEnum | Pitcher_daily_recordScalarFieldEnum[]
  }

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
  }


  /**
   * Model player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    kboId: number | null
    teamId: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    kboId: number | null
    teamId: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    kboId: number | null
    profileImage: string | null
    name: string | null
    birth: Date | null
    backNumber: string | null
    school: string | null
    teamId: number | null
    position: string | null
    isActive: boolean | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    kboId: number | null
    profileImage: string | null
    name: string | null
    birth: Date | null
    backNumber: string | null
    school: string | null
    teamId: number | null
    position: string | null
    isActive: boolean | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    kboId: number
    profileImage: number
    name: number
    birth: number
    backNumber: number
    school: number
    teamId: number
    position: number
    isActive: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    kboId?: true
    teamId?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    kboId?: true
    teamId?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    kboId?: true
    profileImage?: true
    name?: true
    birth?: true
    backNumber?: true
    school?: true
    teamId?: true
    position?: true
    isActive?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    kboId?: true
    profileImage?: true
    name?: true
    birth?: true
    backNumber?: true
    school?: true
    teamId?: true
    position?: true
    isActive?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    kboId?: true
    profileImage?: true
    name?: true
    birth?: true
    backNumber?: true
    school?: true
    teamId?: true
    position?: true
    isActive?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player to aggregate.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type playerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playerWhereInput
    orderBy?: playerOrderByWithAggregationInput | playerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    kboId: number
    profileImage: string | null
    name: string | null
    birth: Date | null
    backNumber: string | null
    school: string | null
    teamId: number | null
    position: string | null
    isActive: boolean | null
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends playerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type playerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kboId?: boolean
    profileImage?: boolean
    name?: boolean
    birth?: boolean
    backNumber?: boolean
    school?: boolean
    teamId?: boolean
    position?: boolean
    isActive?: boolean
    team?: boolean | player$teamArgs<ExtArgs>
    batterDailyRecords?: boolean | player$batterDailyRecordsArgs<ExtArgs>
    pitcherDailyRecords?: boolean | player$pitcherDailyRecordsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type playerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kboId?: boolean
    profileImage?: boolean
    name?: boolean
    birth?: boolean
    backNumber?: boolean
    school?: boolean
    teamId?: boolean
    position?: boolean
    isActive?: boolean
    team?: boolean | player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type playerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kboId?: boolean
    profileImage?: boolean
    name?: boolean
    birth?: boolean
    backNumber?: boolean
    school?: boolean
    teamId?: boolean
    position?: boolean
    isActive?: boolean
    team?: boolean | player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type playerSelectScalar = {
    id?: boolean
    kboId?: boolean
    profileImage?: boolean
    name?: boolean
    birth?: boolean
    backNumber?: boolean
    school?: boolean
    teamId?: boolean
    position?: boolean
    isActive?: boolean
  }

  export type playerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kboId" | "profileImage" | "name" | "birth" | "backNumber" | "school" | "teamId" | "position" | "isActive", ExtArgs["result"]["player"]>
  export type playerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | player$teamArgs<ExtArgs>
    batterDailyRecords?: boolean | player$batterDailyRecordsArgs<ExtArgs>
    pitcherDailyRecords?: boolean | player$pitcherDailyRecordsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type playerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | player$teamArgs<ExtArgs>
  }
  export type playerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | player$teamArgs<ExtArgs>
  }

  export type $playerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player"
    objects: {
      team: Prisma.$teamPayload<ExtArgs> | null
      batterDailyRecords: Prisma.$batter_daily_recordPayload<ExtArgs>[]
      pitcherDailyRecords: Prisma.$pitcher_daily_recordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kboId: number
      profileImage: string | null
      name: string | null
      birth: Date | null
      backNumber: string | null
      school: string | null
      teamId: number | null
      position: string | null
      isActive: boolean | null
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type playerGetPayload<S extends boolean | null | undefined | playerDefaultArgs> = $Result.GetResult<Prisma.$playerPayload, S>

  type playerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface playerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player'], meta: { name: 'player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {playerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playerFindUniqueArgs>(args: SelectSubset<T, playerFindUniqueArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playerFindUniqueOrThrowArgs>(args: SelectSubset<T, playerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playerFindFirstArgs>(args?: SelectSubset<T, playerFindFirstArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playerFindFirstOrThrowArgs>(args?: SelectSubset<T, playerFindFirstOrThrowArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playerFindManyArgs>(args?: SelectSubset<T, playerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {playerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends playerCreateArgs>(args: SelectSubset<T, playerCreateArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {playerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playerCreateManyArgs>(args?: SelectSubset<T, playerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {playerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playerCreateManyAndReturnArgs>(args?: SelectSubset<T, playerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {playerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends playerDeleteArgs>(args: SelectSubset<T, playerDeleteArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {playerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playerUpdateArgs>(args: SelectSubset<T, playerUpdateArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {playerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playerDeleteManyArgs>(args?: SelectSubset<T, playerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playerUpdateManyArgs>(args: SelectSubset<T, playerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {playerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playerUpdateManyAndReturnArgs>(args: SelectSubset<T, playerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {playerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends playerUpsertArgs>(args: SelectSubset<T, playerUpsertArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playerCountArgs>(
      args?: Subset<T, playerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playerGroupByArgs['orderBy'] }
        : { orderBy?: playerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player model
   */
  readonly fields: playerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends player$teamArgs<ExtArgs> = {}>(args?: Subset<T, player$teamArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    batterDailyRecords<T extends player$batterDailyRecordsArgs<ExtArgs> = {}>(args?: Subset<T, player$batterDailyRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pitcherDailyRecords<T extends player$pitcherDailyRecordsArgs<ExtArgs> = {}>(args?: Subset<T, player$pitcherDailyRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the player model
   */
  interface playerFieldRefs {
    readonly id: FieldRef<"player", 'Int'>
    readonly kboId: FieldRef<"player", 'Int'>
    readonly profileImage: FieldRef<"player", 'String'>
    readonly name: FieldRef<"player", 'String'>
    readonly birth: FieldRef<"player", 'DateTime'>
    readonly backNumber: FieldRef<"player", 'String'>
    readonly school: FieldRef<"player", 'String'>
    readonly teamId: FieldRef<"player", 'Int'>
    readonly position: FieldRef<"player", 'String'>
    readonly isActive: FieldRef<"player", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * player findUnique
   */
  export type playerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player findUniqueOrThrow
   */
  export type playerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player findFirst
   */
  export type playerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player findFirstOrThrow
   */
  export type playerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player findMany
   */
  export type playerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player create
   */
  export type playerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * The data needed to create a player.
     */
    data: XOR<playerCreateInput, playerUncheckedCreateInput>
  }

  /**
   * player createMany
   */
  export type playerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many players.
     */
    data: playerCreateManyInput | playerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player createManyAndReturn
   */
  export type playerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * The data used to create many players.
     */
    data: playerCreateManyInput | playerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * player update
   */
  export type playerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * The data needed to update a player.
     */
    data: XOR<playerUpdateInput, playerUncheckedUpdateInput>
    /**
     * Choose, which player to update.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player updateMany
   */
  export type playerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update players.
     */
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playerWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
  }

  /**
   * player updateManyAndReturn
   */
  export type playerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * The data used to update players.
     */
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playerWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * player upsert
   */
  export type playerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * The filter to search for the player to update in case it exists.
     */
    where: playerWhereUniqueInput
    /**
     * In case the player found by the `where` argument doesn't exist, create a new player with this data.
     */
    create: XOR<playerCreateInput, playerUncheckedCreateInput>
    /**
     * In case the player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playerUpdateInput, playerUncheckedUpdateInput>
  }

  /**
   * player delete
   */
  export type playerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
    /**
     * Filter which player to delete.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player deleteMany
   */
  export type playerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to delete
     */
    where?: playerWhereInput
    /**
     * Limit how many players to delete.
     */
    limit?: number
  }

  /**
   * player.team
   */
  export type player$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
  }

  /**
   * player.batterDailyRecords
   */
  export type player$batterDailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    where?: batter_daily_recordWhereInput
    orderBy?: batter_daily_recordOrderByWithRelationInput | batter_daily_recordOrderByWithRelationInput[]
    cursor?: batter_daily_recordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Batter_daily_recordScalarFieldEnum | Batter_daily_recordScalarFieldEnum[]
  }

  /**
   * player.pitcherDailyRecords
   */
  export type player$pitcherDailyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    where?: pitcher_daily_recordWhereInput
    orderBy?: pitcher_daily_recordOrderByWithRelationInput | pitcher_daily_recordOrderByWithRelationInput[]
    cursor?: pitcher_daily_recordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pitcher_daily_recordScalarFieldEnum | Pitcher_daily_recordScalarFieldEnum[]
  }

  /**
   * player without action
   */
  export type playerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player
     */
    omit?: playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playerInclude<ExtArgs> | null
  }


  /**
   * Model batter_daily_record
   */

  export type AggregateBatter_daily_record = {
    _count: Batter_daily_recordCountAggregateOutputType | null
    _avg: Batter_daily_recordAvgAggregateOutputType | null
    _sum: Batter_daily_recordSumAggregateOutputType | null
    _min: Batter_daily_recordMinAggregateOutputType | null
    _max: Batter_daily_recordMaxAggregateOutputType | null
  }

  export type Batter_daily_recordAvgAggregateOutputType = {
    id: number | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    PA: number | null
    AB: number | null
    R: number | null
    H: number | null
    twoB: number | null
    threeB: number | null
    HR: number | null
    TB: number | null
    RBI: number | null
    SB: number | null
    CS: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    GDP: number | null
  }

  export type Batter_daily_recordSumAggregateOutputType = {
    id: number | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    PA: number | null
    AB: number | null
    R: number | null
    H: number | null
    twoB: number | null
    threeB: number | null
    HR: number | null
    TB: number | null
    RBI: number | null
    SB: number | null
    CS: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    GDP: number | null
  }

  export type Batter_daily_recordMinAggregateOutputType = {
    id: number | null
    season: string | null
    date: Date | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    PA: number | null
    AB: number | null
    R: number | null
    H: number | null
    twoB: number | null
    threeB: number | null
    HR: number | null
    TB: number | null
    RBI: number | null
    SB: number | null
    CS: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    GDP: number | null
  }

  export type Batter_daily_recordMaxAggregateOutputType = {
    id: number | null
    season: string | null
    date: Date | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    PA: number | null
    AB: number | null
    R: number | null
    H: number | null
    twoB: number | null
    threeB: number | null
    HR: number | null
    TB: number | null
    RBI: number | null
    SB: number | null
    CS: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    GDP: number | null
  }

  export type Batter_daily_recordCountAggregateOutputType = {
    id: number
    season: number
    date: number
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
    _all: number
  }


  export type Batter_daily_recordAvgAggregateInputType = {
    id?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    PA?: true
    AB?: true
    R?: true
    H?: true
    twoB?: true
    threeB?: true
    HR?: true
    TB?: true
    RBI?: true
    SB?: true
    CS?: true
    BB?: true
    HBP?: true
    SO?: true
    GDP?: true
  }

  export type Batter_daily_recordSumAggregateInputType = {
    id?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    PA?: true
    AB?: true
    R?: true
    H?: true
    twoB?: true
    threeB?: true
    HR?: true
    TB?: true
    RBI?: true
    SB?: true
    CS?: true
    BB?: true
    HBP?: true
    SO?: true
    GDP?: true
  }

  export type Batter_daily_recordMinAggregateInputType = {
    id?: true
    season?: true
    date?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    PA?: true
    AB?: true
    R?: true
    H?: true
    twoB?: true
    threeB?: true
    HR?: true
    TB?: true
    RBI?: true
    SB?: true
    CS?: true
    BB?: true
    HBP?: true
    SO?: true
    GDP?: true
  }

  export type Batter_daily_recordMaxAggregateInputType = {
    id?: true
    season?: true
    date?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    PA?: true
    AB?: true
    R?: true
    H?: true
    twoB?: true
    threeB?: true
    HR?: true
    TB?: true
    RBI?: true
    SB?: true
    CS?: true
    BB?: true
    HBP?: true
    SO?: true
    GDP?: true
  }

  export type Batter_daily_recordCountAggregateInputType = {
    id?: true
    season?: true
    date?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    PA?: true
    AB?: true
    R?: true
    H?: true
    twoB?: true
    threeB?: true
    HR?: true
    TB?: true
    RBI?: true
    SB?: true
    CS?: true
    BB?: true
    HBP?: true
    SO?: true
    GDP?: true
    _all?: true
  }

  export type Batter_daily_recordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which batter_daily_record to aggregate.
     */
    where?: batter_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batter_daily_records to fetch.
     */
    orderBy?: batter_daily_recordOrderByWithRelationInput | batter_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: batter_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batter_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batter_daily_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned batter_daily_records
    **/
    _count?: true | Batter_daily_recordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Batter_daily_recordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Batter_daily_recordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Batter_daily_recordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Batter_daily_recordMaxAggregateInputType
  }

  export type GetBatter_daily_recordAggregateType<T extends Batter_daily_recordAggregateArgs> = {
        [P in keyof T & keyof AggregateBatter_daily_record]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatter_daily_record[P]>
      : GetScalarType<T[P], AggregateBatter_daily_record[P]>
  }




  export type batter_daily_recordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: batter_daily_recordWhereInput
    orderBy?: batter_daily_recordOrderByWithAggregationInput | batter_daily_recordOrderByWithAggregationInput[]
    by: Batter_daily_recordScalarFieldEnum[] | Batter_daily_recordScalarFieldEnum
    having?: batter_daily_recordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Batter_daily_recordCountAggregateInputType | true
    _avg?: Batter_daily_recordAvgAggregateInputType
    _sum?: Batter_daily_recordSumAggregateInputType
    _min?: Batter_daily_recordMinAggregateInputType
    _max?: Batter_daily_recordMaxAggregateInputType
  }

  export type Batter_daily_recordGroupByOutputType = {
    id: number
    season: string
    date: Date
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
    _count: Batter_daily_recordCountAggregateOutputType | null
    _avg: Batter_daily_recordAvgAggregateOutputType | null
    _sum: Batter_daily_recordSumAggregateOutputType | null
    _min: Batter_daily_recordMinAggregateOutputType | null
    _max: Batter_daily_recordMaxAggregateOutputType | null
  }

  type GetBatter_daily_recordGroupByPayload<T extends batter_daily_recordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Batter_daily_recordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Batter_daily_recordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Batter_daily_recordGroupByOutputType[P]>
            : GetScalarType<T[P], Batter_daily_recordGroupByOutputType[P]>
        }
      >
    >


  export type batter_daily_recordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    PA?: boolean
    AB?: boolean
    R?: boolean
    H?: boolean
    twoB?: boolean
    threeB?: boolean
    HR?: boolean
    TB?: boolean
    RBI?: boolean
    SB?: boolean
    CS?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    GDP?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batter_daily_record"]>

  export type batter_daily_recordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    PA?: boolean
    AB?: boolean
    R?: boolean
    H?: boolean
    twoB?: boolean
    threeB?: boolean
    HR?: boolean
    TB?: boolean
    RBI?: boolean
    SB?: boolean
    CS?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    GDP?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batter_daily_record"]>

  export type batter_daily_recordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    PA?: boolean
    AB?: boolean
    R?: boolean
    H?: boolean
    twoB?: boolean
    threeB?: boolean
    HR?: boolean
    TB?: boolean
    RBI?: boolean
    SB?: boolean
    CS?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    GDP?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batter_daily_record"]>

  export type batter_daily_recordSelectScalar = {
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    PA?: boolean
    AB?: boolean
    R?: boolean
    H?: boolean
    twoB?: boolean
    threeB?: boolean
    HR?: boolean
    TB?: boolean
    RBI?: boolean
    SB?: boolean
    CS?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    GDP?: boolean
  }

  export type batter_daily_recordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "season" | "date" | "fkPlayerId" | "fkOppositionTeamId" | "G" | "PA" | "AB" | "R" | "H" | "twoB" | "threeB" | "HR" | "TB" | "RBI" | "SB" | "CS" | "BB" | "HBP" | "SO" | "GDP", ExtArgs["result"]["batter_daily_record"]>
  export type batter_daily_recordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type batter_daily_recordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type batter_daily_recordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $batter_daily_recordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "batter_daily_record"
    objects: {
      player: Prisma.$playerPayload<ExtArgs>
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      season: string
      date: Date
      fkPlayerId: number
      fkOppositionTeamId: number
      G: number
      PA: number
      AB: number
      R: number
      H: number
      twoB: number
      threeB: number
      HR: number
      TB: number
      RBI: number
      SB: number
      CS: number
      BB: number
      HBP: number
      SO: number
      GDP: number
    }, ExtArgs["result"]["batter_daily_record"]>
    composites: {}
  }

  type batter_daily_recordGetPayload<S extends boolean | null | undefined | batter_daily_recordDefaultArgs> = $Result.GetResult<Prisma.$batter_daily_recordPayload, S>

  type batter_daily_recordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<batter_daily_recordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Batter_daily_recordCountAggregateInputType | true
    }

  export interface batter_daily_recordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['batter_daily_record'], meta: { name: 'batter_daily_record' } }
    /**
     * Find zero or one Batter_daily_record that matches the filter.
     * @param {batter_daily_recordFindUniqueArgs} args - Arguments to find a Batter_daily_record
     * @example
     * // Get one Batter_daily_record
     * const batter_daily_record = await prisma.batter_daily_record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends batter_daily_recordFindUniqueArgs>(args: SelectSubset<T, batter_daily_recordFindUniqueArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batter_daily_record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {batter_daily_recordFindUniqueOrThrowArgs} args - Arguments to find a Batter_daily_record
     * @example
     * // Get one Batter_daily_record
     * const batter_daily_record = await prisma.batter_daily_record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends batter_daily_recordFindUniqueOrThrowArgs>(args: SelectSubset<T, batter_daily_recordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batter_daily_record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batter_daily_recordFindFirstArgs} args - Arguments to find a Batter_daily_record
     * @example
     * // Get one Batter_daily_record
     * const batter_daily_record = await prisma.batter_daily_record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends batter_daily_recordFindFirstArgs>(args?: SelectSubset<T, batter_daily_recordFindFirstArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batter_daily_record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batter_daily_recordFindFirstOrThrowArgs} args - Arguments to find a Batter_daily_record
     * @example
     * // Get one Batter_daily_record
     * const batter_daily_record = await prisma.batter_daily_record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends batter_daily_recordFindFirstOrThrowArgs>(args?: SelectSubset<T, batter_daily_recordFindFirstOrThrowArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batter_daily_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batter_daily_recordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batter_daily_records
     * const batter_daily_records = await prisma.batter_daily_record.findMany()
     * 
     * // Get first 10 Batter_daily_records
     * const batter_daily_records = await prisma.batter_daily_record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batter_daily_recordWithIdOnly = await prisma.batter_daily_record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends batter_daily_recordFindManyArgs>(args?: SelectSubset<T, batter_daily_recordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batter_daily_record.
     * @param {batter_daily_recordCreateArgs} args - Arguments to create a Batter_daily_record.
     * @example
     * // Create one Batter_daily_record
     * const Batter_daily_record = await prisma.batter_daily_record.create({
     *   data: {
     *     // ... data to create a Batter_daily_record
     *   }
     * })
     * 
     */
    create<T extends batter_daily_recordCreateArgs>(args: SelectSubset<T, batter_daily_recordCreateArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batter_daily_records.
     * @param {batter_daily_recordCreateManyArgs} args - Arguments to create many Batter_daily_records.
     * @example
     * // Create many Batter_daily_records
     * const batter_daily_record = await prisma.batter_daily_record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends batter_daily_recordCreateManyArgs>(args?: SelectSubset<T, batter_daily_recordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batter_daily_records and returns the data saved in the database.
     * @param {batter_daily_recordCreateManyAndReturnArgs} args - Arguments to create many Batter_daily_records.
     * @example
     * // Create many Batter_daily_records
     * const batter_daily_record = await prisma.batter_daily_record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batter_daily_records and only return the `id`
     * const batter_daily_recordWithIdOnly = await prisma.batter_daily_record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends batter_daily_recordCreateManyAndReturnArgs>(args?: SelectSubset<T, batter_daily_recordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batter_daily_record.
     * @param {batter_daily_recordDeleteArgs} args - Arguments to delete one Batter_daily_record.
     * @example
     * // Delete one Batter_daily_record
     * const Batter_daily_record = await prisma.batter_daily_record.delete({
     *   where: {
     *     // ... filter to delete one Batter_daily_record
     *   }
     * })
     * 
     */
    delete<T extends batter_daily_recordDeleteArgs>(args: SelectSubset<T, batter_daily_recordDeleteArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batter_daily_record.
     * @param {batter_daily_recordUpdateArgs} args - Arguments to update one Batter_daily_record.
     * @example
     * // Update one Batter_daily_record
     * const batter_daily_record = await prisma.batter_daily_record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends batter_daily_recordUpdateArgs>(args: SelectSubset<T, batter_daily_recordUpdateArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batter_daily_records.
     * @param {batter_daily_recordDeleteManyArgs} args - Arguments to filter Batter_daily_records to delete.
     * @example
     * // Delete a few Batter_daily_records
     * const { count } = await prisma.batter_daily_record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends batter_daily_recordDeleteManyArgs>(args?: SelectSubset<T, batter_daily_recordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batter_daily_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batter_daily_recordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batter_daily_records
     * const batter_daily_record = await prisma.batter_daily_record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends batter_daily_recordUpdateManyArgs>(args: SelectSubset<T, batter_daily_recordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batter_daily_records and returns the data updated in the database.
     * @param {batter_daily_recordUpdateManyAndReturnArgs} args - Arguments to update many Batter_daily_records.
     * @example
     * // Update many Batter_daily_records
     * const batter_daily_record = await prisma.batter_daily_record.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batter_daily_records and only return the `id`
     * const batter_daily_recordWithIdOnly = await prisma.batter_daily_record.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends batter_daily_recordUpdateManyAndReturnArgs>(args: SelectSubset<T, batter_daily_recordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batter_daily_record.
     * @param {batter_daily_recordUpsertArgs} args - Arguments to update or create a Batter_daily_record.
     * @example
     * // Update or create a Batter_daily_record
     * const batter_daily_record = await prisma.batter_daily_record.upsert({
     *   create: {
     *     // ... data to create a Batter_daily_record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batter_daily_record we want to update
     *   }
     * })
     */
    upsert<T extends batter_daily_recordUpsertArgs>(args: SelectSubset<T, batter_daily_recordUpsertArgs<ExtArgs>>): Prisma__batter_daily_recordClient<$Result.GetResult<Prisma.$batter_daily_recordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batter_daily_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batter_daily_recordCountArgs} args - Arguments to filter Batter_daily_records to count.
     * @example
     * // Count the number of Batter_daily_records
     * const count = await prisma.batter_daily_record.count({
     *   where: {
     *     // ... the filter for the Batter_daily_records we want to count
     *   }
     * })
    **/
    count<T extends batter_daily_recordCountArgs>(
      args?: Subset<T, batter_daily_recordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Batter_daily_recordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batter_daily_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Batter_daily_recordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Batter_daily_recordAggregateArgs>(args: Subset<T, Batter_daily_recordAggregateArgs>): Prisma.PrismaPromise<GetBatter_daily_recordAggregateType<T>>

    /**
     * Group by Batter_daily_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {batter_daily_recordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends batter_daily_recordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: batter_daily_recordGroupByArgs['orderBy'] }
        : { orderBy?: batter_daily_recordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, batter_daily_recordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatter_daily_recordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the batter_daily_record model
   */
  readonly fields: batter_daily_recordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for batter_daily_record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__batter_daily_recordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends playerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playerDefaultArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the batter_daily_record model
   */
  interface batter_daily_recordFieldRefs {
    readonly id: FieldRef<"batter_daily_record", 'Int'>
    readonly season: FieldRef<"batter_daily_record", 'String'>
    readonly date: FieldRef<"batter_daily_record", 'DateTime'>
    readonly fkPlayerId: FieldRef<"batter_daily_record", 'Int'>
    readonly fkOppositionTeamId: FieldRef<"batter_daily_record", 'Int'>
    readonly G: FieldRef<"batter_daily_record", 'Int'>
    readonly PA: FieldRef<"batter_daily_record", 'Int'>
    readonly AB: FieldRef<"batter_daily_record", 'Int'>
    readonly R: FieldRef<"batter_daily_record", 'Int'>
    readonly H: FieldRef<"batter_daily_record", 'Int'>
    readonly twoB: FieldRef<"batter_daily_record", 'Int'>
    readonly threeB: FieldRef<"batter_daily_record", 'Int'>
    readonly HR: FieldRef<"batter_daily_record", 'Int'>
    readonly TB: FieldRef<"batter_daily_record", 'Int'>
    readonly RBI: FieldRef<"batter_daily_record", 'Int'>
    readonly SB: FieldRef<"batter_daily_record", 'Int'>
    readonly CS: FieldRef<"batter_daily_record", 'Int'>
    readonly BB: FieldRef<"batter_daily_record", 'Int'>
    readonly HBP: FieldRef<"batter_daily_record", 'Int'>
    readonly SO: FieldRef<"batter_daily_record", 'Int'>
    readonly GDP: FieldRef<"batter_daily_record", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * batter_daily_record findUnique
   */
  export type batter_daily_recordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which batter_daily_record to fetch.
     */
    where: batter_daily_recordWhereUniqueInput
  }

  /**
   * batter_daily_record findUniqueOrThrow
   */
  export type batter_daily_recordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which batter_daily_record to fetch.
     */
    where: batter_daily_recordWhereUniqueInput
  }

  /**
   * batter_daily_record findFirst
   */
  export type batter_daily_recordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which batter_daily_record to fetch.
     */
    where?: batter_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batter_daily_records to fetch.
     */
    orderBy?: batter_daily_recordOrderByWithRelationInput | batter_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for batter_daily_records.
     */
    cursor?: batter_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batter_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batter_daily_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of batter_daily_records.
     */
    distinct?: Batter_daily_recordScalarFieldEnum | Batter_daily_recordScalarFieldEnum[]
  }

  /**
   * batter_daily_record findFirstOrThrow
   */
  export type batter_daily_recordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which batter_daily_record to fetch.
     */
    where?: batter_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batter_daily_records to fetch.
     */
    orderBy?: batter_daily_recordOrderByWithRelationInput | batter_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for batter_daily_records.
     */
    cursor?: batter_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batter_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batter_daily_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of batter_daily_records.
     */
    distinct?: Batter_daily_recordScalarFieldEnum | Batter_daily_recordScalarFieldEnum[]
  }

  /**
   * batter_daily_record findMany
   */
  export type batter_daily_recordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which batter_daily_records to fetch.
     */
    where?: batter_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of batter_daily_records to fetch.
     */
    orderBy?: batter_daily_recordOrderByWithRelationInput | batter_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing batter_daily_records.
     */
    cursor?: batter_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` batter_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` batter_daily_records.
     */
    skip?: number
    distinct?: Batter_daily_recordScalarFieldEnum | Batter_daily_recordScalarFieldEnum[]
  }

  /**
   * batter_daily_record create
   */
  export type batter_daily_recordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * The data needed to create a batter_daily_record.
     */
    data: XOR<batter_daily_recordCreateInput, batter_daily_recordUncheckedCreateInput>
  }

  /**
   * batter_daily_record createMany
   */
  export type batter_daily_recordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many batter_daily_records.
     */
    data: batter_daily_recordCreateManyInput | batter_daily_recordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * batter_daily_record createManyAndReturn
   */
  export type batter_daily_recordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * The data used to create many batter_daily_records.
     */
    data: batter_daily_recordCreateManyInput | batter_daily_recordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * batter_daily_record update
   */
  export type batter_daily_recordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * The data needed to update a batter_daily_record.
     */
    data: XOR<batter_daily_recordUpdateInput, batter_daily_recordUncheckedUpdateInput>
    /**
     * Choose, which batter_daily_record to update.
     */
    where: batter_daily_recordWhereUniqueInput
  }

  /**
   * batter_daily_record updateMany
   */
  export type batter_daily_recordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update batter_daily_records.
     */
    data: XOR<batter_daily_recordUpdateManyMutationInput, batter_daily_recordUncheckedUpdateManyInput>
    /**
     * Filter which batter_daily_records to update
     */
    where?: batter_daily_recordWhereInput
    /**
     * Limit how many batter_daily_records to update.
     */
    limit?: number
  }

  /**
   * batter_daily_record updateManyAndReturn
   */
  export type batter_daily_recordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * The data used to update batter_daily_records.
     */
    data: XOR<batter_daily_recordUpdateManyMutationInput, batter_daily_recordUncheckedUpdateManyInput>
    /**
     * Filter which batter_daily_records to update
     */
    where?: batter_daily_recordWhereInput
    /**
     * Limit how many batter_daily_records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * batter_daily_record upsert
   */
  export type batter_daily_recordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * The filter to search for the batter_daily_record to update in case it exists.
     */
    where: batter_daily_recordWhereUniqueInput
    /**
     * In case the batter_daily_record found by the `where` argument doesn't exist, create a new batter_daily_record with this data.
     */
    create: XOR<batter_daily_recordCreateInput, batter_daily_recordUncheckedCreateInput>
    /**
     * In case the batter_daily_record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<batter_daily_recordUpdateInput, batter_daily_recordUncheckedUpdateInput>
  }

  /**
   * batter_daily_record delete
   */
  export type batter_daily_recordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
    /**
     * Filter which batter_daily_record to delete.
     */
    where: batter_daily_recordWhereUniqueInput
  }

  /**
   * batter_daily_record deleteMany
   */
  export type batter_daily_recordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which batter_daily_records to delete
     */
    where?: batter_daily_recordWhereInput
    /**
     * Limit how many batter_daily_records to delete.
     */
    limit?: number
  }

  /**
   * batter_daily_record without action
   */
  export type batter_daily_recordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the batter_daily_record
     */
    select?: batter_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the batter_daily_record
     */
    omit?: batter_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: batter_daily_recordInclude<ExtArgs> | null
  }


  /**
   * Model pitcher_daily_record
   */

  export type AggregatePitcher_daily_record = {
    _count: Pitcher_daily_recordCountAggregateOutputType | null
    _avg: Pitcher_daily_recordAvgAggregateOutputType | null
    _sum: Pitcher_daily_recordSumAggregateOutputType | null
    _min: Pitcher_daily_recordMinAggregateOutputType | null
    _max: Pitcher_daily_recordMaxAggregateOutputType | null
  }

  export type Pitcher_daily_recordAvgAggregateOutputType = {
    id: number | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    CG: number | null
    SHO: number | null
    W: number | null
    L: number | null
    SV: number | null
    HLD: number | null
    TBF: number | null
    H: number | null
    HR: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    R: number | null
    ER: number | null
  }

  export type Pitcher_daily_recordSumAggregateOutputType = {
    id: number | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    CG: number | null
    SHO: number | null
    W: number | null
    L: number | null
    SV: number | null
    HLD: number | null
    TBF: number | null
    H: number | null
    HR: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    R: number | null
    ER: number | null
  }

  export type Pitcher_daily_recordMinAggregateOutputType = {
    id: number | null
    season: string | null
    date: Date | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    CG: number | null
    SHO: number | null
    W: number | null
    L: number | null
    SV: number | null
    HLD: number | null
    TBF: number | null
    IP: string | null
    H: number | null
    HR: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    R: number | null
    ER: number | null
  }

  export type Pitcher_daily_recordMaxAggregateOutputType = {
    id: number | null
    season: string | null
    date: Date | null
    fkPlayerId: number | null
    fkOppositionTeamId: number | null
    G: number | null
    CG: number | null
    SHO: number | null
    W: number | null
    L: number | null
    SV: number | null
    HLD: number | null
    TBF: number | null
    IP: string | null
    H: number | null
    HR: number | null
    BB: number | null
    HBP: number | null
    SO: number | null
    R: number | null
    ER: number | null
  }

  export type Pitcher_daily_recordCountAggregateOutputType = {
    id: number
    season: number
    date: number
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: number
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
    _all: number
  }


  export type Pitcher_daily_recordAvgAggregateInputType = {
    id?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    CG?: true
    SHO?: true
    W?: true
    L?: true
    SV?: true
    HLD?: true
    TBF?: true
    H?: true
    HR?: true
    BB?: true
    HBP?: true
    SO?: true
    R?: true
    ER?: true
  }

  export type Pitcher_daily_recordSumAggregateInputType = {
    id?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    CG?: true
    SHO?: true
    W?: true
    L?: true
    SV?: true
    HLD?: true
    TBF?: true
    H?: true
    HR?: true
    BB?: true
    HBP?: true
    SO?: true
    R?: true
    ER?: true
  }

  export type Pitcher_daily_recordMinAggregateInputType = {
    id?: true
    season?: true
    date?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    CG?: true
    SHO?: true
    W?: true
    L?: true
    SV?: true
    HLD?: true
    TBF?: true
    IP?: true
    H?: true
    HR?: true
    BB?: true
    HBP?: true
    SO?: true
    R?: true
    ER?: true
  }

  export type Pitcher_daily_recordMaxAggregateInputType = {
    id?: true
    season?: true
    date?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    CG?: true
    SHO?: true
    W?: true
    L?: true
    SV?: true
    HLD?: true
    TBF?: true
    IP?: true
    H?: true
    HR?: true
    BB?: true
    HBP?: true
    SO?: true
    R?: true
    ER?: true
  }

  export type Pitcher_daily_recordCountAggregateInputType = {
    id?: true
    season?: true
    date?: true
    fkPlayerId?: true
    fkOppositionTeamId?: true
    G?: true
    CG?: true
    SHO?: true
    W?: true
    L?: true
    SV?: true
    HLD?: true
    TBF?: true
    IP?: true
    H?: true
    HR?: true
    BB?: true
    HBP?: true
    SO?: true
    R?: true
    ER?: true
    _all?: true
  }

  export type Pitcher_daily_recordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pitcher_daily_record to aggregate.
     */
    where?: pitcher_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pitcher_daily_records to fetch.
     */
    orderBy?: pitcher_daily_recordOrderByWithRelationInput | pitcher_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pitcher_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pitcher_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pitcher_daily_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pitcher_daily_records
    **/
    _count?: true | Pitcher_daily_recordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pitcher_daily_recordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pitcher_daily_recordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pitcher_daily_recordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pitcher_daily_recordMaxAggregateInputType
  }

  export type GetPitcher_daily_recordAggregateType<T extends Pitcher_daily_recordAggregateArgs> = {
        [P in keyof T & keyof AggregatePitcher_daily_record]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePitcher_daily_record[P]>
      : GetScalarType<T[P], AggregatePitcher_daily_record[P]>
  }




  export type pitcher_daily_recordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pitcher_daily_recordWhereInput
    orderBy?: pitcher_daily_recordOrderByWithAggregationInput | pitcher_daily_recordOrderByWithAggregationInput[]
    by: Pitcher_daily_recordScalarFieldEnum[] | Pitcher_daily_recordScalarFieldEnum
    having?: pitcher_daily_recordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pitcher_daily_recordCountAggregateInputType | true
    _avg?: Pitcher_daily_recordAvgAggregateInputType
    _sum?: Pitcher_daily_recordSumAggregateInputType
    _min?: Pitcher_daily_recordMinAggregateInputType
    _max?: Pitcher_daily_recordMaxAggregateInputType
  }

  export type Pitcher_daily_recordGroupByOutputType = {
    id: number
    season: string
    date: Date
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
    _count: Pitcher_daily_recordCountAggregateOutputType | null
    _avg: Pitcher_daily_recordAvgAggregateOutputType | null
    _sum: Pitcher_daily_recordSumAggregateOutputType | null
    _min: Pitcher_daily_recordMinAggregateOutputType | null
    _max: Pitcher_daily_recordMaxAggregateOutputType | null
  }

  type GetPitcher_daily_recordGroupByPayload<T extends pitcher_daily_recordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pitcher_daily_recordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pitcher_daily_recordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pitcher_daily_recordGroupByOutputType[P]>
            : GetScalarType<T[P], Pitcher_daily_recordGroupByOutputType[P]>
        }
      >
    >


  export type pitcher_daily_recordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    CG?: boolean
    SHO?: boolean
    W?: boolean
    L?: boolean
    SV?: boolean
    HLD?: boolean
    TBF?: boolean
    IP?: boolean
    H?: boolean
    HR?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    R?: boolean
    ER?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitcher_daily_record"]>

  export type pitcher_daily_recordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    CG?: boolean
    SHO?: boolean
    W?: boolean
    L?: boolean
    SV?: boolean
    HLD?: boolean
    TBF?: boolean
    IP?: boolean
    H?: boolean
    HR?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    R?: boolean
    ER?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitcher_daily_record"]>

  export type pitcher_daily_recordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    CG?: boolean
    SHO?: boolean
    W?: boolean
    L?: boolean
    SV?: boolean
    HLD?: boolean
    TBF?: boolean
    IP?: boolean
    H?: boolean
    HR?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    R?: boolean
    ER?: boolean
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitcher_daily_record"]>

  export type pitcher_daily_recordSelectScalar = {
    id?: boolean
    season?: boolean
    date?: boolean
    fkPlayerId?: boolean
    fkOppositionTeamId?: boolean
    G?: boolean
    CG?: boolean
    SHO?: boolean
    W?: boolean
    L?: boolean
    SV?: boolean
    HLD?: boolean
    TBF?: boolean
    IP?: boolean
    H?: boolean
    HR?: boolean
    BB?: boolean
    HBP?: boolean
    SO?: boolean
    R?: boolean
    ER?: boolean
  }

  export type pitcher_daily_recordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "season" | "date" | "fkPlayerId" | "fkOppositionTeamId" | "G" | "CG" | "SHO" | "W" | "L" | "SV" | "HLD" | "TBF" | "IP" | "H" | "HR" | "BB" | "HBP" | "SO" | "R" | "ER", ExtArgs["result"]["pitcher_daily_record"]>
  export type pitcher_daily_recordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type pitcher_daily_recordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type pitcher_daily_recordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | playerDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $pitcher_daily_recordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pitcher_daily_record"
    objects: {
      player: Prisma.$playerPayload<ExtArgs>
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      season: string
      date: Date
      fkPlayerId: number
      fkOppositionTeamId: number
      G: number
      CG: number
      SHO: number
      W: number
      L: number
      SV: number
      HLD: number
      TBF: number
      IP: string
      H: number
      HR: number
      BB: number
      HBP: number
      SO: number
      R: number
      ER: number
    }, ExtArgs["result"]["pitcher_daily_record"]>
    composites: {}
  }

  type pitcher_daily_recordGetPayload<S extends boolean | null | undefined | pitcher_daily_recordDefaultArgs> = $Result.GetResult<Prisma.$pitcher_daily_recordPayload, S>

  type pitcher_daily_recordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pitcher_daily_recordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pitcher_daily_recordCountAggregateInputType | true
    }

  export interface pitcher_daily_recordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pitcher_daily_record'], meta: { name: 'pitcher_daily_record' } }
    /**
     * Find zero or one Pitcher_daily_record that matches the filter.
     * @param {pitcher_daily_recordFindUniqueArgs} args - Arguments to find a Pitcher_daily_record
     * @example
     * // Get one Pitcher_daily_record
     * const pitcher_daily_record = await prisma.pitcher_daily_record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pitcher_daily_recordFindUniqueArgs>(args: SelectSubset<T, pitcher_daily_recordFindUniqueArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pitcher_daily_record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pitcher_daily_recordFindUniqueOrThrowArgs} args - Arguments to find a Pitcher_daily_record
     * @example
     * // Get one Pitcher_daily_record
     * const pitcher_daily_record = await prisma.pitcher_daily_record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pitcher_daily_recordFindUniqueOrThrowArgs>(args: SelectSubset<T, pitcher_daily_recordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pitcher_daily_record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pitcher_daily_recordFindFirstArgs} args - Arguments to find a Pitcher_daily_record
     * @example
     * // Get one Pitcher_daily_record
     * const pitcher_daily_record = await prisma.pitcher_daily_record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pitcher_daily_recordFindFirstArgs>(args?: SelectSubset<T, pitcher_daily_recordFindFirstArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pitcher_daily_record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pitcher_daily_recordFindFirstOrThrowArgs} args - Arguments to find a Pitcher_daily_record
     * @example
     * // Get one Pitcher_daily_record
     * const pitcher_daily_record = await prisma.pitcher_daily_record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pitcher_daily_recordFindFirstOrThrowArgs>(args?: SelectSubset<T, pitcher_daily_recordFindFirstOrThrowArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pitcher_daily_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pitcher_daily_recordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pitcher_daily_records
     * const pitcher_daily_records = await prisma.pitcher_daily_record.findMany()
     * 
     * // Get first 10 Pitcher_daily_records
     * const pitcher_daily_records = await prisma.pitcher_daily_record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pitcher_daily_recordWithIdOnly = await prisma.pitcher_daily_record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pitcher_daily_recordFindManyArgs>(args?: SelectSubset<T, pitcher_daily_recordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pitcher_daily_record.
     * @param {pitcher_daily_recordCreateArgs} args - Arguments to create a Pitcher_daily_record.
     * @example
     * // Create one Pitcher_daily_record
     * const Pitcher_daily_record = await prisma.pitcher_daily_record.create({
     *   data: {
     *     // ... data to create a Pitcher_daily_record
     *   }
     * })
     * 
     */
    create<T extends pitcher_daily_recordCreateArgs>(args: SelectSubset<T, pitcher_daily_recordCreateArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pitcher_daily_records.
     * @param {pitcher_daily_recordCreateManyArgs} args - Arguments to create many Pitcher_daily_records.
     * @example
     * // Create many Pitcher_daily_records
     * const pitcher_daily_record = await prisma.pitcher_daily_record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pitcher_daily_recordCreateManyArgs>(args?: SelectSubset<T, pitcher_daily_recordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pitcher_daily_records and returns the data saved in the database.
     * @param {pitcher_daily_recordCreateManyAndReturnArgs} args - Arguments to create many Pitcher_daily_records.
     * @example
     * // Create many Pitcher_daily_records
     * const pitcher_daily_record = await prisma.pitcher_daily_record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pitcher_daily_records and only return the `id`
     * const pitcher_daily_recordWithIdOnly = await prisma.pitcher_daily_record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pitcher_daily_recordCreateManyAndReturnArgs>(args?: SelectSubset<T, pitcher_daily_recordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pitcher_daily_record.
     * @param {pitcher_daily_recordDeleteArgs} args - Arguments to delete one Pitcher_daily_record.
     * @example
     * // Delete one Pitcher_daily_record
     * const Pitcher_daily_record = await prisma.pitcher_daily_record.delete({
     *   where: {
     *     // ... filter to delete one Pitcher_daily_record
     *   }
     * })
     * 
     */
    delete<T extends pitcher_daily_recordDeleteArgs>(args: SelectSubset<T, pitcher_daily_recordDeleteArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pitcher_daily_record.
     * @param {pitcher_daily_recordUpdateArgs} args - Arguments to update one Pitcher_daily_record.
     * @example
     * // Update one Pitcher_daily_record
     * const pitcher_daily_record = await prisma.pitcher_daily_record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pitcher_daily_recordUpdateArgs>(args: SelectSubset<T, pitcher_daily_recordUpdateArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pitcher_daily_records.
     * @param {pitcher_daily_recordDeleteManyArgs} args - Arguments to filter Pitcher_daily_records to delete.
     * @example
     * // Delete a few Pitcher_daily_records
     * const { count } = await prisma.pitcher_daily_record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pitcher_daily_recordDeleteManyArgs>(args?: SelectSubset<T, pitcher_daily_recordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pitcher_daily_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pitcher_daily_recordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pitcher_daily_records
     * const pitcher_daily_record = await prisma.pitcher_daily_record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pitcher_daily_recordUpdateManyArgs>(args: SelectSubset<T, pitcher_daily_recordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pitcher_daily_records and returns the data updated in the database.
     * @param {pitcher_daily_recordUpdateManyAndReturnArgs} args - Arguments to update many Pitcher_daily_records.
     * @example
     * // Update many Pitcher_daily_records
     * const pitcher_daily_record = await prisma.pitcher_daily_record.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pitcher_daily_records and only return the `id`
     * const pitcher_daily_recordWithIdOnly = await prisma.pitcher_daily_record.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pitcher_daily_recordUpdateManyAndReturnArgs>(args: SelectSubset<T, pitcher_daily_recordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pitcher_daily_record.
     * @param {pitcher_daily_recordUpsertArgs} args - Arguments to update or create a Pitcher_daily_record.
     * @example
     * // Update or create a Pitcher_daily_record
     * const pitcher_daily_record = await prisma.pitcher_daily_record.upsert({
     *   create: {
     *     // ... data to create a Pitcher_daily_record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pitcher_daily_record we want to update
     *   }
     * })
     */
    upsert<T extends pitcher_daily_recordUpsertArgs>(args: SelectSubset<T, pitcher_daily_recordUpsertArgs<ExtArgs>>): Prisma__pitcher_daily_recordClient<$Result.GetResult<Prisma.$pitcher_daily_recordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pitcher_daily_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pitcher_daily_recordCountArgs} args - Arguments to filter Pitcher_daily_records to count.
     * @example
     * // Count the number of Pitcher_daily_records
     * const count = await prisma.pitcher_daily_record.count({
     *   where: {
     *     // ... the filter for the Pitcher_daily_records we want to count
     *   }
     * })
    **/
    count<T extends pitcher_daily_recordCountArgs>(
      args?: Subset<T, pitcher_daily_recordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pitcher_daily_recordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pitcher_daily_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pitcher_daily_recordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pitcher_daily_recordAggregateArgs>(args: Subset<T, Pitcher_daily_recordAggregateArgs>): Prisma.PrismaPromise<GetPitcher_daily_recordAggregateType<T>>

    /**
     * Group by Pitcher_daily_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pitcher_daily_recordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pitcher_daily_recordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pitcher_daily_recordGroupByArgs['orderBy'] }
        : { orderBy?: pitcher_daily_recordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pitcher_daily_recordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPitcher_daily_recordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pitcher_daily_record model
   */
  readonly fields: pitcher_daily_recordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pitcher_daily_record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pitcher_daily_recordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends playerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playerDefaultArgs<ExtArgs>>): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pitcher_daily_record model
   */
  interface pitcher_daily_recordFieldRefs {
    readonly id: FieldRef<"pitcher_daily_record", 'Int'>
    readonly season: FieldRef<"pitcher_daily_record", 'String'>
    readonly date: FieldRef<"pitcher_daily_record", 'DateTime'>
    readonly fkPlayerId: FieldRef<"pitcher_daily_record", 'Int'>
    readonly fkOppositionTeamId: FieldRef<"pitcher_daily_record", 'Int'>
    readonly G: FieldRef<"pitcher_daily_record", 'Int'>
    readonly CG: FieldRef<"pitcher_daily_record", 'Int'>
    readonly SHO: FieldRef<"pitcher_daily_record", 'Int'>
    readonly W: FieldRef<"pitcher_daily_record", 'Int'>
    readonly L: FieldRef<"pitcher_daily_record", 'Int'>
    readonly SV: FieldRef<"pitcher_daily_record", 'Int'>
    readonly HLD: FieldRef<"pitcher_daily_record", 'Int'>
    readonly TBF: FieldRef<"pitcher_daily_record", 'Int'>
    readonly IP: FieldRef<"pitcher_daily_record", 'String'>
    readonly H: FieldRef<"pitcher_daily_record", 'Int'>
    readonly HR: FieldRef<"pitcher_daily_record", 'Int'>
    readonly BB: FieldRef<"pitcher_daily_record", 'Int'>
    readonly HBP: FieldRef<"pitcher_daily_record", 'Int'>
    readonly SO: FieldRef<"pitcher_daily_record", 'Int'>
    readonly R: FieldRef<"pitcher_daily_record", 'Int'>
    readonly ER: FieldRef<"pitcher_daily_record", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pitcher_daily_record findUnique
   */
  export type pitcher_daily_recordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which pitcher_daily_record to fetch.
     */
    where: pitcher_daily_recordWhereUniqueInput
  }

  /**
   * pitcher_daily_record findUniqueOrThrow
   */
  export type pitcher_daily_recordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which pitcher_daily_record to fetch.
     */
    where: pitcher_daily_recordWhereUniqueInput
  }

  /**
   * pitcher_daily_record findFirst
   */
  export type pitcher_daily_recordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which pitcher_daily_record to fetch.
     */
    where?: pitcher_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pitcher_daily_records to fetch.
     */
    orderBy?: pitcher_daily_recordOrderByWithRelationInput | pitcher_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pitcher_daily_records.
     */
    cursor?: pitcher_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pitcher_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pitcher_daily_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pitcher_daily_records.
     */
    distinct?: Pitcher_daily_recordScalarFieldEnum | Pitcher_daily_recordScalarFieldEnum[]
  }

  /**
   * pitcher_daily_record findFirstOrThrow
   */
  export type pitcher_daily_recordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which pitcher_daily_record to fetch.
     */
    where?: pitcher_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pitcher_daily_records to fetch.
     */
    orderBy?: pitcher_daily_recordOrderByWithRelationInput | pitcher_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pitcher_daily_records.
     */
    cursor?: pitcher_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pitcher_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pitcher_daily_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pitcher_daily_records.
     */
    distinct?: Pitcher_daily_recordScalarFieldEnum | Pitcher_daily_recordScalarFieldEnum[]
  }

  /**
   * pitcher_daily_record findMany
   */
  export type pitcher_daily_recordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * Filter, which pitcher_daily_records to fetch.
     */
    where?: pitcher_daily_recordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pitcher_daily_records to fetch.
     */
    orderBy?: pitcher_daily_recordOrderByWithRelationInput | pitcher_daily_recordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pitcher_daily_records.
     */
    cursor?: pitcher_daily_recordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pitcher_daily_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pitcher_daily_records.
     */
    skip?: number
    distinct?: Pitcher_daily_recordScalarFieldEnum | Pitcher_daily_recordScalarFieldEnum[]
  }

  /**
   * pitcher_daily_record create
   */
  export type pitcher_daily_recordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * The data needed to create a pitcher_daily_record.
     */
    data: XOR<pitcher_daily_recordCreateInput, pitcher_daily_recordUncheckedCreateInput>
  }

  /**
   * pitcher_daily_record createMany
   */
  export type pitcher_daily_recordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pitcher_daily_records.
     */
    data: pitcher_daily_recordCreateManyInput | pitcher_daily_recordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pitcher_daily_record createManyAndReturn
   */
  export type pitcher_daily_recordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * The data used to create many pitcher_daily_records.
     */
    data: pitcher_daily_recordCreateManyInput | pitcher_daily_recordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pitcher_daily_record update
   */
  export type pitcher_daily_recordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * The data needed to update a pitcher_daily_record.
     */
    data: XOR<pitcher_daily_recordUpdateInput, pitcher_daily_recordUncheckedUpdateInput>
    /**
     * Choose, which pitcher_daily_record to update.
     */
    where: pitcher_daily_recordWhereUniqueInput
  }

  /**
   * pitcher_daily_record updateMany
   */
  export type pitcher_daily_recordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pitcher_daily_records.
     */
    data: XOR<pitcher_daily_recordUpdateManyMutationInput, pitcher_daily_recordUncheckedUpdateManyInput>
    /**
     * Filter which pitcher_daily_records to update
     */
    where?: pitcher_daily_recordWhereInput
    /**
     * Limit how many pitcher_daily_records to update.
     */
    limit?: number
  }

  /**
   * pitcher_daily_record updateManyAndReturn
   */
  export type pitcher_daily_recordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * The data used to update pitcher_daily_records.
     */
    data: XOR<pitcher_daily_recordUpdateManyMutationInput, pitcher_daily_recordUncheckedUpdateManyInput>
    /**
     * Filter which pitcher_daily_records to update
     */
    where?: pitcher_daily_recordWhereInput
    /**
     * Limit how many pitcher_daily_records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pitcher_daily_record upsert
   */
  export type pitcher_daily_recordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * The filter to search for the pitcher_daily_record to update in case it exists.
     */
    where: pitcher_daily_recordWhereUniqueInput
    /**
     * In case the pitcher_daily_record found by the `where` argument doesn't exist, create a new pitcher_daily_record with this data.
     */
    create: XOR<pitcher_daily_recordCreateInput, pitcher_daily_recordUncheckedCreateInput>
    /**
     * In case the pitcher_daily_record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pitcher_daily_recordUpdateInput, pitcher_daily_recordUncheckedUpdateInput>
  }

  /**
   * pitcher_daily_record delete
   */
  export type pitcher_daily_recordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
    /**
     * Filter which pitcher_daily_record to delete.
     */
    where: pitcher_daily_recordWhereUniqueInput
  }

  /**
   * pitcher_daily_record deleteMany
   */
  export type pitcher_daily_recordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pitcher_daily_records to delete
     */
    where?: pitcher_daily_recordWhereInput
    /**
     * Limit how many pitcher_daily_records to delete.
     */
    limit?: number
  }

  /**
   * pitcher_daily_record without action
   */
  export type pitcher_daily_recordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pitcher_daily_record
     */
    select?: pitcher_daily_recordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pitcher_daily_record
     */
    omit?: pitcher_daily_recordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pitcher_daily_recordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TeamScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    win: 'win',
    runnerUp: 'runnerUp'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    kboId: 'kboId',
    profileImage: 'profileImage',
    name: 'name',
    birth: 'birth',
    backNumber: 'backNumber',
    school: 'school',
    teamId: 'teamId',
    position: 'position',
    isActive: 'isActive'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const Batter_daily_recordScalarFieldEnum: {
    id: 'id',
    season: 'season',
    date: 'date',
    fkPlayerId: 'fkPlayerId',
    fkOppositionTeamId: 'fkOppositionTeamId',
    G: 'G',
    PA: 'PA',
    AB: 'AB',
    R: 'R',
    H: 'H',
    twoB: 'twoB',
    threeB: 'threeB',
    HR: 'HR',
    TB: 'TB',
    RBI: 'RBI',
    SB: 'SB',
    CS: 'CS',
    BB: 'BB',
    HBP: 'HBP',
    SO: 'SO',
    GDP: 'GDP'
  };

  export type Batter_daily_recordScalarFieldEnum = (typeof Batter_daily_recordScalarFieldEnum)[keyof typeof Batter_daily_recordScalarFieldEnum]


  export const Pitcher_daily_recordScalarFieldEnum: {
    id: 'id',
    season: 'season',
    date: 'date',
    fkPlayerId: 'fkPlayerId',
    fkOppositionTeamId: 'fkOppositionTeamId',
    G: 'G',
    CG: 'CG',
    SHO: 'SHO',
    W: 'W',
    L: 'L',
    SV: 'SV',
    HLD: 'HLD',
    TBF: 'TBF',
    IP: 'IP',
    H: 'H',
    HR: 'HR',
    BB: 'BB',
    HBP: 'HBP',
    SO: 'SO',
    R: 'R',
    ER: 'ER'
  };

  export type Pitcher_daily_recordScalarFieldEnum = (typeof Pitcher_daily_recordScalarFieldEnum)[keyof typeof Pitcher_daily_recordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    id?: IntFilter<"team"> | number
    symbol?: StringFilter<"team"> | string
    name?: StringFilter<"team"> | string
    win?: IntFilter<"team"> | number
    runnerUp?: IntFilter<"team"> | number
    players?: PlayerListRelationFilter
    batterOppositionRecords?: Batter_daily_recordListRelationFilter
    pitcherOppositionRecords?: Pitcher_daily_recordListRelationFilter
  }

  export type teamOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    win?: SortOrder
    runnerUp?: SortOrder
    players?: playerOrderByRelationAggregateInput
    batterOppositionRecords?: batter_daily_recordOrderByRelationAggregateInput
    pitcherOppositionRecords?: pitcher_daily_recordOrderByRelationAggregateInput
  }

  export type teamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    symbol?: StringFilter<"team"> | string
    name?: StringFilter<"team"> | string
    win?: IntFilter<"team"> | number
    runnerUp?: IntFilter<"team"> | number
    players?: PlayerListRelationFilter
    batterOppositionRecords?: Batter_daily_recordListRelationFilter
    pitcherOppositionRecords?: Pitcher_daily_recordListRelationFilter
  }, "id">

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    win?: SortOrder
    runnerUp?: SortOrder
    _count?: teamCountOrderByAggregateInput
    _avg?: teamAvgOrderByAggregateInput
    _max?: teamMaxOrderByAggregateInput
    _min?: teamMinOrderByAggregateInput
    _sum?: teamSumOrderByAggregateInput
  }

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    OR?: teamScalarWhereWithAggregatesInput[]
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"team"> | number
    symbol?: StringWithAggregatesFilter<"team"> | string
    name?: StringWithAggregatesFilter<"team"> | string
    win?: IntWithAggregatesFilter<"team"> | number
    runnerUp?: IntWithAggregatesFilter<"team"> | number
  }

  export type playerWhereInput = {
    AND?: playerWhereInput | playerWhereInput[]
    OR?: playerWhereInput[]
    NOT?: playerWhereInput | playerWhereInput[]
    id?: IntFilter<"player"> | number
    kboId?: IntFilter<"player"> | number
    profileImage?: StringNullableFilter<"player"> | string | null
    name?: StringNullableFilter<"player"> | string | null
    birth?: DateTimeNullableFilter<"player"> | Date | string | null
    backNumber?: StringNullableFilter<"player"> | string | null
    school?: StringNullableFilter<"player"> | string | null
    teamId?: IntNullableFilter<"player"> | number | null
    position?: StringNullableFilter<"player"> | string | null
    isActive?: BoolNullableFilter<"player"> | boolean | null
    team?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    batterDailyRecords?: Batter_daily_recordListRelationFilter
    pitcherDailyRecords?: Pitcher_daily_recordListRelationFilter
  }

  export type playerOrderByWithRelationInput = {
    id?: SortOrder
    kboId?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    backNumber?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    team?: teamOrderByWithRelationInput
    batterDailyRecords?: batter_daily_recordOrderByRelationAggregateInput
    pitcherDailyRecords?: pitcher_daily_recordOrderByRelationAggregateInput
  }

  export type playerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kboId?: number
    AND?: playerWhereInput | playerWhereInput[]
    OR?: playerWhereInput[]
    NOT?: playerWhereInput | playerWhereInput[]
    profileImage?: StringNullableFilter<"player"> | string | null
    name?: StringNullableFilter<"player"> | string | null
    birth?: DateTimeNullableFilter<"player"> | Date | string | null
    backNumber?: StringNullableFilter<"player"> | string | null
    school?: StringNullableFilter<"player"> | string | null
    teamId?: IntNullableFilter<"player"> | number | null
    position?: StringNullableFilter<"player"> | string | null
    isActive?: BoolNullableFilter<"player"> | boolean | null
    team?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    batterDailyRecords?: Batter_daily_recordListRelationFilter
    pitcherDailyRecords?: Pitcher_daily_recordListRelationFilter
  }, "id" | "kboId">

  export type playerOrderByWithAggregationInput = {
    id?: SortOrder
    kboId?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    backNumber?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    _count?: playerCountOrderByAggregateInput
    _avg?: playerAvgOrderByAggregateInput
    _max?: playerMaxOrderByAggregateInput
    _min?: playerMinOrderByAggregateInput
    _sum?: playerSumOrderByAggregateInput
  }

  export type playerScalarWhereWithAggregatesInput = {
    AND?: playerScalarWhereWithAggregatesInput | playerScalarWhereWithAggregatesInput[]
    OR?: playerScalarWhereWithAggregatesInput[]
    NOT?: playerScalarWhereWithAggregatesInput | playerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"player"> | number
    kboId?: IntWithAggregatesFilter<"player"> | number
    profileImage?: StringNullableWithAggregatesFilter<"player"> | string | null
    name?: StringNullableWithAggregatesFilter<"player"> | string | null
    birth?: DateTimeNullableWithAggregatesFilter<"player"> | Date | string | null
    backNumber?: StringNullableWithAggregatesFilter<"player"> | string | null
    school?: StringNullableWithAggregatesFilter<"player"> | string | null
    teamId?: IntNullableWithAggregatesFilter<"player"> | number | null
    position?: StringNullableWithAggregatesFilter<"player"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"player"> | boolean | null
  }

  export type batter_daily_recordWhereInput = {
    AND?: batter_daily_recordWhereInput | batter_daily_recordWhereInput[]
    OR?: batter_daily_recordWhereInput[]
    NOT?: batter_daily_recordWhereInput | batter_daily_recordWhereInput[]
    id?: IntFilter<"batter_daily_record"> | number
    season?: StringFilter<"batter_daily_record"> | string
    date?: DateTimeFilter<"batter_daily_record"> | Date | string
    fkPlayerId?: IntFilter<"batter_daily_record"> | number
    fkOppositionTeamId?: IntFilter<"batter_daily_record"> | number
    G?: IntFilter<"batter_daily_record"> | number
    PA?: IntFilter<"batter_daily_record"> | number
    AB?: IntFilter<"batter_daily_record"> | number
    R?: IntFilter<"batter_daily_record"> | number
    H?: IntFilter<"batter_daily_record"> | number
    twoB?: IntFilter<"batter_daily_record"> | number
    threeB?: IntFilter<"batter_daily_record"> | number
    HR?: IntFilter<"batter_daily_record"> | number
    TB?: IntFilter<"batter_daily_record"> | number
    RBI?: IntFilter<"batter_daily_record"> | number
    SB?: IntFilter<"batter_daily_record"> | number
    CS?: IntFilter<"batter_daily_record"> | number
    BB?: IntFilter<"batter_daily_record"> | number
    HBP?: IntFilter<"batter_daily_record"> | number
    SO?: IntFilter<"batter_daily_record"> | number
    GDP?: IntFilter<"batter_daily_record"> | number
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type batter_daily_recordOrderByWithRelationInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    PA?: SortOrder
    AB?: SortOrder
    R?: SortOrder
    H?: SortOrder
    twoB?: SortOrder
    threeB?: SortOrder
    HR?: SortOrder
    TB?: SortOrder
    RBI?: SortOrder
    SB?: SortOrder
    CS?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    GDP?: SortOrder
    player?: playerOrderByWithRelationInput
    team?: teamOrderByWithRelationInput
  }

  export type batter_daily_recordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: batter_daily_recordWhereInput | batter_daily_recordWhereInput[]
    OR?: batter_daily_recordWhereInput[]
    NOT?: batter_daily_recordWhereInput | batter_daily_recordWhereInput[]
    season?: StringFilter<"batter_daily_record"> | string
    date?: DateTimeFilter<"batter_daily_record"> | Date | string
    fkPlayerId?: IntFilter<"batter_daily_record"> | number
    fkOppositionTeamId?: IntFilter<"batter_daily_record"> | number
    G?: IntFilter<"batter_daily_record"> | number
    PA?: IntFilter<"batter_daily_record"> | number
    AB?: IntFilter<"batter_daily_record"> | number
    R?: IntFilter<"batter_daily_record"> | number
    H?: IntFilter<"batter_daily_record"> | number
    twoB?: IntFilter<"batter_daily_record"> | number
    threeB?: IntFilter<"batter_daily_record"> | number
    HR?: IntFilter<"batter_daily_record"> | number
    TB?: IntFilter<"batter_daily_record"> | number
    RBI?: IntFilter<"batter_daily_record"> | number
    SB?: IntFilter<"batter_daily_record"> | number
    CS?: IntFilter<"batter_daily_record"> | number
    BB?: IntFilter<"batter_daily_record"> | number
    HBP?: IntFilter<"batter_daily_record"> | number
    SO?: IntFilter<"batter_daily_record"> | number
    GDP?: IntFilter<"batter_daily_record"> | number
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type batter_daily_recordOrderByWithAggregationInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    PA?: SortOrder
    AB?: SortOrder
    R?: SortOrder
    H?: SortOrder
    twoB?: SortOrder
    threeB?: SortOrder
    HR?: SortOrder
    TB?: SortOrder
    RBI?: SortOrder
    SB?: SortOrder
    CS?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    GDP?: SortOrder
    _count?: batter_daily_recordCountOrderByAggregateInput
    _avg?: batter_daily_recordAvgOrderByAggregateInput
    _max?: batter_daily_recordMaxOrderByAggregateInput
    _min?: batter_daily_recordMinOrderByAggregateInput
    _sum?: batter_daily_recordSumOrderByAggregateInput
  }

  export type batter_daily_recordScalarWhereWithAggregatesInput = {
    AND?: batter_daily_recordScalarWhereWithAggregatesInput | batter_daily_recordScalarWhereWithAggregatesInput[]
    OR?: batter_daily_recordScalarWhereWithAggregatesInput[]
    NOT?: batter_daily_recordScalarWhereWithAggregatesInput | batter_daily_recordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"batter_daily_record"> | number
    season?: StringWithAggregatesFilter<"batter_daily_record"> | string
    date?: DateTimeWithAggregatesFilter<"batter_daily_record"> | Date | string
    fkPlayerId?: IntWithAggregatesFilter<"batter_daily_record"> | number
    fkOppositionTeamId?: IntWithAggregatesFilter<"batter_daily_record"> | number
    G?: IntWithAggregatesFilter<"batter_daily_record"> | number
    PA?: IntWithAggregatesFilter<"batter_daily_record"> | number
    AB?: IntWithAggregatesFilter<"batter_daily_record"> | number
    R?: IntWithAggregatesFilter<"batter_daily_record"> | number
    H?: IntWithAggregatesFilter<"batter_daily_record"> | number
    twoB?: IntWithAggregatesFilter<"batter_daily_record"> | number
    threeB?: IntWithAggregatesFilter<"batter_daily_record"> | number
    HR?: IntWithAggregatesFilter<"batter_daily_record"> | number
    TB?: IntWithAggregatesFilter<"batter_daily_record"> | number
    RBI?: IntWithAggregatesFilter<"batter_daily_record"> | number
    SB?: IntWithAggregatesFilter<"batter_daily_record"> | number
    CS?: IntWithAggregatesFilter<"batter_daily_record"> | number
    BB?: IntWithAggregatesFilter<"batter_daily_record"> | number
    HBP?: IntWithAggregatesFilter<"batter_daily_record"> | number
    SO?: IntWithAggregatesFilter<"batter_daily_record"> | number
    GDP?: IntWithAggregatesFilter<"batter_daily_record"> | number
  }

  export type pitcher_daily_recordWhereInput = {
    AND?: pitcher_daily_recordWhereInput | pitcher_daily_recordWhereInput[]
    OR?: pitcher_daily_recordWhereInput[]
    NOT?: pitcher_daily_recordWhereInput | pitcher_daily_recordWhereInput[]
    id?: IntFilter<"pitcher_daily_record"> | number
    season?: StringFilter<"pitcher_daily_record"> | string
    date?: DateTimeFilter<"pitcher_daily_record"> | Date | string
    fkPlayerId?: IntFilter<"pitcher_daily_record"> | number
    fkOppositionTeamId?: IntFilter<"pitcher_daily_record"> | number
    G?: IntFilter<"pitcher_daily_record"> | number
    CG?: IntFilter<"pitcher_daily_record"> | number
    SHO?: IntFilter<"pitcher_daily_record"> | number
    W?: IntFilter<"pitcher_daily_record"> | number
    L?: IntFilter<"pitcher_daily_record"> | number
    SV?: IntFilter<"pitcher_daily_record"> | number
    HLD?: IntFilter<"pitcher_daily_record"> | number
    TBF?: IntFilter<"pitcher_daily_record"> | number
    IP?: StringFilter<"pitcher_daily_record"> | string
    H?: IntFilter<"pitcher_daily_record"> | number
    HR?: IntFilter<"pitcher_daily_record"> | number
    BB?: IntFilter<"pitcher_daily_record"> | number
    HBP?: IntFilter<"pitcher_daily_record"> | number
    SO?: IntFilter<"pitcher_daily_record"> | number
    R?: IntFilter<"pitcher_daily_record"> | number
    ER?: IntFilter<"pitcher_daily_record"> | number
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type pitcher_daily_recordOrderByWithRelationInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    CG?: SortOrder
    SHO?: SortOrder
    W?: SortOrder
    L?: SortOrder
    SV?: SortOrder
    HLD?: SortOrder
    TBF?: SortOrder
    IP?: SortOrder
    H?: SortOrder
    HR?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    R?: SortOrder
    ER?: SortOrder
    player?: playerOrderByWithRelationInput
    team?: teamOrderByWithRelationInput
  }

  export type pitcher_daily_recordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pitcher_daily_recordWhereInput | pitcher_daily_recordWhereInput[]
    OR?: pitcher_daily_recordWhereInput[]
    NOT?: pitcher_daily_recordWhereInput | pitcher_daily_recordWhereInput[]
    season?: StringFilter<"pitcher_daily_record"> | string
    date?: DateTimeFilter<"pitcher_daily_record"> | Date | string
    fkPlayerId?: IntFilter<"pitcher_daily_record"> | number
    fkOppositionTeamId?: IntFilter<"pitcher_daily_record"> | number
    G?: IntFilter<"pitcher_daily_record"> | number
    CG?: IntFilter<"pitcher_daily_record"> | number
    SHO?: IntFilter<"pitcher_daily_record"> | number
    W?: IntFilter<"pitcher_daily_record"> | number
    L?: IntFilter<"pitcher_daily_record"> | number
    SV?: IntFilter<"pitcher_daily_record"> | number
    HLD?: IntFilter<"pitcher_daily_record"> | number
    TBF?: IntFilter<"pitcher_daily_record"> | number
    IP?: StringFilter<"pitcher_daily_record"> | string
    H?: IntFilter<"pitcher_daily_record"> | number
    HR?: IntFilter<"pitcher_daily_record"> | number
    BB?: IntFilter<"pitcher_daily_record"> | number
    HBP?: IntFilter<"pitcher_daily_record"> | number
    SO?: IntFilter<"pitcher_daily_record"> | number
    R?: IntFilter<"pitcher_daily_record"> | number
    ER?: IntFilter<"pitcher_daily_record"> | number
    player?: XOR<PlayerScalarRelationFilter, playerWhereInput>
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type pitcher_daily_recordOrderByWithAggregationInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    CG?: SortOrder
    SHO?: SortOrder
    W?: SortOrder
    L?: SortOrder
    SV?: SortOrder
    HLD?: SortOrder
    TBF?: SortOrder
    IP?: SortOrder
    H?: SortOrder
    HR?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    R?: SortOrder
    ER?: SortOrder
    _count?: pitcher_daily_recordCountOrderByAggregateInput
    _avg?: pitcher_daily_recordAvgOrderByAggregateInput
    _max?: pitcher_daily_recordMaxOrderByAggregateInput
    _min?: pitcher_daily_recordMinOrderByAggregateInput
    _sum?: pitcher_daily_recordSumOrderByAggregateInput
  }

  export type pitcher_daily_recordScalarWhereWithAggregatesInput = {
    AND?: pitcher_daily_recordScalarWhereWithAggregatesInput | pitcher_daily_recordScalarWhereWithAggregatesInput[]
    OR?: pitcher_daily_recordScalarWhereWithAggregatesInput[]
    NOT?: pitcher_daily_recordScalarWhereWithAggregatesInput | pitcher_daily_recordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    season?: StringWithAggregatesFilter<"pitcher_daily_record"> | string
    date?: DateTimeWithAggregatesFilter<"pitcher_daily_record"> | Date | string
    fkPlayerId?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    fkOppositionTeamId?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    G?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    CG?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    SHO?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    W?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    L?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    SV?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    HLD?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    TBF?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    IP?: StringWithAggregatesFilter<"pitcher_daily_record"> | string
    H?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    HR?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    BB?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    HBP?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    SO?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    R?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
    ER?: IntWithAggregatesFilter<"pitcher_daily_record"> | number
  }

  export type teamCreateInput = {
    symbol: string
    name: string
    win: number
    runnerUp: number
    players?: playerCreateNestedManyWithoutTeamInput
    batterOppositionRecords?: batter_daily_recordCreateNestedManyWithoutTeamInput
    pitcherOppositionRecords?: pitcher_daily_recordCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateInput = {
    id?: number
    symbol: string
    name: string
    win: number
    runnerUp: number
    players?: playerUncheckedCreateNestedManyWithoutTeamInput
    batterOppositionRecords?: batter_daily_recordUncheckedCreateNestedManyWithoutTeamInput
    pitcherOppositionRecords?: pitcher_daily_recordUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    players?: playerUpdateManyWithoutTeamNestedInput
    batterOppositionRecords?: batter_daily_recordUpdateManyWithoutTeamNestedInput
    pitcherOppositionRecords?: pitcher_daily_recordUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    players?: playerUncheckedUpdateManyWithoutTeamNestedInput
    batterOppositionRecords?: batter_daily_recordUncheckedUpdateManyWithoutTeamNestedInput
    pitcherOppositionRecords?: pitcher_daily_recordUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateManyInput = {
    id?: number
    symbol: string
    name: string
    win: number
    runnerUp: number
  }

  export type teamUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
  }

  export type teamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
  }

  export type playerCreateInput = {
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    position?: string | null
    isActive?: boolean | null
    team?: teamCreateNestedOneWithoutPlayersInput
    batterDailyRecords?: batter_daily_recordCreateNestedManyWithoutPlayerInput
    pitcherDailyRecords?: pitcher_daily_recordCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateInput = {
    id?: number
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    teamId?: number | null
    position?: string | null
    isActive?: boolean | null
    batterDailyRecords?: batter_daily_recordUncheckedCreateNestedManyWithoutPlayerInput
    pitcherDailyRecords?: pitcher_daily_recordUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerUpdateInput = {
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team?: teamUpdateOneWithoutPlayersNestedInput
    batterDailyRecords?: batter_daily_recordUpdateManyWithoutPlayerNestedInput
    pitcherDailyRecords?: pitcher_daily_recordUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    batterDailyRecords?: batter_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput
    pitcherDailyRecords?: pitcher_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type playerCreateManyInput = {
    id?: number
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    teamId?: number | null
    position?: string | null
    isActive?: boolean | null
  }

  export type playerUpdateManyMutationInput = {
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type playerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type batter_daily_recordCreateInput = {
    season: string
    date: Date | string
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
    player: playerCreateNestedOneWithoutBatterDailyRecordsInput
    team: teamCreateNestedOneWithoutBatterOppositionRecordsInput
  }

  export type batter_daily_recordUncheckedCreateInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
  }

  export type batter_daily_recordUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
    player?: playerUpdateOneRequiredWithoutBatterDailyRecordsNestedInput
    team?: teamUpdateOneRequiredWithoutBatterOppositionRecordsNestedInput
  }

  export type batter_daily_recordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
  }

  export type batter_daily_recordCreateManyInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
  }

  export type batter_daily_recordUpdateManyMutationInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
  }

  export type batter_daily_recordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
  }

  export type pitcher_daily_recordCreateInput = {
    season: string
    date: Date | string
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
    player: playerCreateNestedOneWithoutPitcherDailyRecordsInput
    team: teamCreateNestedOneWithoutPitcherOppositionRecordsInput
  }

  export type pitcher_daily_recordUncheckedCreateInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
  }

  export type pitcher_daily_recordUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
    player?: playerUpdateOneRequiredWithoutPitcherDailyRecordsNestedInput
    team?: teamUpdateOneRequiredWithoutPitcherOppositionRecordsNestedInput
  }

  export type pitcher_daily_recordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
  }

  export type pitcher_daily_recordCreateManyInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    fkOppositionTeamId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
  }

  export type pitcher_daily_recordUpdateManyMutationInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
  }

  export type pitcher_daily_recordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PlayerListRelationFilter = {
    every?: playerWhereInput
    some?: playerWhereInput
    none?: playerWhereInput
  }

  export type Batter_daily_recordListRelationFilter = {
    every?: batter_daily_recordWhereInput
    some?: batter_daily_recordWhereInput
    none?: batter_daily_recordWhereInput
  }

  export type Pitcher_daily_recordListRelationFilter = {
    every?: pitcher_daily_recordWhereInput
    some?: pitcher_daily_recordWhereInput
    none?: pitcher_daily_recordWhereInput
  }

  export type playerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type batter_daily_recordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pitcher_daily_recordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    win?: SortOrder
    runnerUp?: SortOrder
  }

  export type teamAvgOrderByAggregateInput = {
    id?: SortOrder
    win?: SortOrder
    runnerUp?: SortOrder
  }

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    win?: SortOrder
    runnerUp?: SortOrder
  }

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    win?: SortOrder
    runnerUp?: SortOrder
  }

  export type teamSumOrderByAggregateInput = {
    id?: SortOrder
    win?: SortOrder
    runnerUp?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: teamWhereInput | null
    isNot?: teamWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type playerCountOrderByAggregateInput = {
    id?: SortOrder
    kboId?: SortOrder
    profileImage?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    backNumber?: SortOrder
    school?: SortOrder
    teamId?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
  }

  export type playerAvgOrderByAggregateInput = {
    id?: SortOrder
    kboId?: SortOrder
    teamId?: SortOrder
  }

  export type playerMaxOrderByAggregateInput = {
    id?: SortOrder
    kboId?: SortOrder
    profileImage?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    backNumber?: SortOrder
    school?: SortOrder
    teamId?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
  }

  export type playerMinOrderByAggregateInput = {
    id?: SortOrder
    kboId?: SortOrder
    profileImage?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    backNumber?: SortOrder
    school?: SortOrder
    teamId?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
  }

  export type playerSumOrderByAggregateInput = {
    id?: SortOrder
    kboId?: SortOrder
    teamId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlayerScalarRelationFilter = {
    is?: playerWhereInput
    isNot?: playerWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: teamWhereInput
    isNot?: teamWhereInput
  }

  export type batter_daily_recordCountOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    PA?: SortOrder
    AB?: SortOrder
    R?: SortOrder
    H?: SortOrder
    twoB?: SortOrder
    threeB?: SortOrder
    HR?: SortOrder
    TB?: SortOrder
    RBI?: SortOrder
    SB?: SortOrder
    CS?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    GDP?: SortOrder
  }

  export type batter_daily_recordAvgOrderByAggregateInput = {
    id?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    PA?: SortOrder
    AB?: SortOrder
    R?: SortOrder
    H?: SortOrder
    twoB?: SortOrder
    threeB?: SortOrder
    HR?: SortOrder
    TB?: SortOrder
    RBI?: SortOrder
    SB?: SortOrder
    CS?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    GDP?: SortOrder
  }

  export type batter_daily_recordMaxOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    PA?: SortOrder
    AB?: SortOrder
    R?: SortOrder
    H?: SortOrder
    twoB?: SortOrder
    threeB?: SortOrder
    HR?: SortOrder
    TB?: SortOrder
    RBI?: SortOrder
    SB?: SortOrder
    CS?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    GDP?: SortOrder
  }

  export type batter_daily_recordMinOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    PA?: SortOrder
    AB?: SortOrder
    R?: SortOrder
    H?: SortOrder
    twoB?: SortOrder
    threeB?: SortOrder
    HR?: SortOrder
    TB?: SortOrder
    RBI?: SortOrder
    SB?: SortOrder
    CS?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    GDP?: SortOrder
  }

  export type batter_daily_recordSumOrderByAggregateInput = {
    id?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    PA?: SortOrder
    AB?: SortOrder
    R?: SortOrder
    H?: SortOrder
    twoB?: SortOrder
    threeB?: SortOrder
    HR?: SortOrder
    TB?: SortOrder
    RBI?: SortOrder
    SB?: SortOrder
    CS?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    GDP?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type pitcher_daily_recordCountOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    CG?: SortOrder
    SHO?: SortOrder
    W?: SortOrder
    L?: SortOrder
    SV?: SortOrder
    HLD?: SortOrder
    TBF?: SortOrder
    IP?: SortOrder
    H?: SortOrder
    HR?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    R?: SortOrder
    ER?: SortOrder
  }

  export type pitcher_daily_recordAvgOrderByAggregateInput = {
    id?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    CG?: SortOrder
    SHO?: SortOrder
    W?: SortOrder
    L?: SortOrder
    SV?: SortOrder
    HLD?: SortOrder
    TBF?: SortOrder
    H?: SortOrder
    HR?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    R?: SortOrder
    ER?: SortOrder
  }

  export type pitcher_daily_recordMaxOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    CG?: SortOrder
    SHO?: SortOrder
    W?: SortOrder
    L?: SortOrder
    SV?: SortOrder
    HLD?: SortOrder
    TBF?: SortOrder
    IP?: SortOrder
    H?: SortOrder
    HR?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    R?: SortOrder
    ER?: SortOrder
  }

  export type pitcher_daily_recordMinOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    date?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    CG?: SortOrder
    SHO?: SortOrder
    W?: SortOrder
    L?: SortOrder
    SV?: SortOrder
    HLD?: SortOrder
    TBF?: SortOrder
    IP?: SortOrder
    H?: SortOrder
    HR?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    R?: SortOrder
    ER?: SortOrder
  }

  export type pitcher_daily_recordSumOrderByAggregateInput = {
    id?: SortOrder
    fkPlayerId?: SortOrder
    fkOppositionTeamId?: SortOrder
    G?: SortOrder
    CG?: SortOrder
    SHO?: SortOrder
    W?: SortOrder
    L?: SortOrder
    SV?: SortOrder
    HLD?: SortOrder
    TBF?: SortOrder
    H?: SortOrder
    HR?: SortOrder
    BB?: SortOrder
    HBP?: SortOrder
    SO?: SortOrder
    R?: SortOrder
    ER?: SortOrder
  }

  export type playerCreateNestedManyWithoutTeamInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
  }

  export type batter_daily_recordCreateNestedManyWithoutTeamInput = {
    create?: XOR<batter_daily_recordCreateWithoutTeamInput, batter_daily_recordUncheckedCreateWithoutTeamInput> | batter_daily_recordCreateWithoutTeamInput[] | batter_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutTeamInput | batter_daily_recordCreateOrConnectWithoutTeamInput[]
    createMany?: batter_daily_recordCreateManyTeamInputEnvelope
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
  }

  export type pitcher_daily_recordCreateNestedManyWithoutTeamInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutTeamInput, pitcher_daily_recordUncheckedCreateWithoutTeamInput> | pitcher_daily_recordCreateWithoutTeamInput[] | pitcher_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutTeamInput | pitcher_daily_recordCreateOrConnectWithoutTeamInput[]
    createMany?: pitcher_daily_recordCreateManyTeamInputEnvelope
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
  }

  export type playerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
  }

  export type batter_daily_recordUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<batter_daily_recordCreateWithoutTeamInput, batter_daily_recordUncheckedCreateWithoutTeamInput> | batter_daily_recordCreateWithoutTeamInput[] | batter_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutTeamInput | batter_daily_recordCreateOrConnectWithoutTeamInput[]
    createMany?: batter_daily_recordCreateManyTeamInputEnvelope
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
  }

  export type pitcher_daily_recordUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutTeamInput, pitcher_daily_recordUncheckedCreateWithoutTeamInput> | pitcher_daily_recordCreateWithoutTeamInput[] | pitcher_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutTeamInput | pitcher_daily_recordCreateOrConnectWithoutTeamInput[]
    createMany?: pitcher_daily_recordCreateManyTeamInputEnvelope
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type playerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    upsert?: playerUpsertWithWhereUniqueWithoutTeamInput | playerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    set?: playerWhereUniqueInput | playerWhereUniqueInput[]
    disconnect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    delete?: playerWhereUniqueInput | playerWhereUniqueInput[]
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    update?: playerUpdateWithWhereUniqueWithoutTeamInput | playerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: playerUpdateManyWithWhereWithoutTeamInput | playerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: playerScalarWhereInput | playerScalarWhereInput[]
  }

  export type batter_daily_recordUpdateManyWithoutTeamNestedInput = {
    create?: XOR<batter_daily_recordCreateWithoutTeamInput, batter_daily_recordUncheckedCreateWithoutTeamInput> | batter_daily_recordCreateWithoutTeamInput[] | batter_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutTeamInput | batter_daily_recordCreateOrConnectWithoutTeamInput[]
    upsert?: batter_daily_recordUpsertWithWhereUniqueWithoutTeamInput | batter_daily_recordUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: batter_daily_recordCreateManyTeamInputEnvelope
    set?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    disconnect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    delete?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    update?: batter_daily_recordUpdateWithWhereUniqueWithoutTeamInput | batter_daily_recordUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: batter_daily_recordUpdateManyWithWhereWithoutTeamInput | batter_daily_recordUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: batter_daily_recordScalarWhereInput | batter_daily_recordScalarWhereInput[]
  }

  export type pitcher_daily_recordUpdateManyWithoutTeamNestedInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutTeamInput, pitcher_daily_recordUncheckedCreateWithoutTeamInput> | pitcher_daily_recordCreateWithoutTeamInput[] | pitcher_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutTeamInput | pitcher_daily_recordCreateOrConnectWithoutTeamInput[]
    upsert?: pitcher_daily_recordUpsertWithWhereUniqueWithoutTeamInput | pitcher_daily_recordUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: pitcher_daily_recordCreateManyTeamInputEnvelope
    set?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    disconnect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    delete?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    update?: pitcher_daily_recordUpdateWithWhereUniqueWithoutTeamInput | pitcher_daily_recordUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: pitcher_daily_recordUpdateManyWithWhereWithoutTeamInput | pitcher_daily_recordUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: pitcher_daily_recordScalarWhereInput | pitcher_daily_recordScalarWhereInput[]
  }

  export type playerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput> | playerCreateWithoutTeamInput[] | playerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: playerCreateOrConnectWithoutTeamInput | playerCreateOrConnectWithoutTeamInput[]
    upsert?: playerUpsertWithWhereUniqueWithoutTeamInput | playerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: playerCreateManyTeamInputEnvelope
    set?: playerWhereUniqueInput | playerWhereUniqueInput[]
    disconnect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    delete?: playerWhereUniqueInput | playerWhereUniqueInput[]
    connect?: playerWhereUniqueInput | playerWhereUniqueInput[]
    update?: playerUpdateWithWhereUniqueWithoutTeamInput | playerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: playerUpdateManyWithWhereWithoutTeamInput | playerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: playerScalarWhereInput | playerScalarWhereInput[]
  }

  export type batter_daily_recordUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<batter_daily_recordCreateWithoutTeamInput, batter_daily_recordUncheckedCreateWithoutTeamInput> | batter_daily_recordCreateWithoutTeamInput[] | batter_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutTeamInput | batter_daily_recordCreateOrConnectWithoutTeamInput[]
    upsert?: batter_daily_recordUpsertWithWhereUniqueWithoutTeamInput | batter_daily_recordUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: batter_daily_recordCreateManyTeamInputEnvelope
    set?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    disconnect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    delete?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    update?: batter_daily_recordUpdateWithWhereUniqueWithoutTeamInput | batter_daily_recordUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: batter_daily_recordUpdateManyWithWhereWithoutTeamInput | batter_daily_recordUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: batter_daily_recordScalarWhereInput | batter_daily_recordScalarWhereInput[]
  }

  export type pitcher_daily_recordUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutTeamInput, pitcher_daily_recordUncheckedCreateWithoutTeamInput> | pitcher_daily_recordCreateWithoutTeamInput[] | pitcher_daily_recordUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutTeamInput | pitcher_daily_recordCreateOrConnectWithoutTeamInput[]
    upsert?: pitcher_daily_recordUpsertWithWhereUniqueWithoutTeamInput | pitcher_daily_recordUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: pitcher_daily_recordCreateManyTeamInputEnvelope
    set?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    disconnect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    delete?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    update?: pitcher_daily_recordUpdateWithWhereUniqueWithoutTeamInput | pitcher_daily_recordUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: pitcher_daily_recordUpdateManyWithWhereWithoutTeamInput | pitcher_daily_recordUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: pitcher_daily_recordScalarWhereInput | pitcher_daily_recordScalarWhereInput[]
  }

  export type teamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: teamCreateOrConnectWithoutPlayersInput
    connect?: teamWhereUniqueInput
  }

  export type batter_daily_recordCreateNestedManyWithoutPlayerInput = {
    create?: XOR<batter_daily_recordCreateWithoutPlayerInput, batter_daily_recordUncheckedCreateWithoutPlayerInput> | batter_daily_recordCreateWithoutPlayerInput[] | batter_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutPlayerInput | batter_daily_recordCreateOrConnectWithoutPlayerInput[]
    createMany?: batter_daily_recordCreateManyPlayerInputEnvelope
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
  }

  export type pitcher_daily_recordCreateNestedManyWithoutPlayerInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutPlayerInput, pitcher_daily_recordUncheckedCreateWithoutPlayerInput> | pitcher_daily_recordCreateWithoutPlayerInput[] | pitcher_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutPlayerInput | pitcher_daily_recordCreateOrConnectWithoutPlayerInput[]
    createMany?: pitcher_daily_recordCreateManyPlayerInputEnvelope
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
  }

  export type batter_daily_recordUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<batter_daily_recordCreateWithoutPlayerInput, batter_daily_recordUncheckedCreateWithoutPlayerInput> | batter_daily_recordCreateWithoutPlayerInput[] | batter_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutPlayerInput | batter_daily_recordCreateOrConnectWithoutPlayerInput[]
    createMany?: batter_daily_recordCreateManyPlayerInputEnvelope
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
  }

  export type pitcher_daily_recordUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutPlayerInput, pitcher_daily_recordUncheckedCreateWithoutPlayerInput> | pitcher_daily_recordCreateWithoutPlayerInput[] | pitcher_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutPlayerInput | pitcher_daily_recordCreateOrConnectWithoutPlayerInput[]
    createMany?: pitcher_daily_recordCreateManyPlayerInputEnvelope
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type teamUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: teamCreateOrConnectWithoutPlayersInput
    upsert?: teamUpsertWithoutPlayersInput
    disconnect?: teamWhereInput | boolean
    delete?: teamWhereInput | boolean
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutPlayersInput, teamUpdateWithoutPlayersInput>, teamUncheckedUpdateWithoutPlayersInput>
  }

  export type batter_daily_recordUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<batter_daily_recordCreateWithoutPlayerInput, batter_daily_recordUncheckedCreateWithoutPlayerInput> | batter_daily_recordCreateWithoutPlayerInput[] | batter_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutPlayerInput | batter_daily_recordCreateOrConnectWithoutPlayerInput[]
    upsert?: batter_daily_recordUpsertWithWhereUniqueWithoutPlayerInput | batter_daily_recordUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: batter_daily_recordCreateManyPlayerInputEnvelope
    set?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    disconnect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    delete?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    update?: batter_daily_recordUpdateWithWhereUniqueWithoutPlayerInput | batter_daily_recordUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: batter_daily_recordUpdateManyWithWhereWithoutPlayerInput | batter_daily_recordUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: batter_daily_recordScalarWhereInput | batter_daily_recordScalarWhereInput[]
  }

  export type pitcher_daily_recordUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutPlayerInput, pitcher_daily_recordUncheckedCreateWithoutPlayerInput> | pitcher_daily_recordCreateWithoutPlayerInput[] | pitcher_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutPlayerInput | pitcher_daily_recordCreateOrConnectWithoutPlayerInput[]
    upsert?: pitcher_daily_recordUpsertWithWhereUniqueWithoutPlayerInput | pitcher_daily_recordUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: pitcher_daily_recordCreateManyPlayerInputEnvelope
    set?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    disconnect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    delete?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    update?: pitcher_daily_recordUpdateWithWhereUniqueWithoutPlayerInput | pitcher_daily_recordUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: pitcher_daily_recordUpdateManyWithWhereWithoutPlayerInput | pitcher_daily_recordUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: pitcher_daily_recordScalarWhereInput | pitcher_daily_recordScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type batter_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<batter_daily_recordCreateWithoutPlayerInput, batter_daily_recordUncheckedCreateWithoutPlayerInput> | batter_daily_recordCreateWithoutPlayerInput[] | batter_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: batter_daily_recordCreateOrConnectWithoutPlayerInput | batter_daily_recordCreateOrConnectWithoutPlayerInput[]
    upsert?: batter_daily_recordUpsertWithWhereUniqueWithoutPlayerInput | batter_daily_recordUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: batter_daily_recordCreateManyPlayerInputEnvelope
    set?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    disconnect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    delete?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    connect?: batter_daily_recordWhereUniqueInput | batter_daily_recordWhereUniqueInput[]
    update?: batter_daily_recordUpdateWithWhereUniqueWithoutPlayerInput | batter_daily_recordUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: batter_daily_recordUpdateManyWithWhereWithoutPlayerInput | batter_daily_recordUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: batter_daily_recordScalarWhereInput | batter_daily_recordScalarWhereInput[]
  }

  export type pitcher_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<pitcher_daily_recordCreateWithoutPlayerInput, pitcher_daily_recordUncheckedCreateWithoutPlayerInput> | pitcher_daily_recordCreateWithoutPlayerInput[] | pitcher_daily_recordUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: pitcher_daily_recordCreateOrConnectWithoutPlayerInput | pitcher_daily_recordCreateOrConnectWithoutPlayerInput[]
    upsert?: pitcher_daily_recordUpsertWithWhereUniqueWithoutPlayerInput | pitcher_daily_recordUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: pitcher_daily_recordCreateManyPlayerInputEnvelope
    set?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    disconnect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    delete?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    connect?: pitcher_daily_recordWhereUniqueInput | pitcher_daily_recordWhereUniqueInput[]
    update?: pitcher_daily_recordUpdateWithWhereUniqueWithoutPlayerInput | pitcher_daily_recordUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: pitcher_daily_recordUpdateManyWithWhereWithoutPlayerInput | pitcher_daily_recordUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: pitcher_daily_recordScalarWhereInput | pitcher_daily_recordScalarWhereInput[]
  }

  export type playerCreateNestedOneWithoutBatterDailyRecordsInput = {
    create?: XOR<playerCreateWithoutBatterDailyRecordsInput, playerUncheckedCreateWithoutBatterDailyRecordsInput>
    connectOrCreate?: playerCreateOrConnectWithoutBatterDailyRecordsInput
    connect?: playerWhereUniqueInput
  }

  export type teamCreateNestedOneWithoutBatterOppositionRecordsInput = {
    create?: XOR<teamCreateWithoutBatterOppositionRecordsInput, teamUncheckedCreateWithoutBatterOppositionRecordsInput>
    connectOrCreate?: teamCreateOrConnectWithoutBatterOppositionRecordsInput
    connect?: teamWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type playerUpdateOneRequiredWithoutBatterDailyRecordsNestedInput = {
    create?: XOR<playerCreateWithoutBatterDailyRecordsInput, playerUncheckedCreateWithoutBatterDailyRecordsInput>
    connectOrCreate?: playerCreateOrConnectWithoutBatterDailyRecordsInput
    upsert?: playerUpsertWithoutBatterDailyRecordsInput
    connect?: playerWhereUniqueInput
    update?: XOR<XOR<playerUpdateToOneWithWhereWithoutBatterDailyRecordsInput, playerUpdateWithoutBatterDailyRecordsInput>, playerUncheckedUpdateWithoutBatterDailyRecordsInput>
  }

  export type teamUpdateOneRequiredWithoutBatterOppositionRecordsNestedInput = {
    create?: XOR<teamCreateWithoutBatterOppositionRecordsInput, teamUncheckedCreateWithoutBatterOppositionRecordsInput>
    connectOrCreate?: teamCreateOrConnectWithoutBatterOppositionRecordsInput
    upsert?: teamUpsertWithoutBatterOppositionRecordsInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutBatterOppositionRecordsInput, teamUpdateWithoutBatterOppositionRecordsInput>, teamUncheckedUpdateWithoutBatterOppositionRecordsInput>
  }

  export type playerCreateNestedOneWithoutPitcherDailyRecordsInput = {
    create?: XOR<playerCreateWithoutPitcherDailyRecordsInput, playerUncheckedCreateWithoutPitcherDailyRecordsInput>
    connectOrCreate?: playerCreateOrConnectWithoutPitcherDailyRecordsInput
    connect?: playerWhereUniqueInput
  }

  export type teamCreateNestedOneWithoutPitcherOppositionRecordsInput = {
    create?: XOR<teamCreateWithoutPitcherOppositionRecordsInput, teamUncheckedCreateWithoutPitcherOppositionRecordsInput>
    connectOrCreate?: teamCreateOrConnectWithoutPitcherOppositionRecordsInput
    connect?: teamWhereUniqueInput
  }

  export type playerUpdateOneRequiredWithoutPitcherDailyRecordsNestedInput = {
    create?: XOR<playerCreateWithoutPitcherDailyRecordsInput, playerUncheckedCreateWithoutPitcherDailyRecordsInput>
    connectOrCreate?: playerCreateOrConnectWithoutPitcherDailyRecordsInput
    upsert?: playerUpsertWithoutPitcherDailyRecordsInput
    connect?: playerWhereUniqueInput
    update?: XOR<XOR<playerUpdateToOneWithWhereWithoutPitcherDailyRecordsInput, playerUpdateWithoutPitcherDailyRecordsInput>, playerUncheckedUpdateWithoutPitcherDailyRecordsInput>
  }

  export type teamUpdateOneRequiredWithoutPitcherOppositionRecordsNestedInput = {
    create?: XOR<teamCreateWithoutPitcherOppositionRecordsInput, teamUncheckedCreateWithoutPitcherOppositionRecordsInput>
    connectOrCreate?: teamCreateOrConnectWithoutPitcherOppositionRecordsInput
    upsert?: teamUpsertWithoutPitcherOppositionRecordsInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutPitcherOppositionRecordsInput, teamUpdateWithoutPitcherOppositionRecordsInput>, teamUncheckedUpdateWithoutPitcherOppositionRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type playerCreateWithoutTeamInput = {
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    position?: string | null
    isActive?: boolean | null
    batterDailyRecords?: batter_daily_recordCreateNestedManyWithoutPlayerInput
    pitcherDailyRecords?: pitcher_daily_recordCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutTeamInput = {
    id?: number
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    position?: string | null
    isActive?: boolean | null
    batterDailyRecords?: batter_daily_recordUncheckedCreateNestedManyWithoutPlayerInput
    pitcherDailyRecords?: pitcher_daily_recordUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerCreateOrConnectWithoutTeamInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput>
  }

  export type playerCreateManyTeamInputEnvelope = {
    data: playerCreateManyTeamInput | playerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type batter_daily_recordCreateWithoutTeamInput = {
    season: string
    date: Date | string
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
    player: playerCreateNestedOneWithoutBatterDailyRecordsInput
  }

  export type batter_daily_recordUncheckedCreateWithoutTeamInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
  }

  export type batter_daily_recordCreateOrConnectWithoutTeamInput = {
    where: batter_daily_recordWhereUniqueInput
    create: XOR<batter_daily_recordCreateWithoutTeamInput, batter_daily_recordUncheckedCreateWithoutTeamInput>
  }

  export type batter_daily_recordCreateManyTeamInputEnvelope = {
    data: batter_daily_recordCreateManyTeamInput | batter_daily_recordCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type pitcher_daily_recordCreateWithoutTeamInput = {
    season: string
    date: Date | string
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
    player: playerCreateNestedOneWithoutPitcherDailyRecordsInput
  }

  export type pitcher_daily_recordUncheckedCreateWithoutTeamInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
  }

  export type pitcher_daily_recordCreateOrConnectWithoutTeamInput = {
    where: pitcher_daily_recordWhereUniqueInput
    create: XOR<pitcher_daily_recordCreateWithoutTeamInput, pitcher_daily_recordUncheckedCreateWithoutTeamInput>
  }

  export type pitcher_daily_recordCreateManyTeamInputEnvelope = {
    data: pitcher_daily_recordCreateManyTeamInput | pitcher_daily_recordCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type playerUpsertWithWhereUniqueWithoutTeamInput = {
    where: playerWhereUniqueInput
    update: XOR<playerUpdateWithoutTeamInput, playerUncheckedUpdateWithoutTeamInput>
    create: XOR<playerCreateWithoutTeamInput, playerUncheckedCreateWithoutTeamInput>
  }

  export type playerUpdateWithWhereUniqueWithoutTeamInput = {
    where: playerWhereUniqueInput
    data: XOR<playerUpdateWithoutTeamInput, playerUncheckedUpdateWithoutTeamInput>
  }

  export type playerUpdateManyWithWhereWithoutTeamInput = {
    where: playerScalarWhereInput
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyWithoutTeamInput>
  }

  export type playerScalarWhereInput = {
    AND?: playerScalarWhereInput | playerScalarWhereInput[]
    OR?: playerScalarWhereInput[]
    NOT?: playerScalarWhereInput | playerScalarWhereInput[]
    id?: IntFilter<"player"> | number
    kboId?: IntFilter<"player"> | number
    profileImage?: StringNullableFilter<"player"> | string | null
    name?: StringNullableFilter<"player"> | string | null
    birth?: DateTimeNullableFilter<"player"> | Date | string | null
    backNumber?: StringNullableFilter<"player"> | string | null
    school?: StringNullableFilter<"player"> | string | null
    teamId?: IntNullableFilter<"player"> | number | null
    position?: StringNullableFilter<"player"> | string | null
    isActive?: BoolNullableFilter<"player"> | boolean | null
  }

  export type batter_daily_recordUpsertWithWhereUniqueWithoutTeamInput = {
    where: batter_daily_recordWhereUniqueInput
    update: XOR<batter_daily_recordUpdateWithoutTeamInput, batter_daily_recordUncheckedUpdateWithoutTeamInput>
    create: XOR<batter_daily_recordCreateWithoutTeamInput, batter_daily_recordUncheckedCreateWithoutTeamInput>
  }

  export type batter_daily_recordUpdateWithWhereUniqueWithoutTeamInput = {
    where: batter_daily_recordWhereUniqueInput
    data: XOR<batter_daily_recordUpdateWithoutTeamInput, batter_daily_recordUncheckedUpdateWithoutTeamInput>
  }

  export type batter_daily_recordUpdateManyWithWhereWithoutTeamInput = {
    where: batter_daily_recordScalarWhereInput
    data: XOR<batter_daily_recordUpdateManyMutationInput, batter_daily_recordUncheckedUpdateManyWithoutTeamInput>
  }

  export type batter_daily_recordScalarWhereInput = {
    AND?: batter_daily_recordScalarWhereInput | batter_daily_recordScalarWhereInput[]
    OR?: batter_daily_recordScalarWhereInput[]
    NOT?: batter_daily_recordScalarWhereInput | batter_daily_recordScalarWhereInput[]
    id?: IntFilter<"batter_daily_record"> | number
    season?: StringFilter<"batter_daily_record"> | string
    date?: DateTimeFilter<"batter_daily_record"> | Date | string
    fkPlayerId?: IntFilter<"batter_daily_record"> | number
    fkOppositionTeamId?: IntFilter<"batter_daily_record"> | number
    G?: IntFilter<"batter_daily_record"> | number
    PA?: IntFilter<"batter_daily_record"> | number
    AB?: IntFilter<"batter_daily_record"> | number
    R?: IntFilter<"batter_daily_record"> | number
    H?: IntFilter<"batter_daily_record"> | number
    twoB?: IntFilter<"batter_daily_record"> | number
    threeB?: IntFilter<"batter_daily_record"> | number
    HR?: IntFilter<"batter_daily_record"> | number
    TB?: IntFilter<"batter_daily_record"> | number
    RBI?: IntFilter<"batter_daily_record"> | number
    SB?: IntFilter<"batter_daily_record"> | number
    CS?: IntFilter<"batter_daily_record"> | number
    BB?: IntFilter<"batter_daily_record"> | number
    HBP?: IntFilter<"batter_daily_record"> | number
    SO?: IntFilter<"batter_daily_record"> | number
    GDP?: IntFilter<"batter_daily_record"> | number
  }

  export type pitcher_daily_recordUpsertWithWhereUniqueWithoutTeamInput = {
    where: pitcher_daily_recordWhereUniqueInput
    update: XOR<pitcher_daily_recordUpdateWithoutTeamInput, pitcher_daily_recordUncheckedUpdateWithoutTeamInput>
    create: XOR<pitcher_daily_recordCreateWithoutTeamInput, pitcher_daily_recordUncheckedCreateWithoutTeamInput>
  }

  export type pitcher_daily_recordUpdateWithWhereUniqueWithoutTeamInput = {
    where: pitcher_daily_recordWhereUniqueInput
    data: XOR<pitcher_daily_recordUpdateWithoutTeamInput, pitcher_daily_recordUncheckedUpdateWithoutTeamInput>
  }

  export type pitcher_daily_recordUpdateManyWithWhereWithoutTeamInput = {
    where: pitcher_daily_recordScalarWhereInput
    data: XOR<pitcher_daily_recordUpdateManyMutationInput, pitcher_daily_recordUncheckedUpdateManyWithoutTeamInput>
  }

  export type pitcher_daily_recordScalarWhereInput = {
    AND?: pitcher_daily_recordScalarWhereInput | pitcher_daily_recordScalarWhereInput[]
    OR?: pitcher_daily_recordScalarWhereInput[]
    NOT?: pitcher_daily_recordScalarWhereInput | pitcher_daily_recordScalarWhereInput[]
    id?: IntFilter<"pitcher_daily_record"> | number
    season?: StringFilter<"pitcher_daily_record"> | string
    date?: DateTimeFilter<"pitcher_daily_record"> | Date | string
    fkPlayerId?: IntFilter<"pitcher_daily_record"> | number
    fkOppositionTeamId?: IntFilter<"pitcher_daily_record"> | number
    G?: IntFilter<"pitcher_daily_record"> | number
    CG?: IntFilter<"pitcher_daily_record"> | number
    SHO?: IntFilter<"pitcher_daily_record"> | number
    W?: IntFilter<"pitcher_daily_record"> | number
    L?: IntFilter<"pitcher_daily_record"> | number
    SV?: IntFilter<"pitcher_daily_record"> | number
    HLD?: IntFilter<"pitcher_daily_record"> | number
    TBF?: IntFilter<"pitcher_daily_record"> | number
    IP?: StringFilter<"pitcher_daily_record"> | string
    H?: IntFilter<"pitcher_daily_record"> | number
    HR?: IntFilter<"pitcher_daily_record"> | number
    BB?: IntFilter<"pitcher_daily_record"> | number
    HBP?: IntFilter<"pitcher_daily_record"> | number
    SO?: IntFilter<"pitcher_daily_record"> | number
    R?: IntFilter<"pitcher_daily_record"> | number
    ER?: IntFilter<"pitcher_daily_record"> | number
  }

  export type teamCreateWithoutPlayersInput = {
    symbol: string
    name: string
    win: number
    runnerUp: number
    batterOppositionRecords?: batter_daily_recordCreateNestedManyWithoutTeamInput
    pitcherOppositionRecords?: pitcher_daily_recordCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutPlayersInput = {
    id?: number
    symbol: string
    name: string
    win: number
    runnerUp: number
    batterOppositionRecords?: batter_daily_recordUncheckedCreateNestedManyWithoutTeamInput
    pitcherOppositionRecords?: pitcher_daily_recordUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutPlayersInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
  }

  export type batter_daily_recordCreateWithoutPlayerInput = {
    season: string
    date: Date | string
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
    team: teamCreateNestedOneWithoutBatterOppositionRecordsInput
  }

  export type batter_daily_recordUncheckedCreateWithoutPlayerInput = {
    id?: number
    season: string
    date: Date | string
    fkOppositionTeamId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
  }

  export type batter_daily_recordCreateOrConnectWithoutPlayerInput = {
    where: batter_daily_recordWhereUniqueInput
    create: XOR<batter_daily_recordCreateWithoutPlayerInput, batter_daily_recordUncheckedCreateWithoutPlayerInput>
  }

  export type batter_daily_recordCreateManyPlayerInputEnvelope = {
    data: batter_daily_recordCreateManyPlayerInput | batter_daily_recordCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type pitcher_daily_recordCreateWithoutPlayerInput = {
    season: string
    date: Date | string
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
    team: teamCreateNestedOneWithoutPitcherOppositionRecordsInput
  }

  export type pitcher_daily_recordUncheckedCreateWithoutPlayerInput = {
    id?: number
    season: string
    date: Date | string
    fkOppositionTeamId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
  }

  export type pitcher_daily_recordCreateOrConnectWithoutPlayerInput = {
    where: pitcher_daily_recordWhereUniqueInput
    create: XOR<pitcher_daily_recordCreateWithoutPlayerInput, pitcher_daily_recordUncheckedCreateWithoutPlayerInput>
  }

  export type pitcher_daily_recordCreateManyPlayerInputEnvelope = {
    data: pitcher_daily_recordCreateManyPlayerInput | pitcher_daily_recordCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type teamUpsertWithoutPlayersInput = {
    update: XOR<teamUpdateWithoutPlayersInput, teamUncheckedUpdateWithoutPlayersInput>
    create: XOR<teamCreateWithoutPlayersInput, teamUncheckedCreateWithoutPlayersInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutPlayersInput, teamUncheckedUpdateWithoutPlayersInput>
  }

  export type teamUpdateWithoutPlayersInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    batterOppositionRecords?: batter_daily_recordUpdateManyWithoutTeamNestedInput
    pitcherOppositionRecords?: pitcher_daily_recordUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    batterOppositionRecords?: batter_daily_recordUncheckedUpdateManyWithoutTeamNestedInput
    pitcherOppositionRecords?: pitcher_daily_recordUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type batter_daily_recordUpsertWithWhereUniqueWithoutPlayerInput = {
    where: batter_daily_recordWhereUniqueInput
    update: XOR<batter_daily_recordUpdateWithoutPlayerInput, batter_daily_recordUncheckedUpdateWithoutPlayerInput>
    create: XOR<batter_daily_recordCreateWithoutPlayerInput, batter_daily_recordUncheckedCreateWithoutPlayerInput>
  }

  export type batter_daily_recordUpdateWithWhereUniqueWithoutPlayerInput = {
    where: batter_daily_recordWhereUniqueInput
    data: XOR<batter_daily_recordUpdateWithoutPlayerInput, batter_daily_recordUncheckedUpdateWithoutPlayerInput>
  }

  export type batter_daily_recordUpdateManyWithWhereWithoutPlayerInput = {
    where: batter_daily_recordScalarWhereInput
    data: XOR<batter_daily_recordUpdateManyMutationInput, batter_daily_recordUncheckedUpdateManyWithoutPlayerInput>
  }

  export type pitcher_daily_recordUpsertWithWhereUniqueWithoutPlayerInput = {
    where: pitcher_daily_recordWhereUniqueInput
    update: XOR<pitcher_daily_recordUpdateWithoutPlayerInput, pitcher_daily_recordUncheckedUpdateWithoutPlayerInput>
    create: XOR<pitcher_daily_recordCreateWithoutPlayerInput, pitcher_daily_recordUncheckedCreateWithoutPlayerInput>
  }

  export type pitcher_daily_recordUpdateWithWhereUniqueWithoutPlayerInput = {
    where: pitcher_daily_recordWhereUniqueInput
    data: XOR<pitcher_daily_recordUpdateWithoutPlayerInput, pitcher_daily_recordUncheckedUpdateWithoutPlayerInput>
  }

  export type pitcher_daily_recordUpdateManyWithWhereWithoutPlayerInput = {
    where: pitcher_daily_recordScalarWhereInput
    data: XOR<pitcher_daily_recordUpdateManyMutationInput, pitcher_daily_recordUncheckedUpdateManyWithoutPlayerInput>
  }

  export type playerCreateWithoutBatterDailyRecordsInput = {
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    position?: string | null
    isActive?: boolean | null
    team?: teamCreateNestedOneWithoutPlayersInput
    pitcherDailyRecords?: pitcher_daily_recordCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutBatterDailyRecordsInput = {
    id?: number
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    teamId?: number | null
    position?: string | null
    isActive?: boolean | null
    pitcherDailyRecords?: pitcher_daily_recordUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerCreateOrConnectWithoutBatterDailyRecordsInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutBatterDailyRecordsInput, playerUncheckedCreateWithoutBatterDailyRecordsInput>
  }

  export type teamCreateWithoutBatterOppositionRecordsInput = {
    symbol: string
    name: string
    win: number
    runnerUp: number
    players?: playerCreateNestedManyWithoutTeamInput
    pitcherOppositionRecords?: pitcher_daily_recordCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutBatterOppositionRecordsInput = {
    id?: number
    symbol: string
    name: string
    win: number
    runnerUp: number
    players?: playerUncheckedCreateNestedManyWithoutTeamInput
    pitcherOppositionRecords?: pitcher_daily_recordUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutBatterOppositionRecordsInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutBatterOppositionRecordsInput, teamUncheckedCreateWithoutBatterOppositionRecordsInput>
  }

  export type playerUpsertWithoutBatterDailyRecordsInput = {
    update: XOR<playerUpdateWithoutBatterDailyRecordsInput, playerUncheckedUpdateWithoutBatterDailyRecordsInput>
    create: XOR<playerCreateWithoutBatterDailyRecordsInput, playerUncheckedCreateWithoutBatterDailyRecordsInput>
    where?: playerWhereInput
  }

  export type playerUpdateToOneWithWhereWithoutBatterDailyRecordsInput = {
    where?: playerWhereInput
    data: XOR<playerUpdateWithoutBatterDailyRecordsInput, playerUncheckedUpdateWithoutBatterDailyRecordsInput>
  }

  export type playerUpdateWithoutBatterDailyRecordsInput = {
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team?: teamUpdateOneWithoutPlayersNestedInput
    pitcherDailyRecords?: pitcher_daily_recordUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutBatterDailyRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pitcherDailyRecords?: pitcher_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type teamUpsertWithoutBatterOppositionRecordsInput = {
    update: XOR<teamUpdateWithoutBatterOppositionRecordsInput, teamUncheckedUpdateWithoutBatterOppositionRecordsInput>
    create: XOR<teamCreateWithoutBatterOppositionRecordsInput, teamUncheckedCreateWithoutBatterOppositionRecordsInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutBatterOppositionRecordsInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutBatterOppositionRecordsInput, teamUncheckedUpdateWithoutBatterOppositionRecordsInput>
  }

  export type teamUpdateWithoutBatterOppositionRecordsInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    players?: playerUpdateManyWithoutTeamNestedInput
    pitcherOppositionRecords?: pitcher_daily_recordUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutBatterOppositionRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    players?: playerUncheckedUpdateManyWithoutTeamNestedInput
    pitcherOppositionRecords?: pitcher_daily_recordUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type playerCreateWithoutPitcherDailyRecordsInput = {
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    position?: string | null
    isActive?: boolean | null
    team?: teamCreateNestedOneWithoutPlayersInput
    batterDailyRecords?: batter_daily_recordCreateNestedManyWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutPitcherDailyRecordsInput = {
    id?: number
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    teamId?: number | null
    position?: string | null
    isActive?: boolean | null
    batterDailyRecords?: batter_daily_recordUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type playerCreateOrConnectWithoutPitcherDailyRecordsInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutPitcherDailyRecordsInput, playerUncheckedCreateWithoutPitcherDailyRecordsInput>
  }

  export type teamCreateWithoutPitcherOppositionRecordsInput = {
    symbol: string
    name: string
    win: number
    runnerUp: number
    players?: playerCreateNestedManyWithoutTeamInput
    batterOppositionRecords?: batter_daily_recordCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutPitcherOppositionRecordsInput = {
    id?: number
    symbol: string
    name: string
    win: number
    runnerUp: number
    players?: playerUncheckedCreateNestedManyWithoutTeamInput
    batterOppositionRecords?: batter_daily_recordUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutPitcherOppositionRecordsInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutPitcherOppositionRecordsInput, teamUncheckedCreateWithoutPitcherOppositionRecordsInput>
  }

  export type playerUpsertWithoutPitcherDailyRecordsInput = {
    update: XOR<playerUpdateWithoutPitcherDailyRecordsInput, playerUncheckedUpdateWithoutPitcherDailyRecordsInput>
    create: XOR<playerCreateWithoutPitcherDailyRecordsInput, playerUncheckedCreateWithoutPitcherDailyRecordsInput>
    where?: playerWhereInput
  }

  export type playerUpdateToOneWithWhereWithoutPitcherDailyRecordsInput = {
    where?: playerWhereInput
    data: XOR<playerUpdateWithoutPitcherDailyRecordsInput, playerUncheckedUpdateWithoutPitcherDailyRecordsInput>
  }

  export type playerUpdateWithoutPitcherDailyRecordsInput = {
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team?: teamUpdateOneWithoutPlayersNestedInput
    batterDailyRecords?: batter_daily_recordUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutPitcherDailyRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    batterDailyRecords?: batter_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type teamUpsertWithoutPitcherOppositionRecordsInput = {
    update: XOR<teamUpdateWithoutPitcherOppositionRecordsInput, teamUncheckedUpdateWithoutPitcherOppositionRecordsInput>
    create: XOR<teamCreateWithoutPitcherOppositionRecordsInput, teamUncheckedCreateWithoutPitcherOppositionRecordsInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutPitcherOppositionRecordsInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutPitcherOppositionRecordsInput, teamUncheckedUpdateWithoutPitcherOppositionRecordsInput>
  }

  export type teamUpdateWithoutPitcherOppositionRecordsInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    players?: playerUpdateManyWithoutTeamNestedInput
    batterOppositionRecords?: batter_daily_recordUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutPitcherOppositionRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    win?: IntFieldUpdateOperationsInput | number
    runnerUp?: IntFieldUpdateOperationsInput | number
    players?: playerUncheckedUpdateManyWithoutTeamNestedInput
    batterOppositionRecords?: batter_daily_recordUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type playerCreateManyTeamInput = {
    id?: number
    kboId: number
    profileImage?: string | null
    name?: string | null
    birth?: Date | string | null
    backNumber?: string | null
    school?: string | null
    position?: string | null
    isActive?: boolean | null
  }

  export type batter_daily_recordCreateManyTeamInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
  }

  export type pitcher_daily_recordCreateManyTeamInput = {
    id?: number
    season: string
    date: Date | string
    fkPlayerId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
  }

  export type playerUpdateWithoutTeamInput = {
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    batterDailyRecords?: batter_daily_recordUpdateManyWithoutPlayerNestedInput
    pitcherDailyRecords?: pitcher_daily_recordUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    batterDailyRecords?: batter_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput
    pitcherDailyRecords?: pitcher_daily_recordUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    kboId?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backNumber?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type batter_daily_recordUpdateWithoutTeamInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
    player?: playerUpdateOneRequiredWithoutBatterDailyRecordsNestedInput
  }

  export type batter_daily_recordUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
  }

  export type batter_daily_recordUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
  }

  export type pitcher_daily_recordUpdateWithoutTeamInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
    player?: playerUpdateOneRequiredWithoutPitcherDailyRecordsNestedInput
  }

  export type pitcher_daily_recordUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
  }

  export type pitcher_daily_recordUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkPlayerId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
  }

  export type batter_daily_recordCreateManyPlayerInput = {
    id?: number
    season: string
    date: Date | string
    fkOppositionTeamId: number
    G: number
    PA: number
    AB: number
    R: number
    H: number
    twoB: number
    threeB: number
    HR: number
    TB: number
    RBI: number
    SB: number
    CS: number
    BB: number
    HBP: number
    SO: number
    GDP: number
  }

  export type pitcher_daily_recordCreateManyPlayerInput = {
    id?: number
    season: string
    date: Date | string
    fkOppositionTeamId: number
    G: number
    CG: number
    SHO: number
    W: number
    L: number
    SV: number
    HLD: number
    TBF: number
    IP: string
    H: number
    HR: number
    BB: number
    HBP: number
    SO: number
    R: number
    ER: number
  }

  export type batter_daily_recordUpdateWithoutPlayerInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
    team?: teamUpdateOneRequiredWithoutBatterOppositionRecordsNestedInput
  }

  export type batter_daily_recordUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
  }

  export type batter_daily_recordUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    PA?: IntFieldUpdateOperationsInput | number
    AB?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    H?: IntFieldUpdateOperationsInput | number
    twoB?: IntFieldUpdateOperationsInput | number
    threeB?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    TB?: IntFieldUpdateOperationsInput | number
    RBI?: IntFieldUpdateOperationsInput | number
    SB?: IntFieldUpdateOperationsInput | number
    CS?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    GDP?: IntFieldUpdateOperationsInput | number
  }

  export type pitcher_daily_recordUpdateWithoutPlayerInput = {
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
    team?: teamUpdateOneRequiredWithoutPitcherOppositionRecordsNestedInput
  }

  export type pitcher_daily_recordUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
  }

  export type pitcher_daily_recordUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fkOppositionTeamId?: IntFieldUpdateOperationsInput | number
    G?: IntFieldUpdateOperationsInput | number
    CG?: IntFieldUpdateOperationsInput | number
    SHO?: IntFieldUpdateOperationsInput | number
    W?: IntFieldUpdateOperationsInput | number
    L?: IntFieldUpdateOperationsInput | number
    SV?: IntFieldUpdateOperationsInput | number
    HLD?: IntFieldUpdateOperationsInput | number
    TBF?: IntFieldUpdateOperationsInput | number
    IP?: StringFieldUpdateOperationsInput | string
    H?: IntFieldUpdateOperationsInput | number
    HR?: IntFieldUpdateOperationsInput | number
    BB?: IntFieldUpdateOperationsInput | number
    HBP?: IntFieldUpdateOperationsInput | number
    SO?: IntFieldUpdateOperationsInput | number
    R?: IntFieldUpdateOperationsInput | number
    ER?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}