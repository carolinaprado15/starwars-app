import Joi from 'joi';

const searchSchema = Joi.object({
  search: Joi.string()
    .required()
    .min(1)
});

export { searchSchema }