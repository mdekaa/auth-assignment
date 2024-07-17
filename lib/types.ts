import {z} from 'zod';

export const RegisterSchema = z.object({
    username: z.string().min(5,{
        message: "username must be more than 5 letters",
    }).max(20),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "password must contain more than 8 letters",
    }),

})

export type Register = z.infer<typeof RegisterSchema>;