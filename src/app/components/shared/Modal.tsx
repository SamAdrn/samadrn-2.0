import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
}: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className={
                            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' +
                            'bg-primary-light dark:bg-primary-dark rounded-lg shadow-xl ' +
                            'max-w-[90vw] max-h-[90vh] overflow-auto z-50 mx-4'
                        }
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
