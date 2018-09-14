import { getValueAt } from './firebase'
const stringReplaceAsync = require('string-replace-async')

// reg ex pattern variables
const startReg = '!@#'
const endReg = '#@!'

export async function customReplace (stringData) {
  // replacing !@#SOMETHING#@! to data provided from firebase database
  return await stringReplaceAsync(
    stringData,
    RegExp(`${startReg}.*?${endReg}`, 'g'),
    getDataFromFirebase
  )
}

async function getDataFromFirebase (data, something) {
  const pathToDatabase = data.replace(startReg, '').replace(endReg, '')
  // to prevent invalid database url to be invoken or shown in the orginal blog
  if (/.*[$\.#\[\]].*/.test(pathToDatabase)) {
    return '<b>Invalid Path Given</b>'
  }
  // fetching result from firebase using parsed path
  return await getValueAt(pathToDatabase)
}
