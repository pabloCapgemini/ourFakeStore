import React from 'react';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header role="banner" className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <a className="navbar-brand" href="#">OurFakeStore</a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav" data-testid="navbar-collapse">
                <nav role="navigation">
                    {/* Basic navigation structure */}
                </nav>

                {/* Search Bar UI Scaffolding */}
                <div className="d-flex ms-auto">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products..."
                        />
                        <span className="input-group-text">🔍</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
