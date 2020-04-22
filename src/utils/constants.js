import * as Yup from 'yup'

export const initialValuesAuth = {
  username: '',
  password: '',
}

export const authFormSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})
