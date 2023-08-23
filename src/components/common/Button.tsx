interface ButtonProps {
    name: string;
    type: 'button' | 'submit';
    testid: string;
    handler?: () => void;
    isDisabled?: boolean;
}

const Button = ({name, type, testid, handler, isDisabled = false}: ButtonProps) => {
    return (
        <button type={type} data-testid={testid} onClick={handler} disabled={isDisabled}>
            {name}
        </button>
    );
};

export default Button;
