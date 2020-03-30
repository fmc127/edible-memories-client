'use strict'

// create function and export with module.exports and move to app.js
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const clickCell = function (event) {
  event.preventDefault()
}

const onSignUp = function (event) {
  event.preventDefault()
  // for element that was submitted
  const form = event.target
  // get values from the users input in my form
  // format data correctly for api
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // prevents refresh of page
  const form = event.target
  const data = getFormFields(form)
  // gets data from form sign in (located in index.html)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onShow = function (event) {
  event.preventDefault()
  api.showPost()
    .then(ui.onShowPostSuccess)
    .catch(ui.onShowPostFailure)
}

const onCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createPost(data)
    .then(ui.onCreatePostSuccess)
    .catch(ui.onCreatePostFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePost(data)
    .then(ui.onUpdatePostSuccess)
    .catch(ui.onUpdatePostFailure)
}

const onDelete = function (event) {
  event.preventDefault()
  // const id = $(event.target).data('id')
  api.deletePost(event)
    .then(ui.onDeletePostSuccess)
    .catch(ui.onDeletePostFailure)
}

const onClear = function (event) {
  event.preventDefault()
  ui.clearPostSuccess()
}

const addHandlers = () => {
  $('#getPostsButton').on('click', onShow)
  $('#clearPostsButton').on('click', onClear)
  $('.all-posts').on('click', '.remove-post', onDelete)
}

module.exports = {
  clickCell,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreate,
  onUpdate,
  onShow,
  onDelete,
  onClear,
  addHandlers
}
