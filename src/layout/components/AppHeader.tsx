import React from 'react'
import { Input } from '@/components/ui/input/input'
import { Bell, Search } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar/avatar'

const AppHeader: React.FC = () => {
   
    return (
        <div className='flex justify-between items-center p-4 bg-white'>
            <div className='flex justify-center items-center gap-2'>
                <SidebarTrigger className=' cursor-pointer' />
                <Input
                    type="search"
                    className='max-w-[320px] border-0 hidden sm:flex'
                    placeholder="Search"
                    icon={<Search size={16} />}
                    iconPosition="start"
                />
            </div>

            <div className='flex justify-center items-center  gap-4'>
                <div className='relative cursor-pointer'>
                    <div className='h-2 w-2 bg-red-500 rounded-full right-[-5px] top-[-5px] absolute' />
                    <Bell size={18} fill='gray' className='text-gray-500' />
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Maxbert
                </div>
            </div>
        </div>
    )
}

export default AppHeader