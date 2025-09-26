import React from 'react';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header role="banner">
            <h1>OurFakeStore</h1>
            <nav role="navigation">
                {/* Basic navigation structure */}
            </nav>
        </header>
    );
};
