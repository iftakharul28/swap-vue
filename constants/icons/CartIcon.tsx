type Props = {
  className?: string;
};
const CartIcon = (props: Props) => {
  return (
    <svg className={`${props.className ? props.className : ''}`} viewBox='-1 0 37 32' height='20' width='20' fill='#686b78'>
      <path d='M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z'></path>
    </svg>
  );
};

export default CartIcon;