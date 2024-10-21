export default function TechStack() {
    const skill = ["Javascript", "ReactJS", "Tailwind", "Node", "Express", "MongoDB", "TypeScript", "NextJS", "Rust", "Java", "Python", "AWS"]
    return (
        <div className="w-full">
            <h1 className="w-full flex justify-start text-3xl text-white border-b-2 border-b-white">Skills</h1>
            <div className="w-full mt-2 flex flex-wrap gap-2">
                {
                    skill.map((item, index) => {
                        return (
                            <p key={index} className="text-black font-semibold h-max w-max px-1 bg-white rounded-md">{item}</p>
                        )
                    })
                }

            </div>

        </div>
    )
}