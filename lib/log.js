const message = process.env.MESSAGE

export function log () {
  console.log('A message has been left for you:')
  console.log(message)
}
