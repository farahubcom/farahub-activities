const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;


class ActivityListValidator {

    /**
     * The validator rules
     * 
     * @returns {object}
     */
    rules() {
        return {
            query: {
                in: ["query"],
                optional: true,
                isString: true
            },
            sort: {
                in: ["query"],
                optional: true,
                isString: true
            },
            page: {
                in: ["query"],
                optional: true,
                isInt: true,
                toInt: true
            },
            perPage: {
                in: ["query"],
                optional: true,
                isInt: true,
                toInt: true
            },
            link: {
                in: ["query"],
                optional: true,
                isString: true,
                customSanitizer: {
                    options: (value, { req }) => {
                        return ObjectId(value);
                    }
                }
            },
        }
    }
}

module.exports = ActivityListValidator;