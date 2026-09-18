"use client";

import { useEffect, useRef, useState } from "react";
import type { StatItem } from "@/lib/site-content";

export default function StatsBand({ stats }: { stats: StatItem[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="relative rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center backdrop-blur-sm"
        >
          <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-white sm:text-[2.75rem]">
            <Counter target={stat.value} run={run} delay={index * 120} />
            <span className="text-brand-300">{stat.suffix}</span>
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function Counter({
  target,
  run,
  delay,
}: {
  target: number;
  run: boolean;
  delay: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    let frame = 0;
    let raf = 0;
    const duration = 1400;
    const start = performance.now() + delay;

    const tick = (now: number) => {
      if (now < start) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame += 1;
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      void frame;
    };
  }, [run, target, delay]);

  return <>{value.toLocaleString("pt-BR")}</>;
}
