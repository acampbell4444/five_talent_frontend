export const required = value => value ? undefined : 'Required'

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength15 = maxLength(15)
export const maxLength30 = maxLength(30)

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const zipCode = value => value && !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value) ? 'Invalid ZipCode Format' : undefined

