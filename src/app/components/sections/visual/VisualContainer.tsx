'use client';

import CodeWindow from './CodeWindow';
import { SectionContainer } from '../../shared';

/** The Visual Section Component. Serves as the visual aspect of the page's entrance */
export default function VisualContainer() {
    return (
        <SectionContainer
            id="visual-section"
            styleClass="lg:!pt-0 lg:h-screen lg:justify-center"
        >
            <CodeWindow />
        </SectionContainer>
    );
}
