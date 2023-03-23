const { readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// console.log('started');

const start = async () => {
  try{
    const first = await readFile('./test.txt')
    const write = await writeFile('./text1.txt', `\n${first}`, {flag: 'a'})
    console.log('try block', write);
  }catch(error){
    console.log('catch block', error);
  }
}

start()
console.log('working');

// readFilePromise('./test.txt')
// .then(result => writeFilePromise('./text1.txt', `\n${result}`, {flag: 'a'}))
// .then(result => console.log('successfully written'))
// .catch(error => console.log(error))
// .catch(error => console.log(error))

// console.log('end of file');

// const getText = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) {
//         return reject(err)
//       }

//       resolve(result);
//     })
//   })
// }


// const writeText = (text, path) => {
//   return new Promise((resolve, reject) => {
//     writeFile(path, text, err => {
//       if (err) {
//         return reject(err)
//       }

//       resolve('Successfully written the data into the file')
//     })
//   })
// }

// getText('./test.txt1')
//   .then(result => console.log(result))
//   .catch(error => console.log(error))



