"use client";

import { useCallback, useEffect, useState } from "react";

export function useScrollProgress<T extends HTMLElement>() {
    const [node, setNode] = useState<T | null>(null);
    const [progress, setProgress] = useState(0);

    const ref = useCallback((el: T | null) => {
        setNode(el);
    }, []);

    useEffect(() => {
        if (!node) return;

        const updateProgress = () => {
            const maxScroll = node.scrollWidth - node.clientWidth;
            if (maxScroll <= 0) {
                setProgress(1);
                return;
            }
            setProgress(Math.min(1, Math.max(0, node.scrollLeft / maxScroll)));
        };

        updateProgress();
        node.addEventListener("scroll", updateProgress, { passive: true });
        const resizeObserver = new ResizeObserver(updateProgress);
        resizeObserver.observe(node);

        return () => {
            node.removeEventListener("scroll", updateProgress);
            resizeObserver.disconnect();
        };
    }, [node]);

    return { scrollerRef: ref, scrollerElement: node, progress } as const;
}
