'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['user', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
