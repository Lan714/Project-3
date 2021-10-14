const handleSignOut = () => {
  localStorage.removeItem('token')
  window.location = '/signIn'
}