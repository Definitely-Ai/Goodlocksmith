import { useEffect, useRef } from 'react';

const HomepageJingle = () => {
    const audioRef = useRef(null);

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
                removeFallbackListeners();
                return true;
            } catch {
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

    return (
        <audio
            ref={audioRef}
            src="/locked-no-more-jingle.mp3"
            preload="auto"
            playsInline
            aria-hidden="true"
        />
    );
};

export default HomepageJingle;
