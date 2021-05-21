import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-lg-start text-muted " style={{position:'sticky', top: '100vh', width: '100%'}}>
        
          <div className="text-center p-4 bg-glass-dark text-light">
            Created by Neel Patel &nbsp;| &nbsp;
            <a className="text-reset fw-bold" href="https://github.com/Neel8501" target="_blank">More Projects</a>
          </div>
        </footer>
    );
}
