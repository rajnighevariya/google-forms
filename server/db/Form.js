var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var FormSchema = new mongoose.Schema({

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    name: String,

    description: {
        type: String,
        default: ""
    },

    questions: [{
        open: { type: Boolean, default: false },
        questionText: String,
        questionImage: { type: String, default: "" },
        options: [{
            optionText: String,
            optionImage: { type: String, default: "" },
        }],
    }],

    stared: { type: Boolean, default: false },

    formType: { type: String, default: "anonymous" }

}, { timestamps: true });

FormSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Form', FormSchema, 'Form');


