import { celebrate, Joi } from "celebrate";

class Validation {
    validate() {
        const validated = celebrate(
            {
                body: Joi.object().keys({
                    name: Joi.string().required(),
                    email: Joi.string().required().email(),
                    whatsapp: Joi.number().required(),
                    latitude: Joi.number().required(),
                    longitude: Joi.number().required(),
                    city: Joi.string().required(),
                    uf: Joi.string().required().max(2),
                    items: Joi.string().required(),
                }),
            },
            {
                abortEarly: false,
            }
        );
        return validated;
    }
}

export default Validation;
