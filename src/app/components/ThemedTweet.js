"use client";

import { useTheme } from "@/app/components/ThemeProvider";
import { Tweet } from "react-tweet";

export default function ThemedTweet({ id }) {
  const { theme } = useTheme();
  
  return (
    <div className="not-prose" data-theme={theme}>
      <Tweet id={id} />
    </div>
  );
} 