import React from 'react'

class RemoveBuilding extends React.Component {
    render () {
        const {removeBuilding, id} = this.props
        return (
            <div>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeBuilding(id)}
                >
                    Remove</button>
            </div>
        )
    }
}

export default RemoveBuilding