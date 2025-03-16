'use client';

import CodeWindow from './CodeWindow';
import { SectionContainer } from '../../shared';

export default function VisualContainer() {
    return (
        <SectionContainer styleClass='lg:!pt-0 lg:h-screen lg:justify-center'>
            <CodeWindow />
        </SectionContainer>
    );
}
