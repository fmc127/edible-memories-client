'use strict'

const store = require('./../store')
const showPostsTemplate = require('../templates/post-listing.handlebars')
const api = require('./api')

const onSignUpSuccess = function (response) {
  $('#message').html(response.user.email + ' Successfully signed up')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#sign-in').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' Successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#search-post').show()
  $('#create-post').show()
  $('#update-post').show()
  $('#delete-post').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-up').trigger('reset')
  $('#showPostsButton').show()
  // $('#exampleModalLong').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Successfully changed password')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Failed to change password')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Successfully signed out!')
  $('#search-post').hide()
  $('#create-post').hide()
  $('#update-post').hide()
  $('#delete-post').hide()
  $('#change-password').hide()
  $('#change-password').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-up').trigger('reset')
  $('#showPostsButton').hide()
  $('#clearPostsButton').hide()
  $('.all-posts').html('')
  $('#create-post').trigger('reset')
  $('#update-post').trigger('reset')

  store.user = null
  // store.user = response.user
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign out failed')
  $('#sign-out').trigger('reset')
}

const onShowPostSuccess = function (data) {
  $('#showPostsButton').hide()
  $('#clearPostsButton').show()
  // if (store.updatePost === false) {
  $('#message').text('Here are your posts!')
  // store.updatePost = false
  // $('#message').text('Behold!')
  // $('#show-post').trigger('reset')
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  $('.all-posts').html('')
  $('.all-posts').append(showPostsHtml)
}

const onReShowPosts = function (data, message) {
  $('#message').text(message)
  store.updatePost = false
  // $('#message').text('Behold!')
  // $('#show-post').trigger('reset')
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  $('.all-posts').html('')
  $('.all-posts').append(showPostsHtml)
}

const onShowPostFailure = function (response) {
  $('#message').text('Could not locate post')
  // $('#show-post').trigger('reset')
}

const onCreatePostSuccess = function (response) {
  $('#create-post').trigger('reset')
  $('#change-password').trigger('reset')
  $('#showPostsButton').hide()
  $('#clearPostsButton').show()
  $('#update-post').trigger('reset')

  api.showPost()
    .then((data) => {
      onReShowPosts(data, 'Post created!')
    })
    .catch(onShowPostFailure)
}

const onCreatePostFailure = function (response) {
  $('#message').text('Failed to create post')
  $('#create-post').trigger('reset')
}

const onUpdatePostSuccess = function (data) {
  $('#update-post').trigger('reset')
  $('#change-password').trigger('reset')
  $('.all-posts').trigger('reset')
  $('#create-post').trigger('reset')
  store.updatePost = true
  api.showPost()
    .then((data) => {
      onReShowPosts(data, 'Your post has been updated!')
    })
    .catch(onShowPostFailure)
}

const onUpdatePostFailure = function (response) {
  $('#message').text('Failed to update post')
  $('#update-post').trigger('reset')
}

const onDeletePostSuccess = function (response) {
  // $('#message').text('Deleted post!')
  $('#remove-post').trigger('reset')
  api.showPost()
    .then((data) => {
      onReShowPosts(data, 'Deleted post!')
    })
    .catch(onShowPostFailure)
}

const onDeletePostFailure = function (response) {
  $('#message').text('Failed to delete post!')
  $('#remove-post').trigger('reset')
}

const getPostsSuccess = (data) => {
  // console.log(data)
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#message').text('Behold!')
  $('.content').html(showPostsHtml)
}

const clearPostSuccess = () => {
  $('#message').text('Cleared posts!')
  $('.all-posts').empty()
  $('#showPostsButton').show()
  $('#clearPostsButton').hide()
}

const clearPostFailure = (error) => {
  $('#message').text('Cannot clear!')
  console.error(error)
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onShowPostFailure,
  onShowPostSuccess,
  onCreatePostFailure,
  onCreatePostSuccess,
  onUpdatePostSuccess,
  onUpdatePostFailure,
  onDeletePostSuccess,
  onDeletePostFailure,
  getPostsSuccess,
  clearPostSuccess,
  clearPostFailure
}
