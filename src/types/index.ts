export interface ButtonProps {
  className?: string
  text?: string
  onClick?: Function
  type?: 'button' | 'submit' | 'reset' | undefined
  submitLoading?: boolean
  light?: boolean
}
