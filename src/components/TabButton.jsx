export default function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button onClick={onClick} className={isSelected ? "active" : ""}>
        {children}
      </button>
    </li>
  );
}
