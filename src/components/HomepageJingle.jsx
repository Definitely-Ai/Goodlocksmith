import { useRef, useState } from 'react';
import './HomepageJingle.css';

const HomepageJingle = () => {
    const audioRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const [isEntering, setIsEntering] = useState(false);

    const enterSite = async () => {
        if (isEntering) return;
        setIsEntering(true);

        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = 0;
            try {
                await audio.play();
            } catch {
                // The homepage still opens if a device cannot play the audio.
            }
        }

        setIsOpen(false);
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/locked-no-more-jingle.mp3"
                preload="auto"
                playsInline
                aria-hidden="true"
            />
            {isOpen && (
                <div className="jingle-welcome" role="dialog" aria-modal="true" aria-labelledby="jingle-welcome-title">
                    <div className="jingle-welcome__panel">
                        <img
                            className="jingle-welcome__logo"
                            src="/logo.png"
                            alt="A Good Locksmith"
                        />
                        <p className="jingle-welcome__eyebrow">Welcome to</p>
                        <h1 id="jingle-welcome-title">A Good Locksmith</h1>
                        <p className="jingle-welcome__message">Professional locksmith service you can trust.</p>
                        <button
                            type="button"
                            className="jingle-welcome__enter"
                            onClick={enterSite}
                            disabled={isEntering}
                        >
                            {isEntering ? 'Opening…' : 'Tap to Enter'}
                        </button>
                        <p className="jingle-welcome__note">Our jingle will play once.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomepageJingle;
