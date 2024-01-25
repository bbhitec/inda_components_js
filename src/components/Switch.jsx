import "./Switch.css"


// define props for an optional label (if the switch is a non-trivial on/off)
// interface SwitchProps {
//     labelText?: string;
// }

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