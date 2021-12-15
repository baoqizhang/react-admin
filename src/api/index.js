import ajax from './ajax'

export const getWeather = (districtId) => {
  const url = `/weather/v1/?district_id=${districtId}&data_type=all&ak=1SuSacdLKXSHbLfwSrFH3jlNBbjNAS5a`
  return ajax(url, {}, 'GET')
}

export const login = (username, password) => ajax('/api/login', {username, password}, 'POST')