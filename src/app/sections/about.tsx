import Subheader from '../components/subheader';

/** The About Section Component.*/
export default function About() {
    return (
        <div className="w-full pb-[50%] pt-[50%] lg:pt-0 lg:grid lg:grid-cols-2 lg:gap-x-7">
            <div>
                <Subheader text="About" />
            </div>
            <div>
                <Subheader text="Tech Stack" />
            </div>
        </div>
    );
}
