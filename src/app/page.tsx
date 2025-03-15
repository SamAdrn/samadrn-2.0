import About from './sections/about';
import Hero from './sections/hero';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />

            <About />
        </div>
    );
}
