import * as yup from "yup";

export interface FormInput {
    thing: string;
    bath: string;
}

export const schema = yup.object({
    thing: yup.string().required(),
    bath: yup.string().required(),
}).required();

export type FormData = yup.InferType<typeof schema>;