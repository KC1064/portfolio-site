import NavPage from "../utils/Navpage";
import Projects from "../utils/Projects";

export default function MyProject() {
    return (
        <div className="w-full lg:w-[60%] lg:px-6 lg:py-8 md:px-6 md:py-8 py-4 px-4 overflow-x-hidden">
            <NavPage />
            <Projects showAll={true} view={false} />
        </div>
    )
}