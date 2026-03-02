import { useEffect, useState } from 'react';

export const useTypingText = (
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800,
) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndex];

    // Pause when word completed
    if (isPaused) {
        const pauseTimeout = setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
        }, pauseTime);

        return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentText.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentText) {
          setIsPaused(true);
        }
      } else {
        const nextText = currentText.slice(0, displayText.length - 1);

        setDisplayText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    isPaused,
    textIndex,
    texts,
    deletingSpeed,
    typingSpeed,
    pauseTime
  ]);

  return displayText;
};
