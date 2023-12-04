import { NextResponse } from 'next/server'
import connectDB from '../../../lib/mongodb'
import Contact from '../../../models/contact'
import mongoose from 'mongoose'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    await connectDB()
    await Contact.create({ name, email, message })

    return NextResponse.json({
      msg: ['Mensagem enviada com sucesso'],
      success: true
    })
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = []
      for (const e in error.errors) {
        errorList.push(error.errors[e].message)
      }

      return NextResponse.json({ msg: errorList })
    } else {
      return NextResponse.json({
        msg: 'Desabilitado para o envio de mensagens'
      })
    }
  }
}
