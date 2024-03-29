import { useMemo } from "react"
import styled from 'styled-jsx/style'

const defaultStyle = {
	padding: 8,
	margin: 8,
	boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
	border: '1px solid #ddd',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

export default function Card(props: {
	children: React.ReactNode,
	style?: object
}) {
	const cardStyle = useMemo(() => ({ ...defaultStyle, ...props.style }), [props.style])
	return (
		<div style={cardStyle}>{props.children}</div>
	)
}