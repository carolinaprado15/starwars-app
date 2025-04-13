export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  width?: number;
  disabled?: boolean
}