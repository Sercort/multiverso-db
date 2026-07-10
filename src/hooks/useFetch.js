import { useState, useEffect } from 'react'

// Hook reutilizable para hacer fetch a cualquier URL
function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelado = false

    async function obtenerDatos() {
      setLoading(true)
      setError(null)
      try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
          throw new Error('Error al consultar la API')
        }
        const json = await respuesta.json()
        if (!cancelado) {
          setData(json.results || [])
        }
      } catch (err) {
        if (!cancelado) {
          setError(err.message)
        }
      } finally {
        if (!cancelado) {
          setLoading(false)
        }
      }
    }

    obtenerDatos()

    return () => {
      cancelado = true
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch