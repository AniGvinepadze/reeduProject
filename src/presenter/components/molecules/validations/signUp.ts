import * as Yup from 'yup';


export const signupSchema = Yup.object().shape({
    fullName:Yup.string().required("fullname is required"),
    email: Yup.string().required().email('wrong email'),
    password: Yup.string().required().min(6,"min 6 characters" ).max(20,'max 20 characters')
})

export type SignUpFormdata = Yup.InferType<typeof signupSchema>