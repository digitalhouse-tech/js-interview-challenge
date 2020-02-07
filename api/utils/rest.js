module.exports = {
    success: data => ({ code: 200, status: 'success', data }),
    error: message => ({ code: 500, status: 'error', message })
} 