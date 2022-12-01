import React from 'react'

const Item = ({data}) => {
	return (
		<div>
			{
				data.map((item)=>(
					<div key={item.id}>{item.title}</div>
				))
			}
		</div>
	)
}

export default Item
