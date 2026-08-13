import { useRef, useState } from 'react';
import './HomepageJingle.css';

const HomepageJingle = () => {
    const audioRef = useRef(null);
    const hasEnteredRef = useRef(false);
    const [isOpen, setIsOpen] = useState(true);

    const enterSite = () => {
        if (hasEnteredRef.current) return;
        hasEnteredRef.current = true;

        const audio = audioRef.current;

        // Keep play() as the first browser action from the visitor's gesture.
        if (audio) {
            audio.currentTime = 0;
            audio.volume = 1;
            const playback = audio.play();

            if (playback && typeof playback.catch === 'function') {
                playback.catch(() => {
                    hasEnteredRef.current = false;
                    setIsOpen(true);
                });
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
                            onPointerDown={enterSite}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') enterSite();
                            }}
                        >
                            Tap to Enter
                        </button>
                        <p className="jingle-welcome__note">Our jingle will play once.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomepageJingle;
