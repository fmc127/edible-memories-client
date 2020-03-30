'use strict'

const authEvents = require('./auth/events')
const postEvents = require('./auth/events.js')

$(() => {
  // auth
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // post ui
  $('#update-post').hide()
  $('#create-post').hide()
  $('#update-post').on('submit', authEvents.onUpdate)
  $('.remove-post').on('click', authEvents.onDelete)
  $('#create-post').on('submit', authEvents.onCreate)

  // post buttons
  $('#clearPostsButton').hide()
  $('#clearPostsButton').on('click', authEvents.onClear)
  $('#showPostsButton').on('click', authEvents.onShow)
  $('#showPostsButton').hide()

  postEvents.addHandlers()
})
