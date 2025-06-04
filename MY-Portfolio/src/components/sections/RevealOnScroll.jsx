import { useRef, useEffect } from "react"

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.classList.add("visible");
                } else {
                    node.classList.remove("visible");
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, []);

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}