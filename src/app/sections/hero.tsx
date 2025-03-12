import CodeWindow from "../components/code-window";

/** The Hero Section Component. Should appear at the top of the page. */
export default function Hero() {
    return (
        <div className="w-full lg:h-[calc(100vh-var(--navbar-height))] lg:grid lg:grid-cols-9 lg:gap-x-10">
            <div className="h-[calc(100vh-var(--navbar-height)-15rem)] pt-10 lg:h-full lg:col-span-5 lg:pt-[15%]">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-4xl tracking-tight font-semibold">
                    Hey, I'm{' '}
                    <span className="mt-5 text-7xl lg:text-8xl font-medium tracking-tighter drop-shadow-md">Samuel Kosasih</span>
                </div>
            </div>
            <div className="flex justify-center w-full lg:h-full lg:col-span-4 lg:pt-[20%]">
                <CodeWindow />
            </div>
        </div>
    );
}
