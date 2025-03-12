import CodeWindow from '../components/code-window';
import Subheader from '../components/subheader';

/** The Hero Section Component. Should appear at the top of the page. */
export default function Hero() {
    return (
        <div className="w-full lg:h-[calc(100vh-var(--navbar-height))] lg:grid lg:grid-cols-9 lg:gap-x-10">
            <div className="h-[calc(100vh-var(--navbar-height)-5rem)] pt-10 lg:h-full lg:col-span-5 lg:pt-[15%]">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
                    {/* Name */}
                    <span
                        className={
                            'mt-5 text-7xl lg:text-8xl font-title font-medium tracking-tighter drop-shadow-md ' +
                            'underline decoration-[0.5rem] underline-offset-8 decoration-amber-600/50 dark:decoration-purple-400/50'
                        }
                    >
                        Samuel Kosasih
                    </span>

                    {/* Subtitle */}
                    <span className="mx-10 md:mx-0 text-xl md:text-2xl font-semibold tracking-tight">
                        Building efficient software solutions with clean code.
                    </span>
                </div>
            </div>
            <div className="flex justify-center w-full lg:h-full lg:col-span-4 lg:pt-[20%]">
                <CodeWindow />
            </div>
        </div>
    );
}
