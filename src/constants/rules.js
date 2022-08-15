import { isEmail } from 'src/utils/helper'
export const rules = {
  email: {
    require: {
      value: true,
      message: 'Email la bat buoc nhap',
    },
    minLength: {
      value: 5,
      message: 'Email co do dai tu 6 - 160 ky tu',
    },
    maxLength: {
      value: 160,
      message: 'Email co do dai tu 6 - 160 ky tu',
    },
    validate: {
      email: (v) => isEmail(v) || 'Email khong dung dinh dang',
    },
  },
  password: {
    require: {
      value: true,
      message: 'Mat khau la bat buoc nhap',
    },
    minLength: {
      value: 6,
      message: 'Mat khau co do dai tu 6 - 160 ki tu',
    },
    maxLength: {
      value: 160,
      message: 'Mat khau co do dai tu 6 - 160 ki tu',
    },
  },
  confirmedPassword: {
    require: {
      value: true,
      message: 'Nhap lai mat khau la bat buoc nhap',
    },
    minLength: {
      value: 6,
      message: 'Nhap lai mat khau co do dai tu 6 - 160 ki tu',
    },
    maxLength: {
      value: 160,
      message: 'Nhap lai mat khau co do dai tu 6 - 160 ki tu',
    },
  },
}
