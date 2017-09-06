let api
if (process.env.NODE_ENV !== "production") {
  api = "http://localhost:5000"
} else {
  api = "https://validator-services.herokuapp.com/"
}

export const baseURL = api

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
  fetch(baseURL + "/css?url=" + url)
    .then(response => response.json())
    .then(response => {
      const { validation, raw } = response
      return {
        warnings: validation.warnings,
        errors: validation.errors,
        raw: raw
      }
    })
