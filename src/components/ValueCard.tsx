import type { LucideIcon } from 'lucide-react'
import InkCircle from './InkCircle'
import SakuraIcon from './SakuraIcon'
import Hanko from './Hanko'

type Props = {
  icon: LucideIcon
  title: string
  description: string
}

function ValueCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center text-center gap-4 px-4">
      <div className="relative">
        <InkCircle size={96}>
          <Icon className="w-9 h-9" strokeWidth={1.5} />
        </InkCircle>
        <SakuraIcon className="absolute -bottom-1 -right-1 w-5 h-5 text-color-sakura" />
      </div>
      <h3 className="text-color-tinta text-sm font-bold uppercase tracking-[0.2em]">
        {title}
      </h3>
      <p className="text-color-tinta/70 text-sm leading-relaxed max-w-[14rem]">
        {description}
      </p>
      <Hanko className="w-5 h-5 mt-1" />
    </div>
  )
}

export default ValueCard
