import { IPlaybook } from "@/types/app.types";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function PlaybookCard({ data, i }: { data: IPlaybook; i: number }) {
  return (
    <motion.a
      href={`/docs/${data.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group hover:bg-card-hover screen-line-before relative p-4 duration-300"
      )}>
      <h2 className="text-muted-primary group-hover:text-foreground mb-2 text-lg font-medium underline-offset-4 group-hover:underline">
        {data.title}
      </h2>
      {data.description && (
        <p className="text-muted-foreground line-clamp-3">{data.description}</p>
      )}
    </motion.a>
  );
}
