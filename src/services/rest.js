// export const baseURL = "https://validator-services.now.sh"
export const baseURL = "http://localhost:5000"

export const validateHTML = url =>
  fetch(baseURL + "/html?url=" + url)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      const { validation, raw } = response
      return {
        warnings: validation.messages.filter(
          message => message.type === "info"
        ),
        errors: validation.messages.filter(message => message.type === "error"),
        raw: raw
      }
    })

export const validateCSS = url =>
  fetch(baseURL + "/css?url=" + url).then(response => response.json())
