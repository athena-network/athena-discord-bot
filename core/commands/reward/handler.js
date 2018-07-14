const MessageController = require('../message-controller')
const request = require('request-promise-native')

class RewardCommand extends MessageController {
  constructor () {
    super()
    this.global = true
    this.cooldown = 20000
  }

  handler (message) {
    if (this.lastUsed + this.cooldown > Date.now()) return
    this.lastUsed = Date.now()

    request({
      uri: 'http://explorer.athx.org/q/reward/',
      method: 'GET'
    }).then((response) => {
      var count = response
      message.channel.send(`The current block reward is ${count} ATHX`)
      console.log(`Current block reward is ${count}`)
    }).catch((err) => {
      console.log(err)
    })
  }
}

module.exports = new RewardCommand()