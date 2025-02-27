import Image from 'next/image'
import ethereumLogo from 'public/ethereum_logo.png'

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center text-lg font-semibold w-32 tracking-tight text-gray-900 dark:text-white">
      <span>zkEVM</span>
    </div>
  )
}
