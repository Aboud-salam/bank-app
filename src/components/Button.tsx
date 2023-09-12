interface Props {
  styles: string;
  title: string;
}
const Button = ({ styles, title }: Props) => {
  return (
    <button
      className={`bg-blue-gradient text-primary font-poppins rounded-[10px]  ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
