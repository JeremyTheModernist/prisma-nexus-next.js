import {db} from './db'
import {PrismaClient} from '@prisma/client'

export type Context = {
    db: PrismaClient
}

export const context = {
    db
}