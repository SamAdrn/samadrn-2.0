export default function Hero() {
    return (
        <div className="w-full lg:h-[calc(100vh-var(--navbar-height))] grid lg:grid-cols-12">
            <div className="h-[calc(100vh-var(--navbar-height)-15rem)] lg:h-full lg:col-span-7">
                <div className="flex flex-col items-start text-4xl tracking-tight font-semibold pt-[20%]">
                    Hey, I'm{' '}
                    <span className="mt-5 text-8xl font-medium tracking-tighter">Samuel Kosasih</span>
                </div>
            </div>
            <div className="flex justify-center lg:h-full lg:col-span-5">
                Code Window
            </div>
        </div>
    );
}
