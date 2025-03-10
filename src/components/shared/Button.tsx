import Link from 'next/link';

interface ButtonProps {
    variant?: 'primary' | 'outline'| 'second';
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  }
  
const Button = ({ variant = 'primary', children, href, onClick, className, type }: ButtonProps) => {
    const baseStyles = "px-8 py-3 rounded-full transition-colors duration-300";
    const variants = {
      primary: "bg-[#3cb815] hover:bg-[#2f9010] text-white",
      outline: "border-2 border-[#3cb815] text-[#3cb815] hover:bg-[#3cb815] hover:text-white",
      second: "bg-[#f65005] hover:bg-[#d94604] text-white"
    };
  
    if (href) {
      return (
        <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
          {children}
        </Link>
      );
    }
  
    return (
      <button onClick={onClick} type={type} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  };

export default Button;