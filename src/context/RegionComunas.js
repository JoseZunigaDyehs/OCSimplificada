import React, { useContext, useState, useEffect } from 'react'
import API from 'config/api'
import { Loader } from 'components'
import { regionesData, comunasByRegionIdData } from 'mockup'

const RegionComunasContext = React.createContext()

function RegionComunasProvider({ children }) {
  const [regiones, setRegiones] = useState([])
  const [comunasByRegionId, setComunasByRegionId] = useState({})
  const [loading, setLoading] = useState(true)
  //Carga regiones al iniciar Context
  useEffect(() => {
    const getRegiones = async () => {
      try {
        setLoading(true)
        //const nextRegiones = await API.getEntityList(`region`)
        //setRegiones(nextRegiones)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    if (!process.env.REACT_APP_DATA_DEV) {
      getRegiones()
    } else {
      setRegiones(regionesData)
      setComunasByRegionId(comunasByRegionIdData)
      setLoading(false)
    }
  }, [])
  //Si NO tiene las comunas de la region cargadas
  //    va a buscar al server, llena state y las retorna
  //Si tiene las comunas las retorna
  function getComunas(regionId) {
    return new Promise(async (res, rej) => {
      try {
        if (!comunasByRegionId[regionId]) {
          const comunas = await API.getComunas(regionId)
          setComunasByRegionId((prev) => {
            return {
              ...prev,
              [regionId]: comunas,
            }
          })
          res(comunas)
        } else {
          res(comunasByRegionId[regionId])
        }
      } catch (e) {
        rej(false)
      }
    })
  }

  return (
    <RegionComunasContext.Provider value={{ getComunas, regiones }}>
      {loading ? <Loader /> : children}
    </RegionComunasContext.Provider>
  )
}

function useRegionComunas() {
  const context = useContext(RegionComunasContext)
  if (!context) {
    throw new Error(
      `useRegionComunas must be used within a RegionComunasProvider`,
    )
  }
  return context
}

export { RegionComunasProvider, useRegionComunas }
