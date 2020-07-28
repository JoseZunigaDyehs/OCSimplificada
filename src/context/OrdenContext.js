import React, { useContext, useState, useEffect } from 'react'
//import API from 'config/api'
import { Loader } from 'components'
import { ordenDataMock } from 'mockup'
import { sortBy } from 'utils'

const OrdenContext = React.createContext()

//DEJAR COMUNAS Y REGION LABEL EN ESTE ESTADO
function OrdenProvider({ children }) {
	const [loading, setLoading] = useState(true)
	const [orden, setOrden] = useState(null)

	const setOrderState = nextState => {
		setOrden(prev => ({ ...prev, ...nextState }))
	}
	const getItemsByProyectoId = ({ nextItems, proyectoId }) => {
		const { itemsByProyectoId } = orden
		const items = sortBy({ array: nextItems, key: 'nombre' })
		const nextItemsByProyectoId = {
			...itemsByProyectoId,
			[proyectoId]: items,
		}
		return nextItemsByProyectoId
	}
	const removeProyectosPlanDeCompra = ({
		proyectosPlanCompra,
		nextItems,
		proyectoId,
	}) => {
		const itemsByProyectoId = getItemsByProyectoId({ nextItems, proyectoId })
		setOrden(prev => ({
			...prev,
			proyectosPlanCompra,
			itemsByProyectoId,
		}))
	}
	const isDisabledForm = ({ fieldsById, isInvalid }) => {
		if (isInvalid) {
			return true
		}
		const isValid = []
		const { asociar_plan_compra, autoriza } = fieldsById
		const { proyectosPlanCompra, documentosAdjuntos, autorizadores } = orden
		if (asociar_plan_compra.value === '1' && proyectosPlanCompra.length === 0) {
			isValid.push('asociar_plan_compra')
		}
		if (documentosAdjuntos.length === 0) {
			isValid.push('documentosAdjuntos')
		}
		if (autoriza.value === '2' && autorizadores.length === 0) {
			isValid.push('autorizadores')
		}
		return isValid.length > 0
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
				setOrderState,
				removeProyectosPlanDeCompra,
				isDisabledForm,
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
