export default function Button({ children, style, onClick, id }) {
  
  return (
    <button 
      className={style}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
}