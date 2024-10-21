import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Projects() {
    return (
        <div className="w-full">
            <p className="text-white font-semibold text-3xl border-b-white border-b-2 mb-3">Projects</p>
            <div className="flex flex-col gap-4 justify-center">
                <Card className="bg-transparent text-white">
                    <CardHeader>
                        <CardTitle className=" text-2xl">Project Name</CardTitle>
                        <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut quae obcaecati fugiat eum sapiente vero eaque consectetur laborum corporis.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex gap-2">
                        <p>Github</p>
                        <p>Live Link</p>
                    </CardFooter>
                </Card>
                <Card className="bg-transparent text-white">
                    <CardHeader>
                        <CardTitle className=" text-2xl">Project Name</CardTitle>
                        <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut quae obcaecati fugiat eum sapiente vero eaque consectetur laborum corporis.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex gap-2">
                        <p>Github</p>
                        <p>Live Link</p>
                    </CardFooter>
                </Card>
                <Card className="bg-transparent text-white">
                    <CardHeader>
                        <CardTitle className=" text-2xl">Project Name</CardTitle>
                        <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut quae obcaecati fugiat eum sapiente vero eaque consectetur laborum corporis.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex gap-2">
                        <p>Github</p>
                        <p>Live Link</p>
                    </CardFooter>
                </Card>
                <Card className="bg-transparent text-white">
                    <CardHeader>
                        <CardTitle className=" text-2xl">Project Name</CardTitle>
                        <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut quae obcaecati fugiat eum sapiente vero eaque consectetur laborum corporis.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex gap-2">
                        <p>Github</p>
                        <p>Live Link</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

