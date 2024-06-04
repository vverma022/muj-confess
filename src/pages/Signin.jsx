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


const Signin = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
    <Card className="w-[350px]">
<CardHeader>
<CardTitle>Signin</CardTitle>
<CardDescription>Welcome to MUJ-Confessions</CardDescription>
</CardHeader>
<CardContent>
<form>
  <div className="grid w-full items-center gap-4">
    <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Your @muj.manipal.edu Email" />
    </div>
    <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Password" />
  </div>
  </div>
</form>
</CardContent>
<CardFooter className="flex justify-center">
<Button>Signin</Button>
</CardFooter>
</Card>
</div>
  )
}

export default Signin
