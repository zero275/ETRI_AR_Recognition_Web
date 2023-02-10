import { FONTSIZE, FONTWEIGHT } from "@/constants/constant";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Container = ({ children, title, cls = "basicContainer", addedCls }) => {
  const sectionRef = useRef(null);

  /**
   * framer-motion 이해하고싶다면
   * https://nykim.work/114
   * 잘 정리되어있으니 참조하시길바람
   */
  return (
    <motion.section
      ref={sectionRef}
      exit={{ opacity: 0, x: 1000 }}
      layout
      className={`${cls} ${addedCls}`}
    >
      {title ? (
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: FONTSIZE.L,
            marginBottom: "1em",
            fontWeight: FONTWEIGHT.M,
          }}
        >
          {title}
        </motion.h3>
      ) : (
        <></>
      )}
      {children}
    </motion.section>
  );
};

export default Container;
