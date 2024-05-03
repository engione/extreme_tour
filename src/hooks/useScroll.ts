import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";

export const useScroll = (dependence?: any) => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const listRef = useRef<HTMLUListElement>(null);

  const checkForScrollPosition = () => {
    const { current } = listRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);

      setCanScrollRight(Math.floor(scrollLeft) !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const scrollContainerBy = (distance: number) => {
    listRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  useEffect(() => {
    const { current } = listRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, [dependence ?? undefined]);

  return { listRef, canScrollLeft, canScrollRight, scrollContainerBy };
};
