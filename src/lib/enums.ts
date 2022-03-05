/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
export enum StatusCode {
  SUCCESS = '20000',
  FAILURE = '40001'
}

export enum envi {
  ENVIRONMENT = 'ENVIRONMENT'
}

export enum TypeErrors {
  TECNICO = 'Tecnico',
  BUSINESS = 'Negocio',
  NOTFOUND = 'Not Found',
  INTERNAL_ERROR = 'Internal error',
  BAD_REQUEST = 'Bad request',
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  UNAUTHORIZED = 'Authentication error',
  ECONNREFUSED = 'ECONNREFUSED',
  ECONNABORTED = 'ECONNABORTED',
  ECONNRESET = 'ECONNRESET'
}

export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  PAYLOAD_TOO_LARGE = 413,
  INTERNAL_ERROR = 500
}

export enum PlusMessage {
  CORRECT_CONECTION = '¡Ingreso correcto al servidor!',
  ACTION_REALIZED = '¡Acción realizada correctamente!',
  ACTION_NOT_REALIZED = '¡Acción no realizada!'
}
