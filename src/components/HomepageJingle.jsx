import { useEffect, useRef, useState } from 'react';
import './HomepageJingle.css';

const HomepageJingle = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [needsInteraction, setNeedsInteraction] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return undefined;

        let fallbackActive = false;

        const removeFallbackListeners = () => {
            if (!fallbackActive) return;
            window.removeEventListener('pointerdown', playAfterInteraction);
            window.removeEventListener('keydown', playAfterInteraction);
            fallbackActive = false;
        };

        const startPlayback = async () => {
            try {
                audio.currentTime = 0;
                await audio.play();
                setNeedsInteraction(false);
                removeFallbackListeners();
                return true;
            } catch {
                setNeedsInteraction(true);
                return false;
            }
        };

        const playAfterInteraction = () => {
            startPlayback();
        };

        const attemptAutoplay = async () => {
            const started = await startPlayback();
            if (!started) {
                fallbackActive = true;
                window.addEventListener('pointerdown', playAfterInteraction, { once: true });
                window.addEventListener('keydown', playAfterInteraction, { once: true });
            }
        };

        attemptAutoplay();

        return () => {
            removeFallbackListeners();
            audio.pause();
        };
    }, []);

    const togglePlayback = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (!audio.paused) {
            audio.pause();
            return;
        }

        if (audio.ended) audio.currentTime = 0;

        try {
            await audio.play();
            setNeedsInteraction(false);
        } catch {
            setNeedsInteraction(true);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/locked-no-more-jingle.mp3"
                preload="auto"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                aria-hidden="true"
            />
            <button
                type="button"
                className="jingle-control"
                onClick={togglePlayback}
                aria-label={isPlaying ? 'Stop the A Good Locksmith jingle' : 'Play the A Good Locksmith jingle'}
            >
                <span aria-hidden="true">{isPlaying ? '🔇' : '🔊'}</span>
                {isPlaying ? 'Stop Jingle' : needsInteraction ? 'Play Jingle' : 'Our Jingle'}
            </button>
        </>
    );
};

export default HomepageJingle;
