import { cn } from "@/lib/utils";
import { IStack } from "@/utils/stack";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

function SkillCard({ skill, index }: { skill: IStack; index: number }) {
  const typeOfSkillIcon = skill.icon instanceof Function ? "icon" : "image";

  return (
    <motion.div
      key={skill.label}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "group/item rounded-primary primary-ring border-edge relative flex items-center gap-2 border p-1 transition-colors duration-200",
        index % 2 === 0 ? "bg-linear-l" : "bg-linear-b"
      )}>
      <div className="group from-background to-muted primary-ring rounded-primary relative bg-linear-to-b px-1.5 py-1.5">
        {typeOfSkillIcon === "icon" ? (
          <>
            <skill.icon className="text-accent-foreground size-6" />
            <div className="corner-squircle rounded-primary supports-corner-shape:rounded-primary pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset dark:ring-white/15"></div>
          </>
        ) : (
          <Image
            src={skill.icon as string}
            alt={skill.label}
            width={20}
            height={20}
            className="text-accent-foreground size-6 invert"
          />
        )}
      </div>
      <span className="text-accent-foreground truncate text-base font-medium">
        {skill.label}
      </span>
    </motion.div>
  );
}

function SkillCardTooltip({ skill }: { skill: IStack }) {
  const typeOfSkillIcon = skill.icon instanceof Function ? "icon" : "image";
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <div className="group from-background to-muted primary-ring rounded-primary relative bg-linear-to-b px-2.5 py-2">
              {typeOfSkillIcon === "icon" ? (
                <>
                  <skill.icon className="text-accent-foreground size-8 cursor-pointer rounded" />
                  <div className="corner-squircle rounded-primary supports-corner-shape:rounded-primary pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset dark:ring-white/15"></div>
                </>
              ) : (
                <Image
                  src={skill.icon as string}
                  alt={skill.label}
                  width={20}
                  height={20}
                  className="text-accent-foreground size-8 cursor-pointer rounded-md invert"
                />
              )}
            </div>
          }></TooltipTrigger>
        <TooltipContent>
          <p className="text-base">{skill.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { SkillCard, SkillCardTooltip };
