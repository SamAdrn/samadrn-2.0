import CodeWindow from '../components/code-window';
import LinkButton from '../components/link-button';

/** The Hero Section Component. Should appear at the top of the page. */
export default function Hero() {
    return (
        <div className="w-full h-screen lg:grid lg:grid-cols-10 lg:gap-x-10">
            {/* Left Grid */}
            <div className="h-4/5 lg:h-full lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-5">
                {/* Name */}
                <span
                    className={
                        'mt-5 text-7xl xl:text-7.5xl font-title font-semibold tracking-tight drop-shadow-md ' +
                        'underline decoration-[0.5rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-600/50'
                    }
                >
                    Samuel Kosasih
                </span>

                {/* Subtitle */}
                <span className="mt-2 mx-10 md:mx-0 text-xl md:text-2xl font-semibold tracking-tight">
                    Building efficient software solutions with clean code.
                </span>

                <div>
                    {/*  Languages I am comfortable with: */}
                    <span className="me-2 text-surface-half-light dark:text-surface-half-dark">
                        Mastering Front-End. Exploring Back-End.
                    </span>

                    <LinkButton text="View my Resume" />
                </div>
            </div>

            {/* Right Grid */}
            <div className="flex flex-col justify-center w-full lg:col-span-4">
                <CodeWindow />
            </div>
        </div>
    );
}
