
function Button(props) {

    const isAnOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    }

    return (
        <div
            className={`button-container ${isAnOperator(props.children) ? 'operator' : ''}` .trimEnd()}>
            {props.children}
        </div>
    );
}

export default Button;