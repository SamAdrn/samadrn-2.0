'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Modal } from '@/app/components/shared';

// Define the context type
interface ModalContextType {
    openModal: (modalConfig: ModalConfig) => void;
    closeModal: () => void;
}

// Modal configuration type
interface ModalConfig {
    title?: string;
    content: ReactNode;
}

interface ModalProviderProps {
    children: React.ReactNode;
}

// Create the context with a default value
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Modal provider component
export function ModalProvider({ children }: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

    const openModal = (config: ModalConfig) => {
        setModalConfig(config);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            {modalConfig && (
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title={modalConfig.title}
                >
                    {modalConfig.content}
                </Modal>
            )}
        </ModalContext.Provider>
    );
}

// Custom hook to use the modal context
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
