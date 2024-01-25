import "./Switch.css"


const Switch = (props) => {
    const { labelText } = props;
    return (
        <div className="labeled-switch">
            <label className='switch'>
                <input className="inputNode" type="checkbox" />
                <span className='slider' />
            </label>
            {/* optional label text */}
            {(labelText) &&
                <div className='text'>
                    {labelText}
                </div>}
        </div>
    )
}

export default Switch