/** Displays a Code Window */
export default function CodeWindow() {
    return (
        <div className="relative w-full">
            {/* Outer Glass Pane */}
            <div
                className={
                    'bg-gradient-to-br p-1 rounded-2xl backdrop-blur-sm border border-slate-700 transition-colors ' +
                    'from-amber-400/10 to-yellow-500/10 dark:from-emerald-500/10 dark:to-blue-600/10'
                }
            >
                {/* Window */}
                <div className="bg-stone-50/90 dark:bg-gray-800/80 rounded-xl px-4 lg:px-6 pt-3 lg:pt-4 pb-1 shadow-xl transition-colors ">
                    {/* Window Header with Controls */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-sm transition-colors text-slate-500 dark:text-slate-400 font-mono">
                            myself.ts
                        </div>
                    </div>

                    {/* Code Content */}
                    <pre className="pb-3 lg:pb-5 overflow-x-scroll">
                        <TypeScriptCode />
                    </pre>
                </div>
            </div>
        </div>
    );
}

function TypeScriptCode() {
    return (
        <code className="text-xs md:text-sm lg:text-md font-mono transition-colors text-slate-800 dark:text-slate-300">
            {/* type Passion = 'Coding' | 'Problem Solving'; */}
            <div>
                <span className="transition-colors text-blue-800 dark:text-blue-400">
                    type
                </span>{' '}
                <span className="transition-colors text-emerald-900 dark:text-green-500">
                    Passion
                </span>{' '}
                ={' '}
                <span className="transition-colors text-amber-800 dark:text-amber-400">
                    'Coding'
                </span>{' '}
                |{' '}
                <span className="transition-colors text-amber-800 dark:text-amber-400">
                    'Problem Solving'
                </span>
                ;
            </div>
            <br />
            <div>
                {/* class Myself { */}
                <span className="transition-colors text-blue-800 dark:text-blue-400">
                    class
                </span>{' '}
                <span className="transition-colors text-emerald-900 dark:text-green-500">
                    Myself
                </span>{' '}
                <span className="transition-colors text-orange-800 dark:text-orange-400">
                    {'{'}
                </span>
            </div>
            <div>
                {/* basedIn = 'Bowie, MD' */}
                {'  '}
                <span className="transition-colors text-slate-800 dark:text-sky-200">
                    basedIn
                </span>
                :{' '}
                <span className="transition-colors text-emerald-900 dark:text-green-500">
                    string
                </span>{' '}
                ={' '}
                <span className="transition-colors text-amber-800 dark:text-amber-400">
                    'Bowie, MD 🇺🇸'
                </span>
                ;
            </div>
            <br />
            <div>
                {/* get currentCompany(): string { */}
                {'  '}
                <span className="transition-colors text-blue-800 dark:text-blue-400">
                    get
                </span>{' '}
                <span className="transition-colors text-slate-800 dark:text-sky-200">
                    currentCompany
                </span>
                <span className="transition-colors text-orange-800 dark:text-orange-400">
                    {'()'}
                </span>
                :{' '}
                <span className="transition-colors text-emerald-900 dark:text-green-500">
                    string
                </span>{' '}
                <span className="transition-colors text-orange-800 dark:text-orange-400">
                    {'{'}
                </span>
            </div>
            <div>
                {/* return 'Software Engineer'; */}
                {'  '}
                {'  '}
                <span className="transition-colors text-purple-700 dark:text-fuchsia-400">
                    return
                </span>{' '}
                <span className="transition-colors text-amber-800 dark:text-amber-400">
                    'Inovalon'
                </span>
                ;
            </div>
            <div>
                {/* } */}
                {'  '}
                <span className="transition-colors text-orange-800 dark:text-orange-400">
                    {'}'}
                </span>
            </div>
            <br />
            <div>
                {/* toString(): string { */}
                {'  '}
                <span className="transition-colors text-blue-800 dark:text-blue-400">
                    toString
                </span>{' '}
                ={' '}
                <span className="transition-colors text-orange-800 dark:text-orange-400">
                    {'()'}
                </span>
                :{' '}
                <span className="transition-colors text-emerald-900 dark:text-green-500">
                    string
                </span>{' '}
                <span className="transition-colors text-orange-800 dark:text-orange-400">
                    {'='}
                    {'>'}
                </span>{' '}
                <span className="transition-colors text-amber-800 dark:text-amber-400">
                    'Software Engineer'
                </span>
                ;
            </div>
            <div>
                {/* } */}
                <span className="transition-colors text-orange-800 dark:text-orange-400">
                    {'}'}
                </span>
            </div>
        </code>
    );
}

type Passion = 'Coding' | 'Problem Solving';

class Samuel {
    name: string = 'Samuel Kosasih';

    get currentCompany(): string {
        return 'Inovalon';
    }

    toString = (): string => `$: Software Engineer`;
}
