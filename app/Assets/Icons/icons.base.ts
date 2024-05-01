export type IconProps = React.SVGProps<SVGSVGElement>
export type IconElement = React.FC<IconProps>

export const baseIconProps: IconProps = {
  width: 48,
  height: 48,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg'
}
