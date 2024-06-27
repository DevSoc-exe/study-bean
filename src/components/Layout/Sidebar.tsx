import {
  AlarmClockCheck,
  Bookmark,
  CircleCheckBig,
  Github,
  LoaderPinwheel,
  Notebook,
  Palette,
  Plus,
  UserRound
} from 'lucide-react'
import Icon from '../Icon'

const Sidebar = () => {
  return (
    <aside className='h-[calc(100vh-1.5rem)] backdrop-blur w-16 left-3 p-2 rounded-xl border border-l-0 border-t-0 flex flex-col py-4 justify-between items-center shadow-slightHover'>
      <div className='mx-auto space-y-2'>
        <Icon href='/'>
          <UserRound color='black' />
        </Icon>
        <hr className='mx-2' />
        <div className='w-10 flex flex-col gap-2'>
          <Icon href='/todos'>
            <CircleCheckBig color='black' className='size-5' />
          </Icon>
          <Icon href='/'>
            <AlarmClockCheck color='black' />
          </Icon>
          <Icon href='/'>
            <Notebook color='black' />
          </Icon>
          <Icon href='/'>
            <Bookmark color='black' />
          </Icon>
        </div>
      </div>
      <div className='mx-auto w-12 space-y-2'>
        <Icon href='/'>
        <LoaderPinwheel color='black' className='' />
        </Icon>
        <Icon href='/'>
          <Palette color='black' />
        </Icon>
        <Icon href='/'>
          <Plus color='black' />
        </Icon>
        <Icon href='/'>
          <Github color='black' />
        </Icon>
      </div>
    </aside>
  )
}

export default Sidebar
