import React, { useContext, useState, useEffect } from 'react'
//import API from 'config/api'
import { Loader } from 'components'
import { ordenDataMock } from 'mockup'

const OrdenContext = React.createContext()

//DEJAR COMUNAS Y REGION LABEL EN ESTE ESTADO
function OrdenProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [orden, setOrden] = useState(null)

  const setOrderState = nextState => {
    setOrden(prev => ({ ...prev, ...nextState }))
  }
  const setItemsByProyectoId = (nextItems, id) => {
    const { itemsByProyectoId } = orden
    const nextItemsByProyectoId = {
      ...itemsByProyectoId,
      [id]: nextItems,
    }
    setOrden(prev => ({
      ...prev,
      itemsByProyectoId: nextItemsByProyectoId,
    }))
  }

  useEffect(() => {
    const getOrden = async () => {
      try {
        setLoading(true)
        //const nextUser = await API.me(null)
        setOrden(ordenDataMock)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getOrden()
  }, [])

  return (
    <OrdenContext.Provider
      value={{
        orden,
        setItemsByProyectoId,
        setOrderState,
      }}
    >
      {loading ? <Loader /> : children}
    </OrdenContext.Provider>
  )
}

function useOrden() {
  const context = useContext(OrdenContext)
  if (!context) {
    throw new Error('useOrden must be used within a OrdenProvider')
  }
  return context
}

export { OrdenProvider, useOrden }
