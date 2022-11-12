export const regIDCard =
  /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

export const regPhone =
  /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/

export const checkIDCard = (idcard: string) => {
  return regIDCard.test(idcard)
}

export const checkPhoneNumber = (phone: string) => {
  return regPhone.test(phone)
}
