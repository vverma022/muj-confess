import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const Sidebar = () => {
  return (
    <div className='flex justify-start h-full w-2'>
    <Card className="w-[350px]">
      <CardHeader>
      <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
      </CardHeader>
        <CardContent>
            <Button className='w-full'>Profile</Button>
            <Button className='w-full'>Confess</Button>
            <Button className='w-full'>About Us</Button>
            
            
        </CardContent>
    </Card>
    </div>
  )
}

export default Sidebar
