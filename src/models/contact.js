import mongoose, { Schema } from 'mongoose'

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório.'],
    trim: true,
    minLength: [2, 'Nome deve ter mais de 2 caracteres.'],
    maxLength: [50, 'Nome deve ter menos de 50 caracteres.']
  },

  email: {
    type: String,
    required: [true, 'Email é obrigatório.'],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, 'Endereço de Email inválido!']
  },

  message: {
    type: String,
    required: [true, 'A mensagem é obrigatória.']
  },

  date: {
    type: Date,
    default: Date.now
  }
})

const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact
