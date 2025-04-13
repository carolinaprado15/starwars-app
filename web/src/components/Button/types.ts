export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  loading?: boolean;
  width?: number;
  disabled?: boolean
}