import { LOGO_DATA_URI } from '../assets/logoData'

interface LogoProps {
  size?: number
  variant?: 'full' | 'icon'
  onDark?: boolean
}

export default function Logo({ size = 48, variant = 'icon', onDark: _onDark = false }: LogoProps) {
  if (variant === 'icon') {
    return (
      <img
        src={LOGO_DATA_URI}
        alt="Badoumka USA"
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
      />
    )
  }
  return (
    <div className="flex flex-col items-center">
      <img
        src={LOGO_DATA_URI}
        alt="Badoumka USA"
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
