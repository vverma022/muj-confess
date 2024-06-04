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
        <CardTitle>Signup</CardTitle>
        <CardDescription>Welcome to MUJ-Confessions</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User-Name</Label>
              <Input id="name" placeholder="Name (ps. don't use your real name)" />
            </div>
            <div>
             <Label htmlFor="number">Graduation Year</Label>
              <Input id="graduation_year" placeholder="eg. 2027" />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your @muj.manipal.edu Email" />
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
          </div>
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gander">Gender</Label>
              <Select>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select your Gender" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="male">Him</SelectItem>
                  <SelectItem value="female">Her</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Signup</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
export default Signin
