export const baseURL = "https://validator-services.now.sh"

export const validateHTML = url =>
  fetch(baseURL + "/html?url=" + url)
    .then(response => response.json())
    .then(response => {
      return {
        warnings: response.messages.filter(message => message.type === "info"),
        errors: response.messages.filter(message => message.type === "error")
      }
    })

export const validateCSS = url =>
  fetch(baseURL + "/css?url=" + url).then(response => response.json())
