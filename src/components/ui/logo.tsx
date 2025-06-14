import { Mountain, TreePalm } from "lucide-react"
import { motion } from "motion/react"

type IconVariant = "mountain" | "tree"
type NameVariant = "full" | "short"

export function Logo({
  name = "full",
  text,
  variant = "tree",
}: Readonly<{ variant?: IconVariant, name?: NameVariant, text?: string }>) {
  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative"
        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {variant === "mountain"
          ? (
              <Mountain className="h-8 w-8 text-primary" />
            )
          : (
              <TreePalm className="h-8 w-8 text-primary" />
            )}

        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full"
          animate={{
            opacity: [1, 0.8, 1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>

      <motion.span
        className="text-xl font-bold font-playfair text-primary"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {name === "full"
          ? (
              <span className="hidden md:inline-block">Mbango Eco Adventure</span>
            )
          : (
              <>
                {text}
                {" "}
                MEA
              </>
            )}
      </motion.span>
    </motion.div>
  )
}
