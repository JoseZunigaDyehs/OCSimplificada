import React from 'react'
import { useOrden } from 'context'

function PlanDeCompra() {
	const { orden } = useOrden()
	return <h1>PLAN DE COMPRA</h1>
}

export default PlanDeCompra
