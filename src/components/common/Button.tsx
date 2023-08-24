interface ButtonProps {
    children: string;
    type: 'button' | 'submit';
    testid: string;
    handler?: () => void;
    isDisabled?: boolean;
    className?: string;
}

const Button = ({children, type, testid, handler, isDisabled = false, className}: ButtonProps) => {
    return (
        <button
            type={type}
            data-testid={testid}
            onClick={handler}
            disabled={isDisabled}
            className={className}
        >
            {children}
        </button>
    );
};

export default Button;
