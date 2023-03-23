const EventEmitter = require('events')
const customEvents = new EventEmitter()
customEvents.on('response', (k) => {
  console.log(`callback inside custom event: ${k}`);
})

customEvents.on('response', () => {
  console.log(`2: `);
})

customEvents.emit('response', 3)