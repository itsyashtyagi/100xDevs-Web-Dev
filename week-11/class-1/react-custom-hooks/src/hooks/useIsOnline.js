import { useEffect, useState } from "react";

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  console.log(isOnline);

  useEffect(() => {
    console.log("Inside the useEffect");
    print(isOnline);
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    console.log(
      "After the useEffect function will call and before the clean up functionm"
    );

    // Clean up function - Clean up the event listeners on component unmount

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  console.log(`At the time of the return ` + isOnline);

  return isOnline;
};
