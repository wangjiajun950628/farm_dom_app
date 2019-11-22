import Cookie from 'js-cookie'

// 设置保存的cookie名称
export const TOKEN_KEY = 'token'

// 设置cookie
export const setToken = (token) => {
  Cookie.set(TOKEN_KEY, token, { expires: 1 || 1 })
}
// 获取cookie
export const getToken = () => {
  const token = Cookie.get(TOKEN_KEY)
  // 判断token是否存在
  if (token) {
    return token
  } else {
    return false
  }
}

// 删除cookie
export const deleteToken = () => {
  Cookie.remove(TOKEN_KEY)
}
