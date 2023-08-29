import React from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

export function Splash()
{
  const controls = useAnimationControls();

  return (
    <motion.div
      className="bg-neutral-900 text-slate-200 inset-0 flex flex-col items-center justify-center loading fixed z-20 pointer-events-none"
      animate={controls}
      initial={{ "--stop": "100%" } as any}
      aria-hidden="true"
    >
      <LoadingAnimation
        onComplete={() => {
          controls.start({
            "--stop": "0%",
            transition: {
              delay: 0.2,
              type: "tween",
              duration: 0.8,
            },
          } as any);
        }}
      />
    </motion.div>
  );
}

function LoadingAnimation({ onComplete }: { onComplete: () => void })
{
  const [toggled, setToggled] = React.useState(false);

  return (
    <h1 className="flex flex-col font-bold text-[7rem] flex text-center">
      <motion.div
        className="block"
        layout
        transition={{ type: "spring", damping: 20 }}
      >
        Jesse Mack
      </motion.div>

      <AnimatePresence mode="popLayout">
        {toggled ? (
          <motion.div
            key="final"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 64, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onAnimationComplete={onComplete}
          />
        ) : (
          <motion.div
            key="initial"
            className="relative block"
            animate="hide"
            initial="show"
            exit="exit"
            onAnimationComplete={() => setToggled(true)}
          >
            <motion.span
              className="block"
              variants={{
                hide: { opacity: 0.1 },
                show: { opacity: 1 },
                exit: { y: -64, opacity: 0 },
              }}
              transition={{ type: "spring", damping: 20, restDelta: 0.001 }}
            >
              エンジニア
            </motion.span>
            <motion.span
              className="absolute left-0 right-0 block h-[24px] bg-slate-200 top-1/2"
              style={{ y: "-50%", originX: "left" }}
              variants={{
                hide: { scaleX: 1 },
                show: { scaleX: 0 },
                exit: { scaleX: 0, originX: "right" },
              }}
              transition={{ type: "spring", damping: 20, restDelta: 0.001 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </h1>
  );
}
