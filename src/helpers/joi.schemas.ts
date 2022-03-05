import Joi from 'joi'

export const schemaSignIn = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ec'] } })
    .required(),

  password: Joi.string().required()
})
