import CodeWindow from '../components/code-window';

/** The Hero Section Component. Should appear at the top of the page. */
export default function Hero() {
    return (
        <div className="w-full lg:h-[calc(100vh-var(--navbar-height))] lg:grid lg:grid-cols-9 lg:gap-x-10">
            <div className="h-[calc(100vh-var(--navbar-height)-15rem)] pt-10 lg:h-full lg:col-span-5 lg:pt-[15%]">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-4xl tracking-tight font-semibold">
                    Hey, I'm{' '}
                    <span
                        className={
                            'mt-5 text-7xl lg:text-8xl font-medium tracking-tighter drop-shadow-md ' +
                            'underline decoration-[0.5rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-400/50'
                        }
                    >
                        Samuel Kosasih
                    </span>
                    {/* <div className="relative inline-block mt-5">
                        <span className="text-7xl lg:text-8xl font-medium tracking-tighter">
                            Samuel Kosasih
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 dark:bg-blue-500 transform origin-left animate-width"></span>
                    </div> */}
                </div>
            </div>
            <div className="flex justify-center w-full lg:h-full lg:col-span-4 lg:pt-[20%]">
                <CodeWindow />
            </div>
        </div>
    );
}
